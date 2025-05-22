import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import profile from '../data/profile';

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
  // Education data
  const education = [
    {
      degree: 'Master of Computer Applications',
      institution: 'Lead College of Management, Autonomous, Palakkad',
      period: '2024 - 2026',
      description: 'Programming with Java, JavaScript, React, Generative AI, Advanced Database Management Systems, Python Web Programming, Internet of Things, Flutter Android Development, Cyber Security.'
    },
    {
      degree: 'Bachelor of Computer Applications',
      institution: 'Nehru Arts and Science College, Autonomous, Coimbatore',
      period: '2021 - 2024',
      description: 'Python Programming, Java, Relational Database Management Systems, Oracle, Web Programming with PHP and MySQL, Visual Programming.'
    }
  ];

  return (
    <>
      <Head>
        <title>About Me | {profile.name} - {profile.title}</title>
        <meta name="description" content={`Learn more about ${profile.name}, a ${profile.title} with expertise in modern web technologies.`} />
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
              <div className="w-48 h-48 rounded-full overflow-hidden relative flex-shrink-0">
                <Image 
                  src={profile.image.src}
                  alt={profile.image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 192px, 192px"
                  priority
                />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">{profile.name}</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {profile.bio.short}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {profile.bio.long}
                </p>
                <Link href="/resume" className="btn-primary inline-flex items-center">
                  <FiDownload className="mr-2" aria-hidden="true" />
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
                <FiArrowRight className="ml-2" aria-hidden="true" />
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
