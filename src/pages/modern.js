import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { 
  Play, Pause, Volume2, Heart, Share, Download, ArrowUp, Zap, Sparkles, 
  Rocket, Brain, Coffee, Moon, Sun, Settings, Search, Filter, Grid, List, 
  Eye, Globe, Code2, Figma, Smartphone, Database, Cloud, Lock, Trophy, 
  Target, Compass, Battery, Briefcase, GraduationCap, User, Mail, Phone, 
  Github, Linkedin, Languages, FileText, Award, Monitor, X
} from 'lucide-react';

export default function UltraModernPortfolio() {
  const [currentView, setCurrentView] = useState('discover');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [likedProjects, setLikedProjects] = useState(new Set());
  const [scrollY, setScrollY] = useState(0);
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSettings, setShowSettings] = useState(false);
  const containerRef = useRef(null);

  // Function to download resume
  const downloadResume = () => {
    // Create a link to the resume file and trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Assuming resume.pdf exists in the public folder
    link.download = 'Sumesh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Personal Information - Updated with Sumesh's details
  const personalInfo = {
    name: "S SUMESH",
    title: "MCA Student | Entry-Level Software Developer",
    phone: "+91 9778716121",
    email: "sumesh2003nov5@gmail.com",
    location: "Palakkad, Kerala, India",
    github: "sumesh-s-dev",
    linkedin: "s-sumesh-759132308",
    summary: "Recent BCA graduate currently pursuing MCA with foundation in programming, web development, and database management. Experienced in Java and Python development with interest in blockchain technology and secure system development. Seeking entry-level opportunities to apply academic knowledge while developing practical experience with data analysis and secure application development. Eager to contribute to projects that solve real-world problems."
  };

  // Projects - Updated with Sumesh's projects
  const projects = [
    {
      id: 1,
      title: "Gridlocked Cryptizer",
      subtitle: "Blockchain Vehicle Auction System",
      category: "Blockchain",
      color: "from-violet-500 via-purple-500 to-pink-500",
      accent: "violet",
      video: "/images/projects/gridlocked-cryptizer.jpg",
      metrics: { views: "120", likes: "24", downloads: "16" },
      tags: ["Java", "Tomcat", "MySQL", "Blockchain"],
      status: "live",
      complexity: 5,
      impact: 94,
      description: [
        "Developed a secure web application for government-seized vehicle auctions using Java, Tomcat, and MySQL",
        "Implemented blockchain technology for document security and verification",
        "Created user authentication system and responsive web interface for vehicle listings and bidding",
        "Deployed the application on Fedora Linux using Maven build automation",
        "Utilized OpenJDK 17, Apache Tomcat 10.x, and Git for version control"
      ]
    },
    {
      id: 2,
      title: "Data Analysis Project",
      subtitle: "Temperature Data Visualization",
      category: "Data Analysis",
      color: "from-cyan-400 via-blue-500 to-indigo-600",
      accent: "blue",
      video: "/images/projects/lumos-learning-app.jpg",
      metrics: { views: "85", likes: "18", downloads: "10" },
      tags: ["Python", "NumPy", "Pandas", "Matplotlib"],
      status: "live",
      complexity: 3,
      impact: 82,
      description: [
        "Used Python with data analysis libraries to visualize temperature data from CSV files",
        "Created bar charts and line graphs to represent weather patterns",
        "Learned fundamentals of data processing and visualization in Python",
        "Applied programming knowledge in a practical application"
      ]
    },
    {
      id: 3,
      title: "Student Database Application",
      subtitle: "Academic Records Management",
      category: "Database",
      color: "from-emerald-400 via-green-500 to-teal-600",
      accent: "green",
      video: "/images/projects/portfolio-website.jpg",
      metrics: { views: "76", likes: "14", downloads: "9" },
      tags: ["Java", "MySQL", "UI Design", "SQL"],
      status: "live",
      complexity: 4,
      impact: 78,
      description: [
        "Built a student database application using Java and MySQL",
        "Developed user interface forms to manage student records",
        "Implemented SQL queries to retrieve and filter student data",
        "Collaborated in a team of 3 students focusing on database components"
      ]
    },
    {
      id: 4,
      title: "Portfolio Website",
      subtitle: "Web Development Assignment",
      category: "Web Development",
      color: "from-orange-400 via-red-500 to-pink-600",
      accent: "red",
      video: "/images/projects/portfolio-website.jpg",
      metrics: { views: "92", likes: "21", downloads: "7" },
      tags: ["HTML", "CSS", "JavaScript", "PHP"],
      status: "live",
      complexity: 3,
      impact: 75,
      description: [
        "Created a website with HTML, CSS and JavaScript",
        "Implemented responsive design elements for mobile and desktop viewing",
        "Used PHP to create a contact form with validation",
        "Applied web development principles learned during coursework"
      ]
    }
  ];

  // Technical Skills - Updated with Sumesh's skills
  const skills = [
    { name: "Java", level: 90, icon: Code2, trend: "+15%" },
    { name: "Python", level: 85, icon: Brain, trend: "+20%" },
    { name: "Web Development", level: 82, icon: Monitor, trend: "+12%" },
    { name: "Database (MySQL)", level: 88, icon: Database, trend: "+10%" },
    { name: "Blockchain", level: 75, icon: Lock, trend: "+25%" },
    { name: "React", level: 70, icon: Code2, trend: "+18%" }
  ];

  // Education - Updated with Sumesh's education
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Lead College of Management, Autonomous",
      duration: "2024-2026",
      expected: "Expected Graduation: July 2026",
      details: "Institution Type: Autonomous Institution affiliated with Calicut University, Kerala",
      coursework: "Programming with Java, JavaScript, React, Generative AI, Advanced Database Management Systems, Python Web Programming, Internet of Things, Flutter Android Development, Cyber Security",
      focus: "Current Focus: Python Programming, Database Management, AI Fundamentals"
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Nehru Arts and Science College, Autonomous",
      duration: "2021-2024",
      expected: "Graduation: April 2024 | CGPA: 7.48/10.0",
      details: "Institution Type: Autonomous Institution affiliated with Bharathiar University, Coimbatore",
      coursework: "Python Programming, Java, Relational Database Management Systems, Oracle, Web Programming with PHP and MySQL, Visual Programming"
    }
  ];

  // Certifications - Updated with Sumesh's certifications
  const certifications = [
    { name: "Data Analysis with Python", issuer: "FreeCodeCamp", year: "2024" },
    { name: "Google Data Analytics Certificate", issuer: "Coursera", year: "2024" },
    { name: "Scientific Computing with Python", issuer: "FreeCodeCamp", year: "2023" },
    { name: "Introduction to SQL", issuer: "Kaggle", year: "2023" },
    { name: "Introduction to Linux (LFS101)", issuer: "Linux Foundation", year: "2023" }
  ];

  // Extracurricular Activities - Updated with Sumesh's activities
  const extracurricular = [
    "Volunteer for iLEAD campus events, assisting with setup and coordination activities",
    "Member of LEADography Team (LOT), contributing to event photography and audio-visual support",
    "Participant in Outbound Training (OBT) programs, an experiential learning methodology that includes outdoor activities designed to develop teamwork and leadership skills",
    "Gained practical experience in team collaboration and event organization through campus activities"
  ];

  // Self-learning & Interests - Updated with Sumesh's interests
  const interests = [
    "Learning machine learning concepts through online tutorials",
    "Practicing Python programming through guided projects and exercises",
    "Exploring blockchain technology and secure application development",
    "Following introductory data science courses"
  ];

  // Languages - Updated with Sumesh's languages
  const languages = [
    { name: "English", level: "Professional" },
    { name: "Malayalam", level: "Native" },
    { name: "Tamil", level: "Conversational" },
    { name: "Hindi", level: "Basic" }
  ];

  // References - Updated with Sumesh's references
  const references = [
    { name: "Ajay Japamani", title: "Placement Officer, LEAD College of Management", contact: "ajay@lead.ac.in" },
    { name: "Arjun KP", title: "Associate Professor, LEAD College of Management", contact: "arjun.kollath@lead.ac.in" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        setScrollY(containerRef.current.scrollTop);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const toggleLike = (projectId) => {
    setLikedProjects(prev => {
      const newSet = new Set(prev);
      if (newSet.has(projectId)) {
        newSet.delete(projectId);
      } else {
        newSet.add(projectId);
      }
      return newSet;
    });
  };

  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === 'all' || project.category.toLowerCase().includes(activeFilter.toLowerCase());
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         project.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const StatusBadge = ({ status }) => {
    const configs = {
      live: { bg: 'bg-green-500', text: 'Live', pulse: true },
      beta: { bg: 'bg-yellow-500', text: 'Beta', pulse: false },
      'coming-soon': { bg: 'bg-purple-500', text: 'Soon', pulse: true }
    };
    const config = configs[status];

    return (
      <div className={`${config.bg} text-white text-xs px-3 py-1 rounded-full flex items-center gap-1 ${config.pulse ? 'animate-pulse' : ''}`}>
        {config.pulse && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
        {config.text}
      </div>
    );
  };

  const ProjectCard = ({ project, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const isLiked = likedProjects.has(project.id);

    return (
      <div 
        className={`relative overflow-hidden rounded-3xl transition-all duration-700 hover:scale-105 ${
          viewMode === 'grid' ? 'aspect-4/5' : 'aspect-video h-32'
        }`}
        style={{ 
          transform: `translateY(${Math.sin((scrollY + index * 100) / 200) * 2}px)`,
          transitionDelay: `${index * 100}ms`
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90`} />

        {/* Video Background */}
        <div className="absolute inset-0">
          <img 
            src={project.video} 
            alt={project.title}
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
            style={{ filter: 'brightness(0.7)' }}
          />
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
          {/* Top Section */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              <StatusBadge status={project.status} />
              <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                <Trophy className="w-3 h-3" />
                <span className="text-xs font-medium">{project.impact}%</span>
              </div>
            </div>
            <button 
              onClick={() => toggleLike(project.id)}
              className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
                isLiked ? 'bg-red-500 scale-110' : 'bg-white/20 hover:bg-white/30'
              }`}
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
            </button>
          </div>

          {/* Bottom Section */}
          <div className="space-y-3">
            {/* Progress Bar */}
            <div className="w-full bg-white/20 rounded-full h-1 overflow-hidden">
              <div 
                className="h-full bg-white transition-all duration-1000 ease-out"
                style={{ width: `${project.complexity * 20}%` }}
              />
            </div>

            {/* Title */}
            <div>
              <h3 className="text-xl font-bold mb-1">{project.title}</h3>
              <p className="text-white/80 text-sm">{project.subtitle}</p>
            </div>

            {/* Metrics */}
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <Eye className="w-3 h-3" />
                  {project.metrics.views}
                </span>
                <span className="flex items-center gap-1">
                  <Heart className="w-3 h-3" />
                  {project.metrics.likes}
                </span>
              </div>
              <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                {project.category}
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1">
              {project.tags.slice(0, 3).map((tag, i) => (
                <span key={i} className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-lg">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Hover Effects */}
        {isHovered && (
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 transform scale-90 hover:scale-100 transition-transform">
              <Play className="w-8 h-8 text-white" />
            </div>
          </div>
        )}
      </div>
    );
  };

  const SkillCard = ({ skill, index }) => (
    <div 
      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-all duration-300"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 bg-blue-500/20 rounded-xl">
          <skill.icon className="w-5 h-5 text-blue-400" />
        </div>
        <div className="flex-1">
          <div className="font-semibold text-white">{skill.name}</div>
          <div className="text-xs text-green-400">{skill.trend}</div>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-white">{skill.level}%</div>
        </div>
      </div>
      <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
        <div 
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-1000"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );

  const EducationCard = ({ education, index }) => (
    <div 
      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-purple-500/20 rounded-xl">
          <GraduationCap className="w-6 h-6 text-purple-400" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-1">{education.degree}</h3>
          <p className="text-white/80 font-medium">{education.institution}</p>
          <p className="text-white/60 text-sm mb-3">{education.duration} | {education.expected}</p>
          <p className="text-white/80 text-sm mb-2">{education.details}</p>
          {education.coursework && (
            <div className="mb-2">
              <p className="text-white/70 text-sm font-medium mb-1">Relevant Coursework:</p>
              <p className="text-white/60 text-sm">{education.coursework}</p>
            </div>
          )}
          {education.focus && (
            <p className="text-green-400 text-sm font-medium">{education.focus}</p>
          )}
        </div>
      </div>
    </div>
  );

  const CertificationCard = ({ cert, index }) => (
    <div 
      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 flex items-center gap-3"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="p-2 bg-green-500/20 rounded-xl">
        <Award className="w-5 h-5 text-green-400" />
      </div>
      <div className="flex-1">
        <h4 className="font-medium text-white">{cert.name}</h4>
        <p className="text-white/60 text-sm">{cert.issuer}</p>
      </div>
      <div className="text-white/40 text-sm">{cert.year}</div>
    </div>
  );

  const LanguageCard = ({ language, index }) => (
    <div 
      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 flex items-center gap-3"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="p-2 bg-blue-500/20 rounded-xl">
        <Globe className="w-5 h-5 text-blue-400" />
      </div>
      <div className="flex-1">
        <h4 className="font-medium text-white">{language.name}</h4>
        <p className="text-white/60 text-sm">{language.level}</p>
      </div>
    </div>
  );

  const ReferenceCard = ({ reference, index }) => (
    <div 
      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 bg-orange-500/20 rounded-xl">
          <User className="w-5 h-5 text-orange-400" />
        </div>
        <div>
          <h4 className="font-medium text-white">{reference.name}</h4>
        </div>
      </div>
      <p className="text-white/70 text-sm mb-1">{reference.title}</p>
      <p className="text-white/60 text-sm flex items-center gap-2">
        <Mail className="w-4 h-4 text-blue-400" /> 
        {reference.contact}
      </p>
    </div>
  );

  return (
    <>
      <Head>
        <title>S SUMESH - Modern Portfolio</title>
        <meta name="description" content="Ultra modern portfolio of S SUMESH, MCA Student and Entry-Level Software Developer" />
      </Head>

      <div className={`min-h-screen transition-all duration-500 ${
        isDarkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'
      }`}>
        {/* Dynamic Status Bar */}
        <div className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} px-6 py-2 flex items-center justify-between text-sm border-b border-white/10`}>
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`} />
            <span>2025-05-22</span>
          </div>
          <div className="flex items-center gap-1">
            <Battery className="w-4 h-4 text-green-500" />
            <span>87%</span>
          </div>
        </div>

        {/* Header */}
        <div className={`${isDarkMode ? 'bg-gray-900/50' : 'bg-white/50'} backdrop-blur-xl border-b border-white/10 sticky top-0 z-40`}>
          <div className="px-6 py-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl p-0.5">
                    <div className={`w-full h-full ${isDarkMode ? 'bg-gray-900' : 'bg-white'} rounded-2xl flex items-center justify-center`}>
                      <User className="w-6 h-6 text-purple-500" />
                    </div>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse" />
                </div>
                <div>
                  <h1 className="text-xl font-bold">{personalInfo.name}</h1>
                  <p className="text-sm opacity-70">{personalInfo.title}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="p-2 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all"
                >
                  {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
                <button 
                  onClick={() => setShowSettings(!showSettings)}
                  className="p-2 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all"
                >
                  <Settings className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Navigation Pills */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {['discover', 'about', 'projects', 'skills', 'education', 'certifications', 'contact'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setCurrentView(tab)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    currentView === tab
                      ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                      : 'bg-white/10 backdrop-blur-sm hover:bg-white/20'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Settings Panel */}
        {showSettings && (
          <div className={`${isDarkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-xl border-b border-white/10 p-6 animate-fade-in`}>
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Settings</h2>
                <button 
                  onClick={() => setShowSettings(false)}
                  className="p-2 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Theme Settings */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
                  <h3 className="font-medium mb-4">Appearance</h3>
                  <div className="flex items-center justify-between">
                    <span>Dark Mode</span>
                    <button 
                      onClick={() => setIsDarkMode(!isDarkMode)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        isDarkMode ? 'bg-blue-600' : 'bg-gray-400'
                      }`}
                    >
                      <span 
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          isDarkMode ? 'translate-x-6' : 'translate-x-1'
                        }`} 
                      />
                    </button>
                  </div>
                </div>

                {/* Resume Settings */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
                  <h3 className="font-medium mb-4">Resume</h3>
                  <button 
                    onClick={downloadResume}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-xl transition-all flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download Resume
                  </button>
                </div>

                {/* Contact Settings */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
                  <h3 className="font-medium mb-4">Contact</h3>
                  <div className="space-y-3">
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="flex items-center gap-3 bg-white/10 hover:bg-white/15 rounded-xl p-3 transition-all"
                    >
                      <Mail className="w-5 h-5 text-blue-400" />
                      <span>{personalInfo.email}</span>
                    </a>
                    <a 
                      href={`tel:${personalInfo.phone}`}
                      className="flex items-center gap-3 bg-white/10 hover:bg-white/15 rounded-xl p-3 transition-all"
                    >
                      <Phone className="w-5 h-5 text-green-400" />
                      <span>{personalInfo.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div ref={containerRef} className="flex-1 overflow-y-auto">
          {currentView === 'discover' && (
            <div className="px-6 py-6 space-y-8">
              {/* Hero Section */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-8 text-white">
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20 animate-pulse" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <Rocket className="w-6 h-6" />
                    <span className="text-sm font-medium">Software Developer</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-2">{personalInfo.name}</h2>
                  <p className="text-white/90 mb-6 leading-relaxed">
                    {personalInfo.summary}
                  </p>
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => {
                        setIsPlaying(!isPlaying);
                        setCurrentView('projects');
                      }}
                      className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 hover:bg-white/30 transition-all"
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      <span className="font-medium">View Portfolio</span>
                    </button>
                    <button 
                      onClick={downloadResume}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex items-center gap-3">
                  <div className="p-2 bg-blue-500/20 rounded-xl">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="text-sm">
                    <p className="opacity-70">Email</p>
                    <p className="font-medium">{personalInfo.email}</p>
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex items-center gap-3">
                  <div className="p-2 bg-green-500/20 rounded-xl">
                    <Phone className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="text-sm">
                    <p className="opacity-70">Phone</p>
                    <p className="font-medium">{personalInfo.phone}</p>
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex items-center gap-3">
                  <div className="p-2 bg-purple-500/20 rounded-xl">
                    <Compass className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className="text-sm">
                    <p className="opacity-70">Location</p>
                    <p className="font-medium">{personalInfo.location}</p>
                  </div>
                </div>
              </div>

              {/* Featured Skills */}
              <div>
                <h3 className="text-xl font-bold mb-4">Top Skills</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {skills.slice(0, 4).map((skill, index) => (
                    <SkillCard key={index} skill={skill} index={index} />
                  ))}
                </div>
              </div>

              {/* Featured Projects */}
              <div>
                <h3 className="text-xl font-bold mb-4">Featured Projects</h3>
                <div className="space-y-4">
                  {projects.slice(0, 2).map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentView === 'about' && (
            <div className="px-6 py-6 space-y-6">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-600 p-8 text-white">
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-4">About Me</h2>
                  <p className="text-white/90 mb-4 leading-relaxed">
                    {personalInfo.summary}
                  </p>
                  <div className="flex flex-wrap gap-3 mt-4">
                    <a href={`https://github.com/${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/30 transition-all">
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                    <a href={`https://linkedin.com/in/${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/30 transition-all">
                      <Linkedin className="w-4 h-4" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div>
                <h3 className="text-xl font-bold mb-4">Languages</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {languages.map((language, index) => (
                    <LanguageCard key={index} language={language} index={index} />
                  ))}
                </div>
              </div>

              {/* Extracurricular Activities */}
              <div>
                <h3 className="text-xl font-bold mb-4">Extracurricular Activities</h3>
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-yellow-500/20 rounded-xl">
                      <Rocket className="w-5 h-5 text-yellow-400" />
                    </div>
                    <h4 className="font-semibold text-lg">Volunteer Experience | LEAD College of Management</h4>
                  </div>
                  <ul className="space-y-3">
                    {extracurricular.map((activity, index) => (
                      <li key={index} className="flex items-start gap-2 text-white/80">
                        <div className="min-w-[8px] h-2 rounded-full bg-blue-500 mt-2"></div>
                        <p>{activity}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Interests */}
              <div>
                <h3 className="text-xl font-bold mb-4">Self-Learning & Interests</h3>
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-cyan-500/20 rounded-xl">
                      <Brain className="w-5 h-5 text-cyan-400" />
                    </div>
                    <h4 className="font-semibold text-lg">Continuous Learning</h4>
                  </div>
                  <ul className="space-y-3">
                    {interests.map((interest, index) => (
                      <li key={index} className="flex items-start gap-2 text-white/80">
                        <div className="min-w-[8px] h-2 rounded-full bg-purple-500 mt-2"></div>
                        <p>{interest}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {currentView === 'projects' && (
            <div className="px-6 py-6 space-y-6">
              {/* Search & Filters */}
              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-50" />
                  <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl pl-12 pr-4 py-4 focus:bg-white/10 focus:border-blue-500/50 transition-all outline-none"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex gap-2 overflow-x-auto">
                    {['all', 'Blockchain', 'Data Analysis', 'Database', 'Web Development'].map((filter) => (
                      <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all ${
                          activeFilter === filter
                            ? 'bg-blue-500 text-white'
                            : 'bg-white/10 backdrop-blur-sm hover:bg-white/20'
                        }`}
                      >
                        {filter}
                      </button>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <button 
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-xl ${viewMode === 'grid' ? 'bg-blue-500' : 'bg-white/10'} backdrop-blur-sm`}
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-xl ${viewMode === 'list' ? 'bg-blue-500' : 'bg-white/10'} backdrop-blur-sm`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Projects Grid */}
              <div className={`grid gap-6 ${
                viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'
              }`}>
                {filteredProjects.map((project, index) => (
                  <div key={project.id}>
                    <ProjectCard project={project} index={index} />

                    {/* Project Details (Only visible in list view) */}
                    {viewMode === 'list' && (
                      <div className="mt-4 px-4 py-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
                        <h4 className="text-lg font-bold mb-3">Project Details</h4>
                        <ul className="space-y-2">
                          {project.description.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-white/80 text-sm">
                              <div className="min-w-[6px] h-2 rounded-full bg-blue-500 mt-2"></div>
                              <p>{item}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentView === 'skills' && (
            <div className="px-6 py-6 space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold">Technical Skills</h2>
                <p className="opacity-70">Constantly evolving and learning</p>
              </div>

              <div className="grid gap-4">
                {skills.map((skill, index) => (
                  <SkillCard key={index} skill={skill} index={index} />
                ))}
              </div>

              {/* Tech Stack */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
                <h3 className="text-lg font-bold mb-4">Current Tech Stack</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['Java', 'Python', 'JavaScript', 'PHP', 'MySQL', 'React', 'Git', 'HTML/CSS'].map((tech, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
                      <div className="text-xs font-medium">{tech}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Skills */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
                <h3 className="text-lg font-bold mb-4">Additional Skills</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <h4 className="font-medium mb-2">Data Analysis</h4>
                    <p className="text-sm text-white/70">NumPy, Pandas, Matplotlib</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <h4 className="font-medium mb-2">Development Tools</h4>
                    <p className="text-sm text-white/70">Git, Maven, Apache Tomcat, Visual Studio Code, Jupyter Notebooks, Flutter, Linux</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <h4 className="font-medium mb-2">Soft Skills</h4>
                    <p className="text-sm text-white/70">Problem-solving, Teamwork, Communication, Adaptability, Willingness to learn</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentView === 'education' && (
            <div className="px-6 py-6 space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold">Education</h2>
                <p className="opacity-70">Academic Background</p>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <EducationCard key={index} education={edu} index={index} />
                ))}
              </div>
            </div>
          )}

          {currentView === 'certifications' && (
            <div className="px-6 py-6 space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold">Certifications</h2>
                <p className="opacity-70">Professional Development</p>
              </div>

              <div className="grid gap-4">
                {certifications.map((cert, index) => (
                  <CertificationCard key={index} cert={cert} index={index} />
                ))}
              </div>

              {/* References Section */}
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">References</h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {references.map((reference, index) => (
                    <ReferenceCard key={index} reference={reference} index={index} />
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentView === 'contact' && (
            <div className="px-6 py-6 space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold">Contact Me</h2>
                <p className="opacity-70">Get in touch</p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-500/20 rounded-xl">
                      <Mail className="w-5 h-5 text-blue-400" />
                    </div>
                    <h4 className="font-semibold">Email</h4>
                  </div>
                  <p className="text-white/80 mb-3">{personalInfo.email}</p>
                  <a href={`mailto:${personalInfo.email}`} className="inline-block bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 py-2 px-4 rounded-xl transition-all">Send Email</a>
                </div>

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-green-500/20 rounded-xl">
                      <Phone className="w-5 h-5 text-green-400" />
                    </div>
                    <h4 className="font-semibold">Phone</h4>
                  </div>
                  <p className="text-white/80 mb-3">{personalInfo.phone}</p>
                  <a href={`tel:${personalInfo.phone}`} className="inline-block bg-green-500/20 hover:bg-green-500/30 text-green-400 py-2 px-4 rounded-xl transition-all">Call Me</a>
                </div>

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-purple-500/20 rounded-xl">
                      <Github className="w-5 h-5 text-purple-400" />
                    </div>
                    <h4 className="font-semibold">GitHub</h4>
                  </div>
                  <p className="text-white/80 mb-3">github.com/{personalInfo.github}</p>
                  <a href={`https://github.com/${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="inline-block bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 py-2 px-4 rounded-xl transition-all">View Profile</a>
                </div>

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-cyan-500/20 rounded-xl">
                      <Linkedin className="w-5 h-5 text-cyan-400" />
                    </div>
                    <h4 className="font-semibold">LinkedIn</h4>
                  </div>
                  <p className="text-white/80 mb-3">linkedin.com/in/{personalInfo.linkedin}</p>
                  <a href={`https://linkedin.com/in/${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="inline-block bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 py-2 px-4 rounded-xl transition-all">Connect</a>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">Send Message</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Name</label>
                    <input type="text" className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 focus:bg-white/15 focus:border-blue-500/50 transition-all outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Email</label>
                    <input type="email" className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 focus:bg-white/15 focus:border-blue-500/50 transition-all outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea rows="4" className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 focus:bg-white/15 focus:border-blue-500/50 transition-all outline-none"></textarea>
                  </div>
                  <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-all">Send Message</button>
                </form>
              </div>
            </div>
          )}
        </div>

        {/* Floating Action Button */}
        <button 
          onClick={downloadResume}
          className="fixed bottom-8 right-6 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/30 hover:scale-110 transition-all duration-300 z-50"
        >
          <Download className="w-6 h-6 text-white" />
        </button>

        {/* Last Updated */}
        <div className="text-center py-4 text-xs opacity-50">
          <p>Last Updated: 2025-05-22 03:45:14 | User: sumesh-s-dev</p>
        </div>
      </div>
    </>
  );
}
