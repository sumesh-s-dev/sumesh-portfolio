import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiCalendar, FiTag, FiArrowRight, FiSearch } from 'react-icons/fi';

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

export default function Blog() {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with Next.js and Tailwind CSS',
      slug: 'getting-started-with-nextjs-and-tailwind',
      excerpt: 'Learn how to set up a new project with Next.js and Tailwind CSS, and build a responsive website.',
      date: '2023-04-15',
      tags: ['Next.js', 'Tailwind CSS', 'Web Development'],
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Building a RESTful API with Node.js and Express',
      slug: 'building-restful-api-nodejs-express',
      excerpt: 'A comprehensive guide to creating a RESTful API using Node.js, Express, and MongoDB.',
      date: '2023-03-22',
      tags: ['Node.js', 'Express', 'API', 'Backend'],
      readTime: '8 min read'
    },
    {
      id: 3,
      title: 'State Management in React with Redux Toolkit',
      slug: 'state-management-react-redux-toolkit',
      excerpt: 'Simplify your Redux code with Redux Toolkit. Learn how to manage state efficiently in React applications.',
      date: '2023-02-10',
      tags: ['React', 'Redux', 'State Management'],
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Optimizing Performance in React Applications',
      slug: 'optimizing-performance-react-applications',
      excerpt: 'Tips and techniques to improve the performance of your React applications, from code splitting to memoization.',
      date: '2023-01-18',
      tags: ['React', 'Performance', 'Optimization'],
      readTime: '7 min read'
    },
    {
      id: 5,
      title: 'Introduction to TypeScript for JavaScript Developers',
      slug: 'introduction-typescript-javascript-developers',
      excerpt: 'A beginner-friendly guide to TypeScript for JavaScript developers, covering basic types, interfaces, and more.',
      date: '2022-12-05',
      tags: ['TypeScript', 'JavaScript'],
      readTime: '5 min read'
    },
    {
      id: 6,
      title: 'Deploying Next.js Applications to Vercel',
      slug: 'deploying-nextjs-applications-vercel',
      excerpt: 'Learn how to deploy your Next.js applications to Vercel with continuous integration and custom domains.',
      date: '2022-11-20',
      tags: ['Next.js', 'Deployment', 'Vercel'],
      readTime: '4 min read'
    }
  ];

  // Search and filter state
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  // Get all unique tags
  const allTags = [...new Set(blogPosts.flatMap(post => post.tags))].sort();

  // Filter posts based on search term and selected tag
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTag = selectedTag === '' || post.tags.includes(selectedTag);
    
    return matchesSearch && matchesTag;
  });

  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <>
      <Head>
        <title>Blog | Sumesh - Full Stack Developer</title>
        <meta name="description" content="Read articles about web development, programming tips, and tech insights by Sumesh." />
      </Head>

      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              variants={fadeIn}
            >
              Blog
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8"
              variants={fadeIn}
            >
              Thoughts, tutorials, and insights about web development and technology.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Search and Filter */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="mb-12"
            >
              <motion.div 
                variants={fadeIn}
                className="flex flex-col md:flex-row gap-4 mb-8"
              >
                {/* Search */}
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiSearch className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 w-full border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                {/* Tag Filter */}
                <div className="w-full md:w-64">
                  <select
                    value={selectedTag}
                    onChange={(e) => setSelectedTag(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">All Tags</option>
                    {allTags.map(tag => (
                      <option key={tag} value={tag}>{tag}</option>
                    ))}
                  </select>
                </div>
              </motion.div>

              {/* Selected Tag Display */}
              {selectedTag && (
                <motion.div 
                  variants={fadeIn}
                  className="flex items-center"
                >
                  <span className="text-sm text-gray-600 dark:text-gray-400 mr-2">Filtered by:</span>
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300 flex items-center">
                    {selectedTag}
                    <button 
                      onClick={() => setSelectedTag('')}
                      className="ml-1 text-primary-800 dark:text-primary-300 hover:text-primary-900 dark:hover:text-primary-200"
                    >
                      &times;
                    </button>
                  </span>
                </motion.div>
              )}
            </motion.div>

            {/* Blog Posts Grid */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredPosts.map(post => (
                <motion.article 
                  key={post.id}
                  variants={fadeIn}
                  className="card overflow-hidden flex flex-col"
                >
                  <div className="p-6 flex-grow">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <FiCalendar className="mr-1" />
                      <span>{formatDate(post.date)}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-semibold mb-3 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map(tag => (
                        <button
                          key={tag}
                          onClick={() => setSelectedTag(tag)}
                          className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                        >
                          <FiTag className="inline mr-1" size={10} />
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="px-6 pb-6 mt-auto">
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium flex items-center"
                    >
                      Read More
                      <FiArrowRight className="ml-1" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </motion.div>

            {/* No Results Message */}
            {filteredPosts.length === 0 && (
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="text-center py-12"
              >
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  No articles found for your search criteria.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedTag('');
                  }}
                  className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium"
                >
                  Clear filters
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2 
              variants={fadeIn}
              className="text-3xl font-bold mb-6"
            >
              Subscribe to My Newsletter
            </motion.h2>
            <motion.p 
              variants={fadeIn}
              className="text-lg text-gray-600 dark:text-gray-400 mb-8"
            >
              Get notified when I publish new articles and tutorials.
            </motion.p>
            <motion.form 
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
            >
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 flex-grow border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
              <button
                type="submit"
                className="btn-primary whitespace-nowrap"
              >
                Subscribe
              </button>
            </motion.form>
            <motion.p 
              variants={fadeIn}
              className="text-sm text-gray-500 dark:text-gray-400 mt-4"
            >
              I respect your privacy. Unsubscribe at any time.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  );
}