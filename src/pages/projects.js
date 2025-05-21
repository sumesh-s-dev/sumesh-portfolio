import { useState } from 'react';
import Head from 'next/head';
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
  // Sample project data
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with product management, cart functionality, and payment processing.',
      image: '/placeholder.jpg',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'Full Stack',
      github: 'https://github.com/sumesh/ecommerce',
      demo: 'https://ecommerce-demo.sumesh.dev',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A Kanban-style task management application with drag-and-drop functionality and team collaboration features.',
      image: '/placeholder.jpg',
      tags: ['React', 'Redux', 'Firebase', 'Tailwind CSS'],
      category: 'Frontend',
      github: 'https://github.com/sumesh/task-manager',
      demo: 'https://tasks.sumesh.dev',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A weather dashboard that displays current conditions and forecasts for multiple locations.',
      image: '/placeholder.jpg',
      tags: ['JavaScript', 'OpenWeather API', 'Chart.js'],
      category: 'Frontend',
      github: 'https://github.com/sumesh/weather-app',
      demo: 'https://weather.sumesh.dev',
      featured: false
    },
    {
      id: 4,
      title: 'Blog API',
      description: 'A RESTful API for a blog platform with authentication, post management, and commenting functionality.',
      image: '/placeholder.jpg',
      tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      category: 'Backend',
      github: 'https://github.com/sumesh/blog-api',
      demo: null,
      featured: false
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A personal portfolio website built with Next.js and Tailwind CSS.',
      image: '/placeholder.jpg',
      tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      category: 'Frontend',
      github: 'https://github.com/sumesh/portfolio',
      demo: 'https://sumesh.dev',
      featured: true
    },
    {
      id: 6,
      title: 'Real-time Chat Application',
      description: 'A real-time chat application with private messaging, group chats, and file sharing.',
      image: '/placeholder.jpg',
      tags: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      category: 'Full Stack',
      github: 'https://github.com/sumesh/chat-app',
      demo: 'https://chat.sumesh.dev',
      featured: false
    }
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
                <FiFilter className="mr-2" /> Filter by:
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
                      <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                        <span className="text-gray-500 dark:text-gray-400">Project Image</span>
                      </div>
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
                        >
                          <FiGithub className="mr-1" /> GitHub
                        </a>
                        {project.demo && (
                          <a 
                            href={project.demo} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 flex items-center"
                          >
                            <FiExternalLink className="mr-1" /> Live Demo
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
              <a 
                href="/contact" 
                className="btn-primary inline-flex items-center"
              >
                Let's Talk
                <FiExternalLink className="ml-2" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}