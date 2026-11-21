/**
 * KALID HASSEN YASIN - Digital Earth Portfolio
 * Main JavaScript - Polished & Optimized
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // LOADER
    // ============================================
    const loader = document.getElementById('loader');
    
    setTimeout(() => {
        loader.classList.add('hidden');
        document.body.style.overflow = 'auto';
        initAnimations();
    }, 2500);

    // ============================================
    // NAVIGATION
    // ============================================
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Update active link
        updateActiveLink();
        
        // Back to top button
        updateBackToTop();
    });

    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Smooth scroll for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
            
            // Close mobile menu
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    function updateActiveLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // ============================================
    // STARS CANVAS BACKGROUND
    // ============================================
    const canvas = document.getElementById('starsCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let stars = [];
        let shootingStars = [];

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        function createStars() {
            stars = [];
            const numStars = Math.floor((canvas.width * canvas.height) / 8000);
            
            for (let i = 0; i < numStars; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 1.5 + 0.5,
                    alpha: Math.random(),
                    alphaChange: (Math.random() - 0.5) * 0.02
                });
            }
        }

        function createShootingStar() {
            if (Math.random() < 0.005 && shootingStars.length < 3) {
                shootingStars.push({
                    x: Math.random() * canvas.width,
                    y: 0,
                    length: Math.random() * 80 + 50,
                    speed: Math.random() * 10 + 10,
                    angle: Math.PI / 4
                });
            }
        }

        function drawStars() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw stars
            stars.forEach(star => {
                star.alpha += star.alphaChange;
                if (star.alpha <= 0.2 || star.alpha >= 1) {
                    star.alphaChange = -star.alphaChange;
                }

                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
                ctx.fill();
            });

            // Draw shooting stars
            shootingStars.forEach((star, index) => {
                ctx.beginPath();
                ctx.moveTo(star.x, star.y);
                ctx.lineTo(
                    star.x - Math.cos(star.angle) * star.length,
                    star.y - Math.sin(star.angle) * star.length
                );
                
                const gradient = ctx.createLinearGradient(
                    star.x, star.y,
                    star.x - Math.cos(star.angle) * star.length,
                    star.y - Math.sin(star.angle) * star.length
                );
                gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
                gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
                
                ctx.strokeStyle = gradient;
                ctx.lineWidth = 2;
                ctx.stroke();

                star.x += Math.cos(star.angle) * star.speed;
                star.y += Math.sin(star.angle) * star.speed;

                if (star.x > canvas.width || star.y > canvas.height) {
                    shootingStars.splice(index, 1);
                }
            });

            createShootingStar();
            requestAnimationFrame(drawStars);
        }

        resizeCanvas();
        createStars();
        drawStars();

        window.addEventListener('resize', () => {
            resizeCanvas();
            createStars();
        });
    }

    // ============================================
    // TYPING EFFECT
    // ============================================
    const typingText = document.getElementById('typingText');
    if (typingText) {
        const texts = [
            'Geospatial Data Scientist',
            'Remote Sensing Specialist',
            'Machine Learning Researcher',
            'Digital Earth Explorer',
            'EMJM CDE Scholar'
        ];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typeSpeed = 100;

        function type() {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                typingText.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
                typeSpeed = 50;
            } else {
                typingText.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
                typeSpeed = 100;
            }

            if (!isDeleting && charIndex === currentText.length) {
                isDeleting = true;
                typeSpeed = 2000; // Pause at end
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typeSpeed = 500; // Pause before next word
            }

            setTimeout(type, typeSpeed);
        }

        setTimeout(type, 3000); // Start after loader
    }

    // ============================================
    // ANIMATED COUNTERS
    // ============================================
    function initAnimations() {
        const statNumbers = document.querySelectorAll('.stat-number[data-target]');
        
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px'
        };

        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = parseInt(entry.target.dataset.target);
                    animateCounter(entry.target, target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        statNumbers.forEach(num => counterObserver.observe(num));

        // Skill bars animation
        const skillFills = document.querySelectorAll('.skill-fill[data-width]');
        
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const width = entry.target.dataset.width;
                    entry.target.style.width = width + '%';
                    skillObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        skillFills.forEach(fill => skillObserver.observe(fill));
    }

    function animateCounter(element, target) {
        let current = 0;
        const duration = 2000;
        const increment = target / (duration / 16);

        function updateCounter() {
            current += increment;
            if (current < target) {
                element.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        }

        updateCounter();
    }

    // ============================================
    // CERTIFICATE FILTER
    // ============================================
    const filterBtns = document.querySelectorAll('.filter-btn');
    const certCards = document.querySelectorAll('.cert-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            certCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.5s ease';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // ============================================
    // BACK TO TOP BUTTON
    // ============================================
    const backToTop = document.getElementById('backToTop');

    function updateBackToTop() {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }

    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ============================================
    // CONTACT FORM
    // ============================================
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = '<i class="fas fa-envelope"></i> Opening your email app...';
            btn.disabled = true;

            // Open the visitor's email app with the message filled in
            const f = new FormData(contactForm);
            const mail = 'mailto:kalidh84@gmail.com?subject=' + encodeURIComponent(f.get('subject') || '') +
                '&body=' + encodeURIComponent((f.get('message') || '') + '\n\n— ' + (f.get('name') || '') + ' (' + (f.get('email') || '') + ')');
            window.location.href = mail;
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.disabled = false;
            }, 1200);
        });
    }

    // ============================================
    // SCROLL REVEAL ANIMATIONS
    // ============================================
    const revealElements = document.querySelectorAll(
        '.section-header, .about-content, .timeline-item, ' +
        '.cde-intro, .pathway, .courses, .cde-highlights, ' +
        '.skill-category, .pub-card, .exp-card, .cert-card, ' +
        '.contact-card, .tech-stack'
    );

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        revealObserver.observe(el);
    });

});

// Add CSS animation for filter
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    .nav-menu.active {
        display: flex !important;
        position: fixed;
        top: 70px;
        left: 0;
        right: 0;
        background: rgba(10, 15, 28, 0.98);
        flex-direction: column;
        padding: 20px;
        gap: 10px;
        border-bottom: 1px solid rgba(148, 163, 184, 0.15);
    }
    
    .nav-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .nav-toggle.active span:nth-child(2) {
        opacity: 0;
    }
    
    .nav-toggle.active span:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -5px);
    }
`;
document.head.appendChild(style);
