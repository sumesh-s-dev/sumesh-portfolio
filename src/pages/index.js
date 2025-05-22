import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiExternalLink } from 'react-icons/fi';
import dynamic from 'next/dynamic';

// Dynamically import the GitHubStats component to avoid SSR issues
const GitHubStats = dynamic(() => 
  import('../components/github/GitHubStats').then(mod => mod.default),
  { 
    ssr: false, 
    loading: () => (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    )
  }
);

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
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Sumesh - Full Stack Developer</title>
        <meta name="description" content="Portfolio of Sumesh, a Full Stack Developer specializing in modern web technologies." />
      </Head>

      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600"
              variants={fadeIn}
            >
              Hi, I'm Sumesh
            </motion.h1>
            <motion.h2 
              className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-200"
              variants={fadeIn}
            >
              Full Stack Developer
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8"
              variants={fadeIn}
            >
              I build modern, responsive web applications with cutting-edge technologies.
              Specializing in React, Next.js, Node.js, and cloud solutions.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              variants={fadeIn}
            >
              <Link href="/projects" className="btn-primary">
                View My Work
                <FiArrowRight className="ml-2" aria-hidden="true" />
              </Link>
              <Link href="/contact" className="btn-outline">
                Get In Touch
              </Link>
              <Link href="/modern" className="btn-outline bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0">
                Modern Portfolio
                <FiArrowRight className="ml-2" aria-hidden="true" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Here are some of my recent projects. Check out my projects page for more.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project Card 1 */}
              <div className="card overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image 
                    src="/images/projects/gridlocked-cryptizer.jpg"
                    alt="Gridlocked Cryptizer project screenshot"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Gridlocked Cryptizer</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    A simple and secure file encryption-decryption tool built using Java and MySQL. It allows users to encrypt and decrypt text-based data using a customized grid-based cipher.
                  </p>
                  <div className="flex space-x-4">
                    <a href="https://github.com/sumesh-s-dev/gridlocked-cryptizer" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 flex items-center" aria-label="View GitHub repository for Gridlocked Cryptizer">
                      <FiGithub className="mr-1" aria-hidden="true" /> GitHub
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Card 2 */}
              <div className="card overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image 
                    src="/images/projects/lumos-learning-app.jpg"
                    alt="Lumos Learning App project screenshot"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Lumos Learning App</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    An app designed for CP students to make learning the English alphabet fun and interactive. Combines visual animations, auditory cues, and a responsive drawing canvas.
                  </p>
                  <div className="flex space-x-4">
                    <a href="https://github.com/sumesh-s-dev/lumos-learning-app" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 flex items-center" aria-label="View GitHub repository for Lumos Learning App">
                      <FiGithub className="mr-1" aria-hidden="true" /> GitHub
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Card 3 */}
              <div className="card overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image 
                    src="/images/projects/portfolio-website.jpg"
                    alt="Portfolio Website project screenshot"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    A modern, responsive portfolio website built with Next.js and Tailwind CSS. Showcases skills, projects, blog posts, and GitHub contributions.
                  </p>
                  <div className="flex space-x-4">
                    <a href="https://github.com/sumesh-s-dev/portfolio-website" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 flex items-center" aria-label="View GitHub repository for Portfolio Website">
                      <FiGithub className="mr-1" aria-hidden="true" /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="text-center mt-12">
              <Link href="/projects" className="btn-outline">
                View All Projects
                <FiArrowRight className="ml-2" aria-hidden="true" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">My Skills</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Here are some of the technologies and tools I work with.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
              {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express', 
                'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'Tailwind CSS'].map((skill) => (
                <div key={skill} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <p className="font-medium">{skill}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* GitHub Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">GitHub Contributions</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Check out my open source contributions and activity on GitHub.
              </p>
            </motion.div>

            <motion.div variants={fadeIn}>
              <GitHubStats username="sumesh-s-dev" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
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
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Let's Work Together
            </motion.h2>
            <motion.p 
              variants={fadeIn}
              className="text-lg md:text-xl mb-8 opacity-90"
            >
              Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
            </motion.p>
            <motion.div variants={fadeIn}>
              <Link href="/contact" className="btn bg-white text-primary-600 hover:bg-gray-100 focus:ring-white">
                Get In Touch
                <FiArrowRight className="ml-2" aria-hidden="true" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
