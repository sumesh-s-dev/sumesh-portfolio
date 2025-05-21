import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiCalendar, FiClock, FiTag, FiArrowLeft, FiShare2 } from 'react-icons/fi';

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

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  // This would normally come from a CMS or API
  // For this example, we'll use mock data
  const post = {
    title: 'Getting Started with Next.js and Tailwind CSS',
    date: '2023-04-15',
    readTime: '5 min read',
    author: 'Sumesh',
    tags: ['Next.js', 'Tailwind CSS', 'Web Development'],
    content: `
      <p>Next.js is a React framework that enables server-side rendering, static site generation, and more. Combined with Tailwind CSS, it provides a powerful toolkit for building modern web applications.</p>
      
      <h2>Setting Up Your Project</h2>
      
      <p>To get started with Next.js and Tailwind CSS, you'll need to set up a new project. Here's how:</p>
      
      <pre><code>npx create-next-app my-project
cd my-project
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p</code></pre>
      
      <p>Next, you'll need to configure Tailwind CSS. Create a <code>tailwind.config.js</code> file with the following content:</p>
      
      <pre><code>module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}</code></pre>
      
      <h2>Creating Your First Component</h2>
      
      <p>Now that you have your project set up, let's create a simple component using Tailwind CSS:</p>
      
      <pre><code>// components/Button.js
export default function Button({ children }) {
  return (
    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
      {children}
    </button>
  );
}</code></pre>
      
      <p>You can then use this component in your pages:</p>
      
      <pre><code>// pages/index.js
import Button from '../components/Button';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to My App</h1>
      <Button>Click Me</Button>
    </div>
  );
}</code></pre>
      
      <h2>Responsive Design with Tailwind CSS</h2>
      
      <p>Tailwind CSS makes it easy to create responsive designs. Here's an example:</p>
      
      <pre><code>&lt;div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"&gt;
  &lt;div className="bg-white p-4 rounded shadow"&gt;Card 1&lt;/div&gt;
  &lt;div className="bg-white p-4 rounded shadow"&gt;Card 2&lt;/div&gt;
  &lt;div className="bg-white p-4 rounded shadow"&gt;Card 3&lt;/div&gt;
&lt;/div&gt;</code></pre>
      
      <p>This will create a grid that displays one column on small screens, two columns on medium screens, and three columns on large screens.</p>
      
      <h2>Conclusion</h2>
      
      <p>Next.js and Tailwind CSS provide a powerful combination for building modern web applications. With Next.js, you get server-side rendering and static site generation, while Tailwind CSS gives you a utility-first approach to styling.</p>
      
      <p>In future articles, we'll explore more advanced topics like API routes, authentication, and deployment.</p>
    `,
    relatedPosts: [
      {
        title: 'Building a RESTful API with Node.js and Express',
        slug: 'building-restful-api-nodejs-express'
      },
      {
        title: 'Deploying Next.js Applications to Vercel',
        slug: 'deploying-nextjs-applications-vercel'
      }
    ]
  };

  // If the page is still loading (router.query is empty on first render)
  if (router.isFallback || !slug) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <p className="text-gray-600 dark:text-gray-400">Loading...</p>
      </div>
    );
  }

  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <>
      <Head>
        <title>{post.title} | Sumesh's Blog</title>
        <meta name="description" content={post.content.substring(0, 160)} />
      </Head>

      <article className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Back to Blog */}
            <motion.div variants={fadeIn} className="mb-8">
              <Link 
                href="/blog" 
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 flex items-center"
              >
                <FiArrowLeft className="mr-2" />
                Back to Blog
              </Link>
            </motion.div>

            {/* Post Header */}
            <motion.header variants={fadeIn} className="mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
              
              <div className="flex flex-wrap items-center text-sm text-gray-600 dark:text-gray-400 mb-6">
                <div className="flex items-center mr-6 mb-2">
                  <FiCalendar className="mr-1" />
                  <span>{formatDate(post.date)}</span>
                </div>
                <div className="flex items-center mr-6 mb-2">
                  <FiClock className="mr-1" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center mb-2">
                  <span className="mr-1">By</span>
                  <span className="font-medium">{post.author}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <Link 
                    key={tag} 
                    href={`/blog?tag=${tag}`}
                    className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 flex items-center"
                  >
                    <FiTag className="mr-1" size={10} />
                    {tag}
                  </Link>
                ))}
              </div>
            </motion.header>

            {/* Post Content */}
            <motion.div 
              variants={fadeIn}
              className="prose prose-lg dark:prose-invert max-w-none mb-12"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Share Section */}
            <motion.div variants={fadeIn} className="border-t border-gray-200 dark:border-gray-700 pt-8 mb-12">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Share this article</h3>
                <div className="flex space-x-4">
                  <button 
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                    aria-label="Share on Twitter"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </button>
                  <button 
                    className="text-gray-600 hover:text-blue-800 dark:text-gray-400 dark:hover:text-blue-600"
                    aria-label="Share on LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                    </svg>
                  </button>
                  <button 
                    className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-300"
                    aria-label="Share on Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                    </svg>
                  </button>
                  <button 
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                    aria-label="Copy link"
                  >
                    <FiShare2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Related Posts */}
            {post.relatedPosts && post.relatedPosts.length > 0 && (
              <motion.div variants={fadeIn} className="border-t border-gray-200 dark:border-gray-700 pt-8">
                <h3 className="text-xl font-semibold mb-6">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {post.relatedPosts.map((relatedPost, index) => (
                    <div key={index} className="card p-6">
                      <h4 className="text-lg font-medium mb-2">
                        <Link 
                          href={`/blog/${relatedPost.slug}`}
                          className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                        >
                          {relatedPost.title}
                        </Link>
                      </h4>
                      <Link 
                        href={`/blog/${relatedPost.slug}`}
                        className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium flex items-center"
                      >
                        Read Article
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </Link>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </article>
    </>
  );
}