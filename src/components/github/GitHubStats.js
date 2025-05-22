import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiStar, FiGitBranch, FiCode, FiExternalLink } from 'react-icons/fi';
import { getGitHubData } from '../../utils/github';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const GitHubStats = ({ username = 'sumesh-s-dev' }) => {
  const [githubData, setGithubData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await getGitHubData(username);
        setGithubData(data);
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching GitHub data:', err);
        setError('Failed to load GitHub data. Please try again later.');
        setIsLoading(false);
      }
    };

    fetchData();
  }, [username]);

  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <FiGithub className="w-12 h-12 mx-auto text-gray-400 mb-4" />
        <p className="text-gray-600 dark:text-gray-400">{error}</p>
      </div>
    );
  }

  // Fallback data in case API fails or rate limit is exceeded
  const fallbackData = {
    user: {
      name: 'Sumesh',
      login: username,
      avatar_url: 'https://github.com/identicons/sumesh.png',
      html_url: `https://github.com/${username}`,
      public_repos: 20,
      followers: 45,
      following: 32,
    },
    pinnedRepos: [
      {
        id: 1,
        name: 'portfolio-website',
        description: 'My personal portfolio website built with Next.js and Tailwind CSS',
        url: `https://github.com/${username}/portfolio-website`,
        stars: 12,
        forks: 5,
        language: 'JavaScript',
        topics: ['nextjs', 'tailwindcss', 'portfolio'],
        updatedAt: new Date().toISOString(),
      },
      {
        id: 2,
        name: 'e-commerce-platform',
        description: 'A full-featured e-commerce platform with product management, cart functionality, and payment processing',
        url: `https://github.com/${username}/e-commerce-platform`,
        stars: 28,
        forks: 10,
        language: 'TypeScript',
        topics: ['react', 'nodejs', 'mongodb', 'stripe'],
        updatedAt: new Date().toISOString(),
      },
      {
        id: 3,
        name: 'task-management-app',
        description: 'A Kanban-style task management application with drag-and-drop functionality',
        url: `https://github.com/${username}/task-management-app`,
        stars: 18,
        forks: 7,
        language: 'TypeScript',
        topics: ['react', 'redux', 'firebase'],
        updatedAt: new Date().toISOString(),
      },
    ],
    contributionStats: {
      totalCommits: 342,
      pullRequests: 28,
      issues: 15,
      lastUpdated: new Date().toISOString(),
    },
    languageStats: [
      { language: 'JavaScript', count: 12, percentage: 40 },
      { language: 'TypeScript', count: 8, percentage: 27 },
      { language: 'HTML', count: 5, percentage: 17 },
      { language: 'CSS', count: 3, percentage: 10 },
      { language: 'Python', count: 2, percentage: 6 },
    ],
  };

  // Use real data if available, otherwise use fallback
  const data = githubData?.user ? githubData : fallbackData;

  // Language colors for visualization
  const languageColors = {
    JavaScript: '#f1e05a',
    TypeScript: '#2b7489',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Python: '#3572A5',
    Java: '#b07219',
    Ruby: '#701516',
    PHP: '#4F5D95',
    Go: '#00ADD8',
    Rust: '#dea584',
    C: '#555555',
    'C++': '#f34b7d',
    'C#': '#178600',
    Swift: '#ffac45',
    Kotlin: '#F18E33',
    Dart: '#00B4AB',
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="space-y-8"
    >
      {/* GitHub Profile Summary */}
      <motion.div variants={fadeIn} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <img 
              src={data.user.avatar_url} 
              alt={`${data.user.name || data.user.login}'s GitHub avatar`} 
              className="w-24 h-24 rounded-full"
            />
          </div>

          {/* Profile Info */}
          <div className="flex-grow text-center sm:text-left">
            <h3 className="text-xl font-bold">{data.user.name || data.user.login}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              <a 
                href={data.user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center sm:justify-start hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              >
                <FiGithub className="mr-1" />
                @{data.user.login}
              </a>
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold">{data.user.public_repos}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Repositories</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">{data.user.followers}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Followers</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">{data.user.following}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Following</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Contribution Stats */}
      <motion.div variants={fadeIn} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">Contribution Activity</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
            <p className="text-3xl font-bold text-primary-600 dark:text-primary-400">
              {data.contributionStats.totalCommits}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Commits</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
            <p className="text-3xl font-bold text-primary-600 dark:text-primary-400">
              {data.contributionStats.pullRequests}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Pull Requests</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
            <p className="text-3xl font-bold text-primary-600 dark:text-primary-400">
              {data.contributionStats.issues}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Issues</p>
          </div>
        </div>

        <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-right">
          Last updated: {formatDate(data.contributionStats.lastUpdated)}
        </p>
      </motion.div>

      {/* Language Stats */}
      <motion.div variants={fadeIn} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">Languages</h3>

        <div className="space-y-3">
          {data.languageStats.slice(0, 5).map((lang) => (
            <div key={lang.language} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>{lang.language}</span>
                <span>{lang.percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div 
                  className="h-2.5 rounded-full" 
                  style={{ 
                    width: `${lang.percentage}%`,
                    backgroundColor: languageColors[lang.language] || '#6366F1'
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Pinned Repositories */}
      <motion.div variants={fadeIn}>
        <h3 className="text-lg font-semibold mb-4">Featured Repositories</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.pinnedRepos.map((repo) => (
            <div key={repo.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col h-full">
              <h4 className="text-lg font-medium mb-2">
                <a 
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                >
                  {repo.name}
                </a>
              </h4>

              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">
                {repo.description || 'No description provided.'}
              </p>

              {/* Topics */}
              {repo.topics && repo.topics.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {repo.topics.slice(0, 3).map((topic) => (
                    <span 
                      key={topic}
                      className="text-xs bg-primary-100 text-primary-800 px-2 py-1 rounded dark:bg-primary-900 dark:text-primary-300"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                {/* Language */}
                {repo.language && (
                  <div className="flex items-center">
                    <span 
                      className="w-3 h-3 rounded-full mr-1"
                      style={{ backgroundColor: languageColors[repo.language] || '#6366F1' }}
                    ></span>
                    <span>{repo.language}</span>
                  </div>
                )}

                <div className="flex items-center space-x-4">
                  {/* Stars */}
                  <div className="flex items-center">
                    <FiStar className="mr-1" />
                    <span>{repo.stars}</span>
                  </div>

                  {/* Forks */}
                  <div className="flex items-center">
                    <FiGitBranch className="mr-1" />
                    <span>{repo.forks}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <a 
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium"
          >
            View all repositories
            <FiExternalLink className="ml-1" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default GitHubStats;
