import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiDownload, FiExternalLink, FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi';

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

export default function Resume() {
  // Resume data
  const resumeData = {
    name: 'Sumesh',
    title: 'Full Stack Developer',
    contact: {
      email: 'sumesh2003nov5@gmail.com',
      phone: '+91 9778716121',
      location: 'Kerala, India',
      github: 'https://github.com/sumesh-s-dev',
      linkedin: 'https://www.linkedin.com/in/s-sumesh-759132308/'
    },
    summary: 'Full Stack Developer with a passion for creating efficient, scalable, and user-friendly web applications. Proficient in JavaScript, TypeScript, React, Node.js, and cloud technologies. Strong problem-solving skills and a commitment to writing clean, maintainable code.',
    skills: {
      technical: [
        'JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express',
        'MongoDB', 'PostgreSQL', 'GraphQL', 'REST API', 'HTML5', 'CSS3',
        'Tailwind CSS', 'Redux', 'Jest', 'Cypress', 'Git', 'CI/CD',
        'AWS', 'Docker', 'Microservices', 'Serverless'
      ],
      soft: [
        'Problem Solving', 'Communication', 'Team Collaboration', 'Time Management',
        'Adaptability', 'Attention to Detail', 'Critical Thinking', 'Leadership'
      ]
    },
    education: [
      {
        degree: 'Master of Computer Applications ',
        institution: 'Lead College of Management, Autonomous, Palakkad',
        location: 'Kerala, India',
        period: '2024 - 2026',
        details: 'Programming with Java, JavaScript, React, Generative AI, Advanced Database Management Systems, Python Web Programming, Internet of Things, Flutter Android Development, Cyber Security'
      },
      {
        degree: 'Bachelor of Computer Applications',
        institution: 'Nehru Arts and science College, Autonomous, Coimbatore',
        location: 'Tamil Nadu, India',
        period: '2021 - 2024',
        details: 'Python Programming, Java, Relational Database Management Systems, Oracle, Web Programming with PHP and MySQL, Visual Programming CGPA: 7.4/10.0'
      }
    ],
    certifications: [
      {
        name: 'Data Analysis with Python',
        issuer: 'FreeCodeCamp',
        date: '2025'
      },
      {
        name: 'Google Data Analytics Certificate',
        issuer: 'Coursera',
        date: '2025'
      },
      {
        name: 'Scientific Computing with Python',
        issuer: 'FreeCodeCamp',
        date: '2025'
      },
      {
        name: 'Introduction to Linux (LFS101)',
        issuer: 'Linux Foundation',
        date: '2025'
      },
      {
        name: 'Introduction to Kaggle',
        issuer: 'kaggle',
        date: '2025'
      }
    ],
    experience: [],
    languages: [
      { name: 'English', level: 'Fluent' },
      { name: 'Hindi', level: 'Intermediate' },
      { name: 'Malayalam', level: 'Native'},
      { name: 'Tamil', level: 'Communicative'}
    ]
  };

  return (
    <>
      <Head>
        <title>Resume | Sumesh - Full Stack Developer</title>
        <meta name="description" content="Professional resume of Sumesh, a Full Stack Developer specializing in modern web technologies." />
      </Head>

      {/* Resume Header */}
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
              Resume
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8"
              variants={fadeIn}
            >
              My professional background and skills
            </motion.p>
            <motion.div variants={fadeIn}>
              <a 
                href="/resume/sumesh-resume-ats.html" 
                download="sumesh-resume.pdf"
                className="btn-primary inline-flex items-center"
              >
                <FiDownload className="mr-2" />
                Download Resume
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Resume Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Resume Header */}
            <motion.div 
              variants={fadeIn}
              className="p-8 border-b border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-3xl font-bold mb-2">{resumeData.name}</h2>
              <p className="text-xl text-primary-600 dark:text-primary-400 mb-4">{resumeData.title}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <FiMail className="mr-2 text-gray-500 dark:text-gray-400" />
                    <a 
                      href={`mailto:${resumeData.contact.email}`}
                      className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                    >
                      {resumeData.contact.email}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <FiPhone className="mr-2 text-gray-500 dark:text-gray-400" />
                    <span>{resumeData.contact.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <FiMapPin className="mr-2 text-gray-500 dark:text-gray-400" />
                    <span>{resumeData.contact.location}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <FiGithub className="mr-2 text-gray-500 dark:text-gray-400" />
                    <a 
                      href={`https://${resumeData.contact.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                    >
                      {resumeData.contact.github}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <FiLinkedin className="mr-2 text-gray-500 dark:text-gray-400" />
                    <a 
                      href={`https://${resumeData.contact.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                    >
                      {resumeData.contact.linkedin}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Summary */}
            <motion.div 
              variants={fadeIn}
              className="p-8 border-b border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold mb-4">Professional Summary</h3>
              <p className="text-gray-700 dark:text-gray-300">{resumeData.summary}</p>
            </motion.div>

            {/* Skills */}
            <motion.div 
              variants={fadeIn}
              className="p-8 border-b border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold mb-4">Skills</h3>

              <div className="mb-6">
                <h4 className="text-lg font-medium mb-2">Technical Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {resumeData.skills.technical.map((skill, index) => (
                    <span 
                      key={index}
                      className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded dark:bg-gray-700 dark:text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-2">Soft Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {resumeData.skills.soft.map((skill, index) => (
                    <span 
                      key={index}
                      className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded dark:bg-gray-700 dark:text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>


            {/* Education */}
            <motion.div 
              variants={fadeIn}
              className="p-8 border-b border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold mb-6">Education</h3>

              <div className="space-y-6">
                {resumeData.education.map((edu, index) => (
                  <div key={index}>
                    <h4 className="text-lg font-medium">{edu.degree}</h4>
                    <div className="flex flex-wrap items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
                      <span className="font-medium text-gray-900 dark:text-white">{edu.institution}</span>
                      <span className="mx-2">•</span>
                      <span>{edu.location}</span>
                      <span className="mx-2">•</span>
                      <span>{edu.period}</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{edu.details}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div 
              variants={fadeIn}
              className="p-8 border-b border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold mb-4">Certifications</h3>

              <div className="space-y-3">
                {resumeData.certifications.map((cert, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full mr-3"></div>
                    <div>
                      <span className="font-medium">{cert.name}</span>
                      <span className="mx-2">•</span>
                      <span className="text-gray-600 dark:text-gray-400">{cert.issuer}, {cert.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div 
              variants={fadeIn}
              className="p-8"
            >
              <h3 className="text-xl font-semibold mb-4">Languages</h3>

              <div className="space-y-3">
                {resumeData.languages.map((lang, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full mr-3"></div>
                    <div>
                      <span className="font-medium">{lang.name}</span>
                      <span className="mx-2">•</span>
                      <span className="text-gray-600 dark:text-gray-400">{lang.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
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
              Interested in Working Together?
            </motion.h2>
            <motion.p 
              variants={fadeIn}
              className="text-lg text-gray-600 dark:text-gray-400 mb-8"
            >
              Check out my projects or get in touch to discuss how we can collaborate.
            </motion.p>
            <motion.div 
              variants={fadeIn}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link href="/projects" className="btn-primary">
                View Projects
                <FiExternalLink className="ml-2" />
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
