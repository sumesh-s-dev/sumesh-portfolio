import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import GitHubProfile from '../components/github/GitHubProfile';
import { FaGithub, FaSearch } from 'react-icons/fa';

const GitHubPage = () => {
  const [username, setUsername] = useState('sumesh-s-dev');
  const [inputValue, setInputValue] = useState('sumesh-s-dev');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setUsername(inputValue);
    // The loading state will be handled by the GitHubProfile component
    setIsLoading(false);
  };

  return (
    <>
      <Head>
        <title>GitHub Profile | S. Sumesh</title>
        <meta name="description" content="View my GitHub profile, repositories, and contributions" />
      </Head>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <FaGithub className="text-gray-700 dark:text-gray-300" />
              GitHub Profile
            </h1>
            
            <form onSubmit={handleSubmit} className="flex">
              <div className="relative">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="GitHub username"
                  className="px-4 py-2 pr-10 border border-gray-300 dark:border-gray-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 h-full px-3 text-gray-500 dark:text-gray-400"
                  disabled={isLoading}
                >
                  <FaSearch />
                </button>
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors"
                disabled={isLoading}
              >
                View
              </button>
            </form>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm mb-8">
            <p className="text-gray-600 dark:text-gray-300">
              This page uses the GitHub API to display profile information, repositories, and language statistics.
              You can view my GitHub profile below or search for another user.
            </p>
          </div>

          <GitHubProfile username={username} />
        </motion.div>
      </div>
    </>
  );
};

export default GitHubPage;