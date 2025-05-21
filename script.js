// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // Remove preloader when page is loaded
    window.addEventListener('load', function() {
        const preloader = document.querySelector('.preloader');
        preloader.style.opacity = '0';
        setTimeout(function() {
            preloader.style.display = 'none';
        }, 400);
    });

    // Custom cursor
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');

    if (window.innerWidth > 992) {
        document.addEventListener('mousemove', function(e) {
            cursor.style.display = 'block';
            cursorFollower.style.display = 'block';

            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';

            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        });

        // Add hover effect for links
        const links = document.querySelectorAll('a, button, .project-card, .skill-item');
        links.forEach(link => {
            link.addEventListener('mouseenter', function() {
                cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursorFollower.style.transform = 'translate(-50%, -50%) scale(0.5)';
            });

            link.addEventListener('mouseleave', function() {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
            });
        });
    }

    // Header scroll effect
    const header = document.querySelector('header');
    const scrollTopBtn = document.querySelector('.scroll-top');

    window.addEventListener('scroll', function() {
        // Header effect
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Scroll to top button
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('active');
        } else {
            scrollTopBtn.classList.remove('active');
        }
    });

    // Mobile menu toggle
    const toggleMenu = document.querySelector('.toggle-menu');
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');

    toggleMenu.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navbar.classList.toggle('active');
    });

    // Close mobile menu when clicking on navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navbar.classList.remove('active');
        });
    });

    // Active navigation link based on scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelector('.nav-link.active').classList.remove('active');
                document.querySelector(`a[href*=${sectionId}]`).classList.add('active');
            }
        });
    });

    // Typed.js for dynamic text
    new Typed('.auto-type', {
        strings: ['Software Developer', 'Web Developer', 'Java Programmer', 'Python Enthusiast', 'Blockchain Explorer'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    });

    // Tabs functionality
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabLinks.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            tabLinks.forEach(tab => tab.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // Add active class to current tab
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Projects filter
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));

            // Add active class to current button
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filterValue === 'all') {
                    card.style.display = 'block';
                } else {
                    const categories = card.getAttribute('data-category').split(' ');
                    if (categories.includes(filterValue)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }

                // Reset AOS animations after filtering
                setTimeout(() => {
                    AOS.refresh();
                }, 300);
            });
        });
    });

    // Project modal
    const viewDetailsBtns = document.querySelectorAll('.btn-view-details');
    const modal = document.getElementById('projectModal');
    const modalClose = document.querySelector('.modal-close');
    const modalBody = document.querySelector('.modal-body');

    viewDetailsBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();

            // Get project details
            const projectCard = this.closest('.project-card');
            const projectTitle = projectCard.querySelector('h3').textContent;
            const projectImg = projectCard.querySelector('.project-img img').src;
            const projectDesc = projectCard.querySelector('.overlay-content ul').innerHTML;
            const projectTags = projectCard.querySelector('.project-tags').innerHTML;

            // Populate modal content
            modalBody.innerHTML = `
                <div class="modal-project">
                    <div class="modal-project-img">
                        <img src="${projectImg}" alt="${projectTitle}">
                    </div>
                    <div class="modal-project-content">
                        <h2>${projectTitle}</h2>
                        <div class="modal-project-tags">${projectTags}</div>
                        <div class="modal-project-desc">
                            <h3>Project Details</h3>
                            <ul>${projectDesc}</ul>
                        </div>
                        <div class="modal-project-links">
                            <a href="#" class="primary-btn">View Live Demo</a>
                            <a href="#" class="secondary-btn">View Source Code</a>
                        </div>
                    </div>
                </div>
            `;

            // Show modal
            modal.classList.add('open');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close modal
    modalClose.addEventListener('click', function() {
        modal.classList.remove('open');
        document.body.style.overflow = 'auto';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('open');
            document.body.style.overflow = 'auto';
        }
    });

    // Initialize GitHub contributions chart
    // Import GitHub API functions
    import('./src/utils/github.js')
        .then(module => {
            const { getGitHubData } = module;
            // Use the GitHub username from the portfolio
            const username = 'sumesh-s-dev';

            // Fetch GitHub data and update the UI
            getGitHubData(username)
                .then(data => {
                    updateGitHubUI(data);
                })
                .catch(error => {
                    console.error('Error fetching GitHub data:', error);
                    // Fallback to placeholder data if API fails
                    initGitHubStats();
                });
        })
        .catch(error => {
            console.error('Error importing GitHub module:', error);
            // Fallback to placeholder data if import fails
            initGitHubStats();
        });

    // Contact form submission
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Simple form validation
            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields');
                return;
            }

            // This would typically send data to a server
            // For now, just show a success message
            alert('Message sent successfully!');
            contactForm.reset();
        });
    }

    // Initialize particles.js
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#2563eb'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    },
                    polygon: {
                        nb_sides: 5
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#2563eb',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 6,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }

    // Define colors for common languages
    const colorMap = {
        'Java': '#b07219',
        'Python': '#3572A5',
        'JavaScript': '#f1e05a',
        'HTML': '#e34c26',
        'CSS': '#563d7c',
        'PHP': '#4F5D95',
        'TypeScript': '#2b7489',
        'C#': '#178600',
        'C++': '#f34b7d',
        'Ruby': '#701516'
    };

    // Function to update GitHub UI with real data
    function updateGitHubUI(data) {
        // Update repositories count
        const reposCounter = document.querySelector('.stat-card:nth-child(1) .counter');
        if (reposCounter && data.user) {
            reposCounter.textContent = data.user.public_repos || '12';
        }

        // Update stars count
        const starsCounter = document.querySelector('.stat-card:nth-child(2) .counter');
        if (starsCounter) {
            const totalStars = data.pinnedRepos ? data.pinnedRepos.reduce((total, repo) => total + repo.stars, 0) : 27;
            starsCounter.textContent = totalStars;
        }

        // Update commits count
        const commitsCounter = document.querySelector('.stat-card:nth-child(3) .counter');
        if (commitsCounter && data.contributionStats) {
            commitsCounter.textContent = data.contributionStats.totalCommits || '153';
        }

        // Update pull requests count
        const prCounter = document.querySelector('.stat-card:nth-child(4) .counter');
        if (prCounter && data.contributionStats) {
            prCounter.textContent = data.contributionStats.pullRequests || '8';
        }

        // Update languages chart
        if (data.languageStats && data.languageStats.length > 0) {
            const ctx = document.getElementById('languagesChart').getContext('2d');

            // Extract top 5 languages
            const topLanguages = data.languageStats.slice(0, 5);
            const labels = topLanguages.map(lang => lang.language);
            const percentages = topLanguages.map(lang => lang.percentage);

            // Use the colorMap defined above

            // Generate colors for languages
            const colors = labels.map(lang => colorMap[lang] || `#${Math.floor(Math.random()*16777215).toString(16)}`);

            new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: labels,
                    datasets: [{
                        data: percentages,
                        backgroundColor: colors,
                        borderWidth: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    cutout: '70%',
                    plugins: {
                        legend: {
                            position: 'right',
                            labels: {
                                font: {
                                    family: 'Poppins',
                                    size: 14
                                },
                                padding: 20,
                                color: '#0f172a'
                            }
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    return `${context.label}: ${context.parsed}%`;
                                }
                            }
                        }
                    }
                }
            });
        }

        // Update recent repositories
        if (data.pinnedRepos && data.pinnedRepos.length > 0) {
            const reposContainer = document.querySelector('.repos-container');
            if (reposContainer) {
                reposContainer.innerHTML = '';

                // Add up to 3 repositories
                const reposToShow = data.pinnedRepos.slice(0, 3);
                reposToShow.forEach((repo, index) => {
                    const repoCard = document.createElement('div');
                    repoCard.className = 'repo-card';
                    repoCard.setAttribute('data-aos', 'fade-up');
                    repoCard.setAttribute('data-aos-delay', (index + 1) * 100);

                    // Format date
                    const updatedDate = new Date(repo.updatedAt);
                    const timeAgo = getTimeAgo(updatedDate);

                    // Get language color
                    const langColor = colorMap[repo.language] || '#858585';

                    repoCard.innerHTML = `
                        <div class="repo-header">
                            <h4><a href="${repo.url}" target="_blank">${repo.name}</a></h4>
                            <div class="repo-stats">
                                <span><i class="fas fa-star"></i> ${repo.stars}</span>
                                <span><i class="fas fa-code-branch"></i> ${repo.forks}</span>
                            </div>
                        </div>
                        <p>${repo.description || 'No description available'}</p>
                        <div class="repo-footer">
                            <div class="repo-language">
                                <span class="language-color" style="background-color: ${langColor};"></span>
                                <span>${repo.language || 'Unknown'}</span>
                            </div>
                            <span class="repo-updated">Updated ${timeAgo}</span>
                        </div>
                    `;

                    reposContainer.appendChild(repoCard);
                });
            }
        }

        // Animate counters
        animateCounters();
    }

    // Helper function to format time ago
    function getTimeAgo(date) {
        const now = new Date();
        const diffInSeconds = Math.floor((now - date) / 1000);

        if (diffInSeconds < 60) return 'just now';

        const diffInMinutes = Math.floor(diffInSeconds / 60);
        if (diffInMinutes < 60) return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;

        const diffInHours = Math.floor(diffInMinutes / 60);
        if (diffInHours < 24) return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;

        const diffInDays = Math.floor(diffInHours / 24);
        if (diffInDays < 30) return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;

        const diffInMonths = Math.floor(diffInDays / 30);
        if (diffInMonths < 12) return `${diffInMonths} month${diffInMonths > 1 ? 's' : ''} ago`;

        const diffInYears = Math.floor(diffInMonths / 12);
        return `${diffInYears} year${diffInYears > 1 ? 's' : ''} ago`;
    }

    // Function to animate counters
    function animateCounters() {
        const counters = document.querySelectorAll('.counter');

        counters.forEach(counter => {
            const target = +counter.innerText;
            const increment = target / 100;

            const updateCount = () => {
                const currentValue = +counter.innerText;

                if (currentValue < target) {
                    counter.innerText = Math.ceil(currentValue + increment);
                    setTimeout(updateCount, 15);
                } else {
                    counter.innerText = target;
                }
            };

            updateCount();
        });
    }

    // Initialize languages chart with placeholder data
    function initGitHubStats() {
        // Languages chart
        const ctx = document.getElementById('languagesChart').getContext('2d');

        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Java', 'Python', 'JavaScript', 'HTML/CSS', 'PHP'],
                datasets: [{
                    data: [35, 25, 20, 15, 5],
                    backgroundColor: [
                        '#b07219', // Java
                        '#3572A5', // Python
                        '#f1e05a', // JavaScript
                        '#e34c26', // HTML/CSS
                        '#4F5D95'  // PHP
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '70%',
                plugins: {
                    legend: {
                        position: 'right',
                        labels: {
                            font: {
                                family: 'Poppins',
                                size: 14
                            },
                            padding: 20,
                            color: '#0f172a'
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.label}: ${context.parsed}%`;
                            }
                        }
                    }
                }
            }
        });

        // Animate counters
        const counters = document.querySelectorAll('.counter');

        counters.forEach(counter => {
            const target = +counter.innerText;
            const increment = target / 100;

            const updateCount = () => {
                const currentValue = +counter.innerText;

                if (currentValue < target) {
                    counter.innerText = Math.ceil(currentValue + increment);
                    setTimeout(updateCount, 15);
                } else {
                    counter.innerText = target;
                }
            };

            updateCount();
        });
    }

    // Update copyright year and footer date
    const currentYear = new Date().getFullYear();
    const footerYear = document.querySelector('.footer-bottom p:first-child');
    if (footerYear) {
        footerYear.innerHTML = `&copy; ${currentYear} S Sumesh. All Rights Reserved.`;
    }

    const lastUpdated = document.querySelector('.footer-bottom p:last-child');
    if (lastUpdated) {
        // Update with the user-provided date
        lastUpdated.textContent = 'Last Updated: May 21, 2025';
    }
});
