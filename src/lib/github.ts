import { Octokit } from '@octokit/rest';

// Initialize Octokit with your GitHub token
const octokit = new Octokit({
  auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
});

// Get user profile information
export const getGitHubProfile = async (username: string) => {
  try {
    const { data } = await octokit.users.getByUsername({
      username,
    });
    return data;
  } catch (error) {
    console.error('Error fetching GitHub profile:', error);
    return null;
  }
};

// Get user repositories
export const getRepositories = async (username: string) => {
  try {
    const { data } = await octokit.repos.listForUser({
      username,
      sort: 'updated',
      per_page: 10,
    });
    return data;
  } catch (error) {
    console.error('Error fetching repositories:', error);
    return [];
  }
};

// Get user contribution stats
export const getContributionStats = async (username: string) => {
  // This requires GraphQL API, we'll use a simplified version here
  try {
    // Get commit activity for the user's repositories
    const repos = await getRepositories(username);
    
    // Get stats for each repository
    const stats = await Promise.all(
      repos.map(async (repo) => {
        try {
          const { data } = await octokit.repos.getCommitActivityStats({
            owner: repo.owner.login,
            repo: repo.name,
          });
          return {
            repo: repo.name,
            activity: data,
          };
        } catch (error) {
          return {
            repo: repo.name,
            activity: [],
          };
        }
      })
    );
    
    return stats;
  } catch (error) {
    console.error('Error fetching contribution stats:', error);
    return [];
  }
};

// Get user languages
export const getUserLanguages = async (username: string) => {
  try {
    const repos = await getRepositories(username);
    
    // Get languages for each repository
    const languages = await Promise.all(
      repos.map(async (repo) => {
        try {
          const { data } = await octokit.repos.listLanguages({
            owner: repo.owner.login,
            repo: repo.name,
          });
          return {
            repo: repo.name,
            languages: data,
          };
        } catch (error) {
          return {
            repo: repo.name,
            languages: {},
          };
        }
      })
    );
    
    // Aggregate languages across all repositories
    const aggregatedLanguages: Record<string, number> = {};
    languages.forEach((repo) => {
      Object.entries(repo.languages).forEach(([language, bytes]) => {
        if (aggregatedLanguages[language]) {
          aggregatedLanguages[language] += bytes as number;
        } else {
          aggregatedLanguages[language] = bytes as number;
        }
      });
    });
    
    return aggregatedLanguages;
  } catch (error) {
    console.error('Error fetching user languages:', error);
    return {};
  }
};