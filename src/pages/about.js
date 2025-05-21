import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight } from 'react-icons/fi';

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

export default function About() {
  // Experience data
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Company',
      period: '2020 - Present',
      description: 'Led development of multiple web applications using React, Node.js, and AWS. Implemented CI/CD pipelines and mentored junior developers.'
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Agency',
      period: '2018 - 2020',
      description: 'Developed responsive web applications for clients across various industries. Worked with React, Express, and MongoDB.'
    },
    {
      title: 'Frontend Developer',
      company: 'Startup',
      period: '2016 - 2018',
      description: 'Built user interfaces using React and Redux. Collaborated with designers to implement pixel-perfect designs.'
    }
  ];

  // Education data
  const education = [
    {
      degree: 'Master of Computer Science',
      institution: 'University Name',
      period: '2014 - 2016',
      description: 'Specialized in web technologies and distributed systems.'
    },
    {
      degree: 'Bachelor of Computer Science',
      institution: 'University Name',
      period: '2010 - 2014',
      description: 'Graduated with honors. Focused on software engineering and database systems.'
    }
  ];

  return (
    <>
      <Head>
        <title>About Me | Sumesh - Full Stack Developer</title>
        <meta name="description" content="Learn more about Sumesh, a Full Stack Developer with expertise in modern web technologies." />
      </Head>

      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6 text-center"
              variants={fadeIn}
            >
              About Me
            </motion.h1>
            <motion.div 
              className="flex flex-col md:flex-row items-center gap-8 mb-12"
              variants={fadeIn}
            >
              <div className="w-48 h-48 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Profile Photo</span>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">Sumesh</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  I'm a passionate Full Stack Developer with over 5 years of experience building modern web applications.
                  I specialize in JavaScript/TypeScript, React, Next.js, Node.js, and cloud technologies.
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  I enjoy solving complex problems and creating intuitive, efficient user experiences.
                  When I'm not coding, you can find me exploring new technologies, contributing to open source, or hiking in the mountains.
                </p>
                <Link href="/resume" className="btn-primary inline-flex items-center">
                  <FiDownload className="mr-2" />
                  Download Resume
                </Link>
              </div>
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
            <motion.h2 
              variants={fadeIn}
              className="text-3xl font-bold mb-12 text-center"
            >
              My Skills
            </motion.h2>

            <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Frontend Skills */}
              <div className="card p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary-600 dark:text-primary-400">Frontend</h3>
                <ul className="space-y-2">
                  {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Redux', 'HTML5', 'CSS3', 'Tailwind CSS', 'Framer Motion'].map((skill) => (
                    <li key={skill} className="flex items-center">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Backend Skills */}
              <div className="card p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary-600 dark:text-primary-400">Backend</h3>
                <ul className="space-y-2">
                  {['Node.js', 'Express', 'NestJS', 'GraphQL', 'REST API', 'MongoDB', 'PostgreSQL', 'Redis', 'Microservices'].map((skill) => (
                    <li key={skill} className="flex items-center">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* DevOps & Tools */}
              <div className="card p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary-600 dark:text-primary-400">DevOps & Tools</h3>
                <ul className="space-y-2">
                  {['Git', 'GitHub Actions', 'Docker', 'AWS', 'Vercel', 'CI/CD', 'Jest', 'Cypress', 'Webpack', 'Vite'].map((skill) => (
                    <li key={skill} className="flex items-center">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 
              variants={fadeIn}
              className="text-3xl font-bold mb-12 text-center"
            >
              Work Experience
            </motion.h2>

            <motion.div variants={fadeIn} className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="card p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-primary-600 dark:text-primary-400">{exp.company}</p>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">{exp.period}</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 
              variants={fadeIn}
              className="text-3xl font-bold mb-12 text-center"
            >
              Education
            </motion.h2>

            <motion.div variants={fadeIn} className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="card p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{edu.degree}</h3>
                      <p className="text-primary-600 dark:text-primary-400">{edu.institution}</p>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">{edu.period}</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-50 dark:bg-gray-800">
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
              Interested in Working Together?
            </motion.h2>
            <motion.p 
              variants={fadeIn}
              className="text-lg text-gray-600 dark:text-gray-300 mb-8"
            >
              Check out my projects or get in touch to discuss how we can collaborate.
            </motion.p>
            <motion.div 
              variants={fadeIn}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link href="/projects" className="btn-primary">
                View Projects
                <FiArrowRight className="ml-2" />
              </Link>
              <Link href="/contact" className="btn-outline">
                Contact Me
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}