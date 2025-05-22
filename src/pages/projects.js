import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFilter } from 'react-icons/fi';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  },
  exit: { 
    opacity: 0,
    y: 20,
    transition: { duration: 0.2 }
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

export default function Projects() {
  // Project data
  const projects = [
    {
      id: 1,
      title: 'Gridlocked Cryptizer',
      description: 'A simple and secure file encryption-decryption tool built using Java and MySQL. It allows users to encrypt and decrypt text-based data using a customized grid-based cipher.',
      image: '/images/projects/gridlocked-cryptizer.jpg',
      tags: ['Java', 'MySQL', 'Encryption', 'Security'],
      category: 'Full Stack',
      github: 'https://github.com/sumesh-s-dev/gridlocked-cryptizer',
      featured: true
    },
    {
      id: 2,
      title: 'Lumos Learning App',
      description: 'An app designed for CP students to make learning the English alphabet fun and interactive. Combines visual animations, auditory cues, and a responsive drawing canvas.',
      image: '/images/projects/lumos-learning-app.jpg',
      tags: ['JavaScript', 'HTML/CSS', 'Animation', 'Education'],
      category: 'Frontend',
      github: 'https://github.com/sumesh-s-dev/lumos-learning-app',
      featured: true
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with Next.js and Tailwind CSS. Showcases skills, projects, blog posts, and GitHub contributions.',
      image: '/images/projects/portfolio-website.jpg',
      tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      category: 'Frontend',
      github: 'https://github.com/sumesh-s-dev/portfolio-website',
      featured: true
    },
  ];

  // Filter state
  const [filter, setFilter] = useState('All');

  // Available categories for filtering
  const categories = ['All', 'Frontend', 'Backend', 'Full Stack'];

  // Filtered projects
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <>
      <Head>
        <title>Projects | Sumesh - Full Stack Developer</title>
        <meta name="description" content="Explore the projects developed by Sumesh, showcasing skills in frontend, backend, and full stack development." />
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
              My Projects
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8"
              variants={fadeIn}
            >
              Here's a collection of my recent work. Each project represents different skills and technologies I've worked with.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-7xl mx-auto"
          >
            {/* Filter Controls */}
            <motion.div 
              variants={fadeIn}
              className="flex flex-wrap items-center justify-center gap-4 mb-12"
            >
              <span className="flex items-center text-gray-700 dark:text-gray-300">
                <FiFilter className="mr-2" aria-hidden="true" /> Filter by:
              </span>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    filter === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
                  }`}
                  aria-label={`Filter projects by ${category}`}
                  aria-pressed={filter === category}
                >
                  {category}
                </button>
              ))}
            </motion.div>

            {/* Projects Grid */}
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredProjects.map(project => (
                  <motion.div
                    key={project.id}
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    layout
                    className="card overflow-hidden"
                  >
                    {/* Project Image */}
                    <div className="relative h-48 w-full">
                      <Image 
                        src={project.image}
                        alt={`${project.title} project screenshot`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        {project.featured && (
                          <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                            Featured
                          </span>
                        )}
                      </div>

                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map(tag => (
                          <span 
                            key={tag} 
                            className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex space-x-4">
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 flex items-center"
                          aria-label={`View GitHub repository for ${project.title}`}
                        >
                          <FiGithub className="mr-1" aria-hidden="true" /> GitHub
                        </a>
                        {project.demo && (
                          <a 
                            href={project.demo} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 flex items-center"
                            aria-label={`View live demo for ${project.title}`}
                          >
                            <FiExternalLink className="mr-1" aria-hidden="true" /> Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* No Results Message */}
            {filteredProjects.length === 0 && (
              <motion.div 
                variants={fadeIn}
                className="text-center py-12"
              >
                <p className="text-gray-600 dark:text-gray-400">
                  No projects found for the selected filter.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA Section */}
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
              Have a Project in Mind?
            </motion.h2>
            <motion.p 
              variants={fadeIn}
              className="text-lg text-gray-600 dark:text-gray-400 mb-8"
            >
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </motion.p>
            <motion.div variants={fadeIn}>
              <Link 
                href="/contact" 
                className="btn-primary inline-flex items-center"
              >
                Let's Talk
                <FiExternalLink className="ml-2" aria-hidden="true" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
