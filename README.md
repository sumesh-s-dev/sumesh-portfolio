# Portfolio Website

A modern, responsive portfolio website built with Next.js and Tailwind CSS. This project showcases a developer's skills, projects, blog posts, and GitHub contributions.

## Features

- **Responsive Design**: Looks great on all devices (mobile, tablet, desktop)
- **Dark Mode**: Toggle between light and dark themes
- **Animated UI**: Smooth animations using Framer Motion
- **GitHub Integration**: Display repositories, contributions, and language stats
- **Blog System**: Create and display blog posts with MDX
- **Contact Form**: Get in touch with the developer
- **Resume Page**: View and download resume
- **SEO Optimized**: Meta tags for better search engine visibility

## Tech Stack

- **Frontend**: Next.js, React, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **API Integration**: GitHub API
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 14.x or later
- npm or yarn

### Static Portfolio Page

This repository includes a static HTML portfolio page that can be accessed directly without running the Next.js application:

- When running the Next.js application with `npm run dev`, you can access the static portfolio at:
  [http://localhost:3000/portfolio.html](http://localhost:3000/portfolio.html)

- The static portfolio includes:
  - Light/dark theme toggle
  - Responsive design for all devices
  - Sections for About, Skills, Projects, Education, and Certifications
  - Contact form that submits to a backend API

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory with the following variables:
   ```
   # GitHub API token (create one at https://github.com/settings/tokens)
   GITHUB_TOKEN=your_github_token_here

   # Backend API URL (if connecting to a separate backend service)
   NEXT_PUBLIC_API_URL=https://api.example.com

   # Google Analytics ID (if using Google Analytics)
   NEXT_PUBLIC_GA_ID=UA-XXXXXXXXX-X
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
portfolio-frontend/
├── public/
│   ├── assets/                # Images, icons, etc.
│   ├── resume/                # Downloadable resume file
├── src/
│   ├── components/            # Reusable React components
│   │   ├── layout/            # Layout components (Header, Footer)
│   │   ├── home/              # Home page components
│   │   ├── github/            # GitHub related components
│   │   ├── projects/          # Project showcase components
│   │   ├── blog/              # Blog related components
│   │   ├── ui/                # UI elements (Button, Card, etc.)
│   ├── pages/                 # Next.js pages
│   │   ├── index.js           # Home page
│   │   ├── about.js           # About page
│   │   ├── projects.js        # Projects page
│   │   ├── blog/              # Blog pages
│   │   │   ├── index.js       # Blog listing
│   │   │   ├── [slug].js      # Individual blog post
│   │   ├── contact.js         # Contact page
│   │   ├── resume.js          # Dynamic resume page
│   │   ├── _app.js            # Main app wrapper
│   │   ├── _document.js       # Custom document
│   ├── styles/                # Tailwind and custom CSS
│   ├── hooks/                 # Custom React hooks
│   ├── utils/                 # Utility functions
│   │   ├── github.js          # GitHub API functions
│   │   ├── animations.js      # Animation utilities
│   │   ├── theme.js           # Theme management
│   ├── data/                  # Static data (resume JSON, etc.)
│   ├── lib/                   # Library code
│   │   ├── mdx.js             # MDX processing for blog
├── .env.local                 # Environment variables
├── next.config.js             # Next.js configuration
├── tailwind.config.js         # Tailwind configuration
├── jsconfig.json              # JS configuration
├── README.md                  # Documentation
```

## Customization

### Personal Information

Update your personal information in the following files:

- `src/components/layout/Header.js`: Update the logo and navigation links
- `src/components/layout/Footer.js`: Update social links and contact information
- `src/pages/about.js`: Update your bio, skills, and experience
- `src/pages/resume.js`: Update your resume data

### Projects

Add your projects in the `src/pages/projects.js` file or create a separate data file in the `src/data` directory.

### Blog Posts

Create your blog posts as MDX files in the `src/data/blog` directory.

### GitHub Integration

Update the GitHub username in the `src/components/github/GitHubStats.js` component.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

1. Push your code to a GitHub repository
2. Import the project to Vercel
3. Add the environment variables
4. Deploy

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [GitHub API](https://docs.github.com/en/rest)
