import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiTwitter, FiSend } from 'react-icons/fi';

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

export default function Contact() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
    message: ''
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Set submitting state
    setFormStatus({
      isSubmitting: true,
      isSubmitted: false,
      isError: false,
      message: ''
    });

    // Simulate API call with timeout
    setTimeout(() => {
      // In a real application, you would send the form data to your backend
      // For this example, we'll just simulate a successful submission
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        isError: false,
        message: 'Thank you for your message! I will get back to you soon.'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <>
      <Head>
        <title>Contact | Sumesh - Full Stack Developer</title>
        <meta name="description" content="Get in touch with Sumesh for project inquiries, collaborations, or just to say hello." />
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
              Get In Touch
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8"
              variants={fadeIn}
            >
              Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="order-2 md:order-1"
              >
                <motion.h2 
                  variants={fadeIn}
                  className="text-2xl font-bold mb-6"
                >
                  Contact Information
                </motion.h2>

                <motion.div variants={fadeIn} className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <FiMail className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">Email</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        <a 
                          href="mailto:sumesh2003nov5@gmail.com"
                          className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                        >
                          sumesh2003nov5@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <FiMapPin className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">Location</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Karipode, Palakkad, Kerala, India
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn}>
                  <h3 className="text-lg font-medium mb-4">Connect with me</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://github.com/sumesh" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-200"
                      aria-label="GitHub"
                    >
                      <FiGithub className="w-6 h-6" />
                    </a>
                    <a 
                      href="https://linkedin.com/in/sumesh" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-200"
                      aria-label="LinkedIn"
                    >
                      <FiLinkedin className="w-6 h-6" />
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  variants={fadeIn}
                  className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
                >
                  <h3 className="text-lg font-medium mb-4">Availability</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    I'm currently available for freelance work and open to discussing new opportunities.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Response time: <span className="font-medium text-gray-900 dark:text-white">Within 24-48 hours</span>
                  </p>
                </motion.div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="order-1 md:order-2"
              >
                <motion.h2 
                  variants={fadeIn}
                  className="text-2xl font-bold mb-6"
                >
                  Send Me a Message
                </motion.h2>

                {formStatus.isSubmitted ? (
                  <motion.div 
                    variants={fadeIn}
                    className="p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-800 dark:text-green-200"
                  >
                    <p className="font-medium">{formStatus.message}</p>
                  </motion.div>
                ) : (
                  <motion.form 
                    variants={fadeIn}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>

                    <div>
                      <button
                        type="submit"
                        disabled={formStatus.isSubmitting}
                        className="btn-primary w-full flex justify-center items-center"
                      >
                        {formStatus.isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            <FiSend className="mr-2" />
                            Send Message
                          </>
                        )}
                      </button>
                    </div>

                    {formStatus.isError && (
                      <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-800 dark:text-red-200">
                        <p>{formStatus.message}</p>
                      </div>
                    )}
                  </motion.form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto"
          >
            <motion.h2 
              variants={fadeIn}
              className="text-2xl font-bold mb-8 text-center"
            >
              My Location
            </motion.h2>

            <motion.div 
              variants={fadeIn}
              className="h-96 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31371.78696491142!2d76.6335!3d10.7719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba86dfa087d31ad%3A0xf542d6eb7a870a56!2sKaripode%2C%20Kerala!5e0!3m2!1sen!2sin!4v1652345678901!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Karipode, Palakkad Map"
                className="w-full h-full"
              ></iframe>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
