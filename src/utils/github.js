/**
 * GitHub API utility functions for fetching user data, repositories, and contributions
 */

/**
 * Fetch user profile data from GitHub API
 * @param {string} username - GitHub username
 * @returns {Promise<Object>} - GitHub user data
 */
export async function fetchGitHubUser(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: process.env.GITHUB_TOKEN ? `token ${process.env.GITHUB_TOKEN}` : '',
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching GitHub user:', error);
    return null;
  }
}

/**
 * Fetch pinned repositories from GitHub
 * @param {string} username - GitHub username
 * @param {number} limit - Maximum number of repositories to fetch
 * @returns {Promise<Array>} - Array of repository data
 */
export async function fetchPinnedRepos(username, limit = 6) {
  try {
    // GitHub API doesn't have a direct endpoint for pinned repos
    // So we fetch all repos and sort them by stars
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=${limit}`,
      {
        headers: {
          Authorization: process.env.GITHUB_TOKEN ? `token ${process.env.GITHUB_TOKEN}` : '',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`);
    }

    const repos = await response.json();
    
    // Sort by stars and get the top ones
    return repos
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, limit)
      .map(repo => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        url: repo.html_url,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        language: repo.language,
        topics: repo.topics || [],
        updatedAt: repo.updated_at,
      }));
  } catch (error) {
    console.error('Error fetching pinned repos:', error);
    return [];
  }
}

/**
 * Fetch user's contribution stats
 * @param {string} username - GitHub username
 * @returns {Promise<Object>} - Contribution statistics
 */
export async function fetchContributionStats(username) {
  try {
    // GitHub API doesn't provide contribution stats directly
    // This is a simplified version that gets total commits from the events API
    const response = await fetch(`https://api.github.com/users/${username}/events?per_page=100`, {
      headers: {
        Authorization: process.env.GITHUB_TOKEN ? `token ${process.env.GITHUB_TOKEN}` : '',
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`);
    }

    const events = await response.json();
    
    // Count push events (commits)
    const pushEvents = events.filter(event => event.type === 'PushEvent');
    const totalCommits = pushEvents.reduce((total, event) => total + event.payload.commits.length, 0);
    
    // Count other contribution types
    const pullRequestEvents = events.filter(event => 
      event.type === 'PullRequestEvent' && event.payload.action === 'opened'
    ).length;
    
    const issueEvents = events.filter(event => 
      event.type === 'IssuesEvent' && event.payload.action === 'opened'
    ).length;
    
    return {
      totalCommits,
      pullRequests: pullRequestEvents,
      issues: issueEvents,
      lastUpdated: new Date().toISOString(),
    };
  } catch (error) {
    console.error('Error fetching contribution stats:', error);
    return {
      totalCommits: 0,
      pullRequests: 0,
      issues: 0,
      lastUpdated: new Date().toISOString(),
    };
  }
}

/**
 * Fetch languages used across repositories
 * @param {string} username - GitHub username
 * @returns {Promise<Object>} - Object with languages and their usage percentages
 */
export async function fetchLanguageStats(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {
      headers: {
        Authorization: process.env.GITHUB_TOKEN ? `token ${process.env.GITHUB_TOKEN}` : '',
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`);
    }

    const repos = await response.json();
    
    // Count languages across all repos
    const languageCounts = {};
    repos.forEach(repo => {
      if (repo.language) {
        languageCounts[repo.language] = (languageCounts[repo.language] || 0) + 1;
      }
    });
    
    // Convert to percentages
    const totalRepos = repos.length;
    const languageStats = Object.entries(languageCounts).map(([language, count]) => ({
      language,
      count,
      percentage: Math.round((count / totalRepos) * 100),
    }));
    
    // Sort by usage
    return languageStats.sort((a, b) => b.count - a.count);
  } catch (error) {
    console.error('Error fetching language stats:', error);
    return [];
  }
}

/**
 * Get all GitHub data for a user
 * @param {string} username - GitHub username
 * @returns {Promise<Object>} - All GitHub data
 */
export async function getGitHubData(username) {
  const [user, pinnedRepos, contributionStats, languageStats] = await Promise.all([
    fetchGitHubUser(username),
    fetchPinnedRepos(username),
    fetchContributionStats(username),
    fetchLanguageStats(username),
  ]);
  
  return {
    user,
    pinnedRepos,
    contributionStats,
    languageStats,
  };
}