import Link from 'next/link';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: 'https://github.com/sumesh-s-dev', icon: FiGithub, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/s-sumesh-759132308/', icon: FiLinkedin, label: 'LinkedIn' },
    { href: 'mailto:sumesh2003nov5@gmail.com', icon: FiMail, label: 'Email' },
  ];

  const footerLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/blog', label: 'Blog' },
    { href: '/resume', label: 'Resume' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Sumesh</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Full Stack Developer specializing in modern web technologies and creating exceptional digital experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-200"
                    aria-label={link.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Feel free to reach out if you have any questions or want to work together.
            </p>
            <a
              href="mailto:sumesh2003nov5@gmail.com"
              className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors duration-200"
            >
              sumesh2003nov5@gmail.com
            </a>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            &copy; {currentYear} Sumesh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
