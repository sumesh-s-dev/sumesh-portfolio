import React, { useEffect, useState } from 'react';
import { getGitHubProfile, getRepositories, getUserLanguages } from '../../lib/github';
import { motion } from 'framer-motion';
import GitHubCalendar from 'react-github-calendar';
import LanguageChart from './LanguageChart';
import { FaGithub, FaCode, FaStar, FaCodeBranch } from 'react-icons/fa';

const GitHubProfile = ({ username }) => {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [languages, setLanguages] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubData = async () => {
      setLoading(true);
      try {
        const [profileData, reposData, languagesData] = await Promise.all([
          getGitHubProfile(username),
          getRepositories(username),
          getUserLanguages(username),
        ]);
        
        setProfile(profileData);
        setRepos(reposData);
        setLanguages(languagesData);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, [username]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="text-center py-8">
        <p>Could not fetch GitHub profile. Please check the username and try again.</p>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
        <img 
          src={profile.avatar_url} 
          alt={`${username}'s avatar`} 
          className="w-24 h-24 rounded-full border-4 border-blue-500"
        />
        <div>
          <h3 className="text-2xl font-bold">{profile.name || username}</h3>
          <p className="text-gray-600 dark:text-gray-300">{profile.bio}</p>
          <div className="flex gap-4 mt-2">
            <span className="flex items-center gap-1 text-sm">
              <FaGithub /> {profile.followers} followers
            </span>
            <span className="flex items-center gap-1 text-sm">
              <FaCode /> {profile.public_repos} repositories
            </span>
          </div>
          <a 
            href={profile.html_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <FaGithub /> View Profile
          </a>
        </div>
      </div>

      {/* Contribution Calendar */}
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-4">Contribution Activity</h3>
        <div className="overflow-x-auto">
          <GitHubCalendar username={username} colorScheme="light" />
        </div>
      </div>

      {/* Language Statistics */}
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-4">Languages</h3>
        <LanguageChart languages={languages} />
      </div>

      {/* Featured Repositories */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Featured Repositories</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {repos.slice(0, 4).map((repo) => (
            <motion.div 
              key={repo.id}
              whileHover={{ y: -5 }}
              className="p-5 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
            >
              <h4 className="font-bold text-lg">{repo.name}</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 line-clamp-2">
                {repo.description || 'No description provided.'}
              </p>
              <div className="flex gap-3 mt-3 text-sm">
                <span className="flex items-center gap-1">
                  <FaStar className="text-yellow-500" /> {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1">
                  <FaCodeBranch className="text-green-500" /> {repo.forks_count}
                </span>
                {repo.language && (
                  <span className="ml-auto text-blue-500">{repo.language}</span>
                )}
              </div>
              <a 
                href={repo.html_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full mt-4 text-center py-2 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                View Repository
              </a>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-4">
          <a 
            href={`https://github.com/${username}?tab=repositories`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
          >
            View All Repositories
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default GitHubProfile;