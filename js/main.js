// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // Preloader
    window.addEventListener('load', function() {
        const preloader = document.querySelector('.preloader');
        setTimeout(function() {
            preloader.style.opacity = '0';
            setTimeout(function() {
                preloader.style.display = 'none';
            }, 500);
        }, 1000);
    });

    // Custom cursor
    const cursor = document.querySelector('.cursor-dot');
    const cursorFollower = document.querySelector('.mouse-follower');

    if (cursor && cursorFollower && window.innerWidth > 992) {
        document.addEventListener('mousemove', function(e) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        });

        // Add hover effect for interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-item, .tech-item, .social-link');
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', function() {
                cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursorFollower.style.borderColor = 'var(--primary-color)';
                cursorFollower.style.opacity = '0.8';
            });

            element.addEventListener('mouseleave', function() {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorFollower.style.borderColor = 'var(--primary-color)';
                cursorFollower.style.opacity = '0.5';
            });
        });
    }

    // Theme toggle
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            body.classList.toggle('dark-mode');
            
            // Save theme preference
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });
    }

    // Header scroll effect
    const header = document.querySelector('header');
    const scrollTopBtn = document.querySelector('.back-to-top');

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
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            mainNav.classList.toggle('active');
            
            // Prevent scrolling when menu is open
            if (mainNav.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        // Close menu when clicking on navigation links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                mainNav.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Close menu when clicking on close button
        const navClose = document.querySelector('.nav-close');
        if (navClose) {
            navClose.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                mainNav.classList.remove('active');
                document.body.style.overflow = '';
            });
        }
    }

    // Active navigation link based on scroll
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavLink() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                navLink.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavLink);

    // Projects filter
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (filterBtns.length > 0 && projectCards.length > 0) {
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
                });
                
                // Refresh AOS animations
                setTimeout(() => {
                    AOS.refresh();
                }, 300);
            });
        });
    }

    // Tabs functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    if (tabBtns.length > 0 && tabContents.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all tabs
                tabBtns.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                // Add active class to current tab
                this.classList.add('active');
                const tabId = this.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('active');
            });
        });
    }

    // Project details modal
    const projectDetailsBtns = document.querySelectorAll('.project-details-btn');
    const projectModal = document.getElementById('projectModal');
    const modalContent = document.querySelector('.modal-content');
    const modalClose = document.querySelector('.modal-close');
    const modalOverlay = document.querySelector('.modal-overlay');
    
    if (projectDetailsBtns.length > 0 && projectModal && modalContent) {
        projectDetailsBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const projectCard = this.closest('.project-card');
                const projectDetails = projectCard.querySelector('.project-details').cloneNode(true);
                
                modalContent.innerHTML = '';
                modalContent.appendChild(projectDetails);
                
                projectModal.classList.add('open');
                document.body.style.overflow = 'hidden';
            });
        });
        
        // Close modal when clicking on close button
        if (modalClose) {
            modalClose.addEventListener('click', function() {
                projectModal.classList.remove('open');
                document.body.style.overflow = '';
            });
        }
        
        // Close modal when clicking outside
        if (modalOverlay) {
            modalOverlay.addEventListener('click', function() {
                projectModal.classList.remove('open');
                document.body.style.overflow = '';
            });
        }
    }

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    const successModal = document.getElementById('successModal');
    const modalCloseBtns = document.querySelectorAll('.modal-close-btn');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // In a real application, you would send the form data to a server here
            // For now, just show the success modal
            if (successModal) {
                successModal.classList.add('open');
                document.body.style.overflow = 'hidden';
                contactForm.reset();
            }
        });
        
        // Close success modal
        if (modalCloseBtns.length > 0) {
            modalCloseBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    successModal.classList.remove('open');
                    document.body.style.overflow = '';
                });
            });
        }
    }

    // Initialize particles.js for hero background
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
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    }

    // GitHub stats counter animation
    function animateCounters() {
        const counters = document.querySelectorAll('.count-up');
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            const duration = 2000; // Animation duration in milliseconds
            const step = target / (duration / 16); // 60fps
            
            let current = 0;
            const timer = setInterval(() => {
                current += step;
                counter.textContent = Math.round(current);
                
                if (current >= target) {
                    counter.textContent = target;
                    clearInterval(timer);
                }
            }, 16);
        });
    }

    // Initialize GitHub contributions calendar
    function initGitHubCalendar() {
        const calendarContainer = document.getElementById('github-contributions-calendar');
        
        if (calendarContainer) {
            // In a real application, you would fetch the GitHub data here
            // For now, just initialize the calendar with placeholder data
            if (typeof GitHubCalendar === 'function') {
                GitHubCalendar(calendarContainer, 'sumesh-s-dev', {
                    responsive: true,
                    tooltips: true
                });
            }
        }
    }

    // Initialize languages chart
    function initLanguagesChart() {
        const chartCanvas = document.getElementById('languagesChart');
        
        if (chartCanvas && typeof Chart === 'function') {
            const ctx = chartCanvas.getContext('2d');
            
            // In a real application, you would fetch the GitHub data here
            // For now, just initialize the chart with placeholder data
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
                                    family: 'Outfit',
                                    size: 14
                                },
                                padding: 20,
                                color: body.classList.contains('dark-mode') ? '#f8fafc' : '#0f172a'
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
    }

    // Initialize Google Map
    function initMap() {
        const mapContainer = document.getElementById('map');
        
        if (mapContainer && typeof google !== 'undefined' && google.maps) {
            // Coordinates for Palakkad, Kerala, India
            const location = { lat: 10.7867, lng: 76.6548 };
            
            const map = new google.maps.Map(mapContainer, {
                zoom: 12,
                center: location,
                styles: body.classList.contains('dark-mode') ? [
                    { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
                    { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
                    { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] }
                    // Add more styles for dark mode
                ] : []
            });
            
            const marker = new google.maps.Marker({
                position: location,
                map: map,
                title: 'Palakkad, Kerala, India'
            });
        }
    }

    // Initialize GitHub components
    setTimeout(() => {
        animateCounters();
        initGitHubCalendar();
        initLanguagesChart();
    }, 1000);

    // Initialize map if Google Maps API is loaded
    if (typeof google !== 'undefined' && google.maps) {
        initMap();
    } else {
        // If the Google Maps API is loaded asynchronously
        window.initMap = initMap;
    }

    // Resume download
    const resumeButton = document.querySelector('.resume-button');
    const downloadCV = document.getElementById('downloadCV');
    
    if (resumeButton) {
        resumeButton.addEventListener('click', function() {
            window.open('assets/resume.pdf', '_blank');
        });
    }
    
    if (downloadCV) {
        downloadCV.addEventListener('click', function(e) {
            e.preventDefault();
            window.open('assets/resume.pdf', '_blank');
        });
    }

    // Update copyright year
    const currentYear = new Date().getFullYear();
    const copyrightYear = document.querySelector('.copyright');
    
    if (copyrightYear) {
        copyrightYear.innerHTML = `&copy; ${currentYear} S Sumesh. All Rights Reserved.`;
    }
});