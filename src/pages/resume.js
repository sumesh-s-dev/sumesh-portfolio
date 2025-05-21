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
      email: 'contact@sumesh.dev',
      phone: '+1 (123) 456-7890',
      location: 'San Francisco, CA',
      github: 'github.com/sumesh',
      linkedin: 'linkedin.com/in/sumesh'
    },
    summary: 'Experienced Full Stack Developer with a passion for creating efficient, scalable, and user-friendly web applications. Proficient in JavaScript, TypeScript, React, Node.js, and cloud technologies. Strong problem-solving skills and a commitment to writing clean, maintainable code.',
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
    experience: [
      {
        title: 'Senior Full Stack Developer',
        company: 'Tech Company',
        location: 'San Francisco, CA',
        period: 'January 2020 - Present',
        responsibilities: [
          'Lead development of multiple web applications using React, Node.js, and AWS',
          'Architect and implement scalable backend services using microservices architecture',
          'Optimize application performance, reducing load times by 40%',
          'Mentor junior developers and conduct code reviews',
          'Collaborate with product managers and designers to define product requirements',
          'Implement CI/CD pipelines for automated testing and deployment'
        ]
      },
      {
        title: 'Full Stack Developer',
        company: 'Digital Agency',
        location: 'San Francisco, CA',
        period: 'March 2018 - December 2019',
        responsibilities: [
          'Developed responsive web applications for clients across various industries',
          'Built RESTful APIs using Node.js, Express, and MongoDB',
          'Implemented authentication and authorization systems using JWT',
          'Created reusable React components and custom hooks',
          'Integrated third-party APIs and services',
          'Participated in agile development processes'
        ]
      },
      {
        title: 'Frontend Developer',
        company: 'Startup',
        location: 'San Francisco, CA',
        period: 'June 2016 - February 2018',
        responsibilities: [
          'Built user interfaces using React and Redux',
          'Collaborated with designers to implement pixel-perfect designs',
          'Improved website performance and accessibility',
          'Developed responsive layouts for mobile and desktop',
          'Participated in user testing and feedback sessions',
          'Maintained and updated existing codebase'
        ]
      }
    ],
    education: [
      {
        degree: 'Master of Computer Science',
        institution: 'University Name',
        location: 'San Francisco, CA',
        period: '2014 - 2016',
        details: 'Specialized in web technologies and distributed systems. GPA: 3.8/4.0'
      },
      {
        degree: 'Bachelor of Computer Science',
        institution: 'University Name',
        location: 'San Francisco, CA',
        period: '2010 - 2014',
        details: 'Graduated with honors. Focused on software engineering and database systems. GPA: 3.7/4.0'
      }
    ],
    certifications: [
      {
        name: 'AWS Certified Solutions Architect',
        issuer: 'Amazon Web Services',
        date: '2022'
      },
      {
        name: 'Google Cloud Professional Developer',
        issuer: 'Google Cloud',
        date: '2021'
      },
      {
        name: 'MongoDB Certified Developer',
        issuer: 'MongoDB',
        date: '2020'
      }
    ],
    languages: [
      { name: 'English', level: 'Native' },
      { name: 'Spanish', level: 'Intermediate' }
    ]
  };

  return (
    <>
      <Head>
        <title>Resume | Sumesh - Full Stack Developer</title>
        <meta name="description" content="Professional resume of Sumesh, a Full Stack Developer with experience in modern web technologies." />
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
              My professional background, skills, and experience
            </motion.p>
            <motion.div variants={fadeIn}>
              <a 
                href="/resume/sumesh-resume.pdf" 
                download
                className="btn-primary inline-flex items-center"
              >
                <FiDownload className="mr-2" />
                Download PDF
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

            {/* Experience */}
            <motion.div 
              variants={fadeIn}
              className="p-8 border-b border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold mb-6">Work Experience</h3>
              
              <div className="space-y-8">
                {resumeData.experience.map((exp, index) => (
                  <div key={index} className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-200 dark:before:bg-gray-700">
                    <div className="absolute left-0 top-1.5 w-4 h-4 -ml-2 rounded-full bg-primary-600 dark:bg-primary-500"></div>
                    <h4 className="text-lg font-medium">{exp.title}</h4>
                    <div className="flex flex-wrap items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
                      <span className="font-medium text-gray-900 dark:text-white">{exp.company}</span>
                      <span className="mx-2">•</span>
                      <span>{exp.location}</span>
                      <span className="mx-2">•</span>
                      <span>{exp.period}</span>
                    </div>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                      {exp.responsibilities.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
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