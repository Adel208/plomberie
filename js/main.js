// ========================================
// INITIALISATION PRINCIPALE
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    // Initialiser les icônes Lucide
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Initialiser GSAP
    initGSAP();
    
    // Initialiser les fonctionnalités du site
    initSiteFeatures();
});

// ========================================
// CONFIGURATION GSAP
// ========================================
function initGSAP() {
    // Enregistrer ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    // Animation du header au scroll
    initHeaderAnimation();
    
    // Animations des sections
    initSectionAnimations();
    
    // Animations du hero
    initHeroAnimations();
    
    // Animations des cartes de services
    initServiceCardAnimations();
    
    // Animations des statistiques
    initStatsAnimations();
    
    // Animations des témoignages
    initTestimonialAnimations();
    
    // Animations des cartes de prix
    initPricingAnimations();
    
    // Animations des réalisations
    initRealisationsAnimations();
}

// ========================================
// ANIMATIONS GSAP
// ========================================

// Animation du header
function initHeaderAnimation() {
    const header = document.querySelector('.header');
    
    ScrollTrigger.create({
        trigger: 'body',
        start: 'top -100',
        end: 'bottom',
        onUpdate: (self) => {
            if (self.direction === 1 && self.progress > 0.1) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });
}

// Animations des sections
function initSectionAnimations() {
    // Animation des titres de section
    gsap.utils.toArray('.section-header').forEach(header => {
        gsap.fromTo(header, 
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: header,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });
    
    // Animation des descriptions de section
    gsap.utils.toArray('.section-description').forEach(desc => {
        gsap.fromTo(desc,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: 0.2,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: desc,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });
}

// Animations du hero
function initHeroAnimations() {
    const heroContent = document.querySelector('.hero-content');
    const heroBadge = document.querySelector('.hero-badge');
    const heroTitle = document.querySelector('.hero-title');
    const heroDescription = document.querySelector('.hero-description');
    const heroButtons = document.querySelector('.hero-buttons');
    const heroFeatures = document.querySelector('.hero-features');
    const plumbingElements = document.querySelectorAll('.plumbing-element');
    const particles = document.querySelectorAll('.particle');
    
    if (heroContent) {
        const tl = gsap.timeline();
        
        // Animation des éléments de plomberie
        plumbingElements.forEach((element, index) => {
            gsap.fromTo(element,
                { 
                    opacity: 0, 
                    scale: 0,
                    rotation: Math.random() * 360
                },
                {
                    opacity: 1,
                    scale: 1,
                    rotation: 0,
                    duration: 1,
                    delay: index * 0.1,
                    ease: 'back.out(1.7)'
                }
            );
        });
        
        // Animation des particules d'eau
        particles.forEach((particle, index) => {
            gsap.fromTo(particle,
                { 
                    opacity: 0,
                    scale: 0,
                    y: -50
                },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.8,
                    delay: index * 0.05,
                    ease: 'power2.out'
                }
            );
        });
        
        // Animation du contenu principal
        tl.fromTo(heroBadge, 
            { opacity: 0, y: -30, scale: 0.8 },
            { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'back.out(1.7)' }
        )
        .fromTo(heroTitle,
            { opacity: 0, y: 50, scale: 0.9 },
            { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power3.out' },
            '-=0.4'
        )
        .fromTo(heroDescription,
            { opacity: 0, y: 30, scale: 0.95 },
            { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'power2.out' },
            '-=0.6'
        )
        .fromTo(heroButtons,
            { opacity: 0, y: 30, scale: 0.9 },
            { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'back.out(1.7)' },
            '-=0.4'
        )
        .fromTo(heroFeatures,
            { opacity: 0, y: 30, scale: 0.9 },
            { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'power2.out' },
            '-=0.4'
        );
        
        // Animation continue des éléments de plomberie
        plumbingElements.forEach((element, index) => {
            gsap.to(element, {
                y: -20,
                rotation: Math.random() * 10 - 5,
                duration: 3 + Math.random() * 2,
                repeat: -1,
                yoyo: true,
                ease: 'power1.inOut',
                delay: index * 0.2
            });
        });
        
        // Animation du titre avec effet de gouttes
        const titleHighlight = document.querySelector('.hero-title-highlight');
        if (titleHighlight) {
            gsap.to(titleHighlight, {
                backgroundPosition: '200% 50%',
                duration: 3,
                repeat: -1,
                ease: 'none'
            });
        }
    }
}

// Animations des cartes de services
function initServiceCardAnimations() {
    gsap.utils.toArray('.service-card').forEach((card, index) => {
        gsap.fromTo(card,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                delay: index * 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    end: 'bottom 15%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });
}

// Animations des statistiques
function initStatsAnimations() {
    gsap.utils.toArray('.stat').forEach((stat, index) => {
        const number = stat.querySelector('.stat-number');
        const label = stat.querySelector('.stat-label');
        
        gsap.fromTo(stat,
            { opacity: 0, scale: 0.8 },
            {
                opacity: 1,
                scale: 1,
                duration: 0.6,
                delay: index * 0.1,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: stat,
                    start: 'top 85%',
                    end: 'bottom 15%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
        
        if (number) {
            const finalValue = number.textContent;
            number.textContent = '0';
            
            gsap.to(number, {
                textContent: finalValue,
                duration: 2,
                delay: index * 0.1 + 0.3,
                ease: 'power2.out',
                snap: { textContent: 1 },
                scrollTrigger: {
                    trigger: stat,
                    start: 'top 85%',
                    end: 'bottom 15%',
                    toggleActions: 'play none none reverse'
                }
            });
        }
    });
}

// Animations des témoignages
function initTestimonialAnimations() {
    gsap.utils.toArray('.testimonial-card').forEach((card, index) => {
        gsap.fromTo(card,
            { opacity: 0, x: -50 },
            {
                opacity: 1,
                x: 0,
                duration: 0.6,
                delay: index * 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    end: 'bottom 15%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
        
        // Animation des avatars
        const avatar = card.querySelector('.testimonial-avatar');
        if (avatar) {
            gsap.fromTo(avatar,
                { 
                    scale: 0,
                    rotation: -180
                },
                {
                    scale: 1,
                    rotation: 0,
                    duration: 0.8,
                    delay: index * 0.1 + 0.3,
                    ease: 'back.out(1.7)',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                        end: 'bottom 15%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        }
        
        // Animation des étoiles
        const stars = card.querySelectorAll('.rating i');
        stars.forEach((star, starIndex) => {
            gsap.fromTo(star,
                { 
                    scale: 0,
                    opacity: 0
                },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.3,
                    delay: index * 0.1 + 0.5 + starIndex * 0.1,
                    ease: 'back.out(1.7)',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                        end: 'bottom 15%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });
    });
}

// Animations des cartes de prix
function initPricingAnimations() {
    gsap.utils.toArray('.pricing-card').forEach((card, index) => {
        gsap.fromTo(card,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                delay: index * 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    end: 'bottom 15%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });
}

// Animations des réalisations
function initRealisationsAnimations() {
    gsap.utils.toArray('.realisation-card').forEach((card, index) => {
        gsap.fromTo(card,
            { opacity: 0, scale: 0.9 },
            {
                opacity: 1,
                scale: 1,
                duration: 0.6,
                delay: index * 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    end: 'bottom 15%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
        
        // Animation des images
        const image = card.querySelector('.realisation-image img');
        if (image) {
            gsap.fromTo(image,
                { 
                    scale: 1.1,
                    opacity: 0
                },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.8,
                    delay: index * 0.1 + 0.2,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                        end: 'bottom 15%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        }
    });
}

// ========================================
// FONCTIONNALITÉS DU SITE
// ========================================
function initSiteFeatures() {
    // Navigation mobile
    initMobileNavigation();
    
    // FAQ accordion
    initFAQAccordion();
    
    // Smooth scroll
    initSmoothScroll();
    
    // Form validation
    initFormValidation();
    
    // Hover animations
    initHoverAnimations();
    
    // Lazy loading
    initLazyLoading();
    
    // Parallax effect
    initParallaxEffect();
    
    // Scroll progress
    initScrollProgress();
}

// Navigation mobile
function initMobileNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        
        // Fermer le menu en cliquant sur un lien
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
}

// FAQ accordion
function initFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Fermer tous les autres items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    const answer = otherItem.querySelector('.faq-answer');
                    if (answer) {
                        gsap.to(answer, {
                            maxHeight: 0,
                            duration: 0.3,
                            ease: 'power2.out'
                        });
                    }
                }
            });
            
            // Ouvrir/fermer l'item actuel
            if (!isActive) {
                item.classList.add('active');
                const answer = item.querySelector('.faq-answer');
                if (answer) {
                    gsap.to(answer, {
                        maxHeight: answer.scrollHeight,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                }
            } else {
                item.classList.remove('active');
                const answer = item.querySelector('.faq-answer');
                if (answer) {
                    gsap.to(answer, {
                        maxHeight: 0,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                }
            }
        });
    });
}

// Smooth scroll
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Form validation
function initFormValidation() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Validation basique
            let isValid = true;
            const errors = [];
            
            if (!data.name || data.name.trim().length < 2) {
                errors.push('Le nom doit contenir au moins 2 caractères');
                isValid = false;
            }
            
            if (!data.email || !isValidEmail(data.email)) {
                errors.push('Veuillez entrer une adresse email valide');
                isValid = false;
            }
            
            if (!data.message || data.message.trim().length < 10) {
                errors.push('Le message doit contenir au moins 10 caractères');
                isValid = false;
            }
            
            if (isValid) {
                // Simulation d'envoi
                showNotification('Message envoyé avec succès !', 'success');
                this.reset();
            } else {
                showNotification(errors.join('\n'), 'error');
            }
        });
    }
}

// Validation email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Affichage des notifications
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Styles pour la notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        color: white;
        font-weight: 600;
        z-index: 10000;
        max-width: 300px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    // Couleurs selon le type
    if (type === 'success') {
        notification.style.background = '#10b981';
    } else if (type === 'error') {
        notification.style.background = '#ef4444';
    } else {
        notification.style.background = '#3b82f6';
    }
    
    document.body.appendChild(notification);
    
    // Animation d'entrée
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Suppression automatique
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Hover animations
function initHoverAnimations() {
    // Animation des cartes au hover
    const cards = document.querySelectorAll('.service-card, .pricing-card, .testimonial-card, .realisation-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            gsap.to(this, {
                scale: 1.02,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        card.addEventListener('mouseleave', function() {
            gsap.to(this, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
}

// Lazy loading
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Parallax effect
function initParallaxEffect() {
    const parallaxElements = document.querySelectorAll('.hero-background');
    
    parallaxElements.forEach(element => {
        gsap.to(element, {
            yPercent: -20,
            ease: 'none',
            scrollTrigger: {
                trigger: element,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    });
}

// Scroll progress
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #3b82f6, #8b5cf6);
        z-index: 10001;
        transition: width 0.1s ease;
    `;
    
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        progressBar.style.width = scrollPercent + '%';
    });
}

// ========================================
// FONCTIONS UTILITAIRES
// ========================================

// Scroll vers une section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = section.offsetTop - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Appeler le téléphone
function callPhone() {
    window.location.href = 'tel:0123456789';
}

// Ouvrir l'email
function openEmail() {
    window.location.href = 'mailto:contact@etsgerard.fr';
}

// ========================================
// GESTIONNAIRE D'ÉVÉNEMENTS GLOBAL
// ========================================
window.addEventListener('load', function() {
    // Masquer le loader si présent
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 300);
    }
    
    // Initialiser les animations après le chargement
    setTimeout(() => {
        gsap.set('.hero-content', { clearProps: 'all' });
    }, 100);
});

// Gestion des erreurs
window.addEventListener('error', function(e) {
    console.error('Erreur JavaScript:', e.error);
});

// Gestion des erreurs de ressources
window.addEventListener('unhandledrejection', function(e) {
    console.error('Promesse rejetée:', e.reason);
});
