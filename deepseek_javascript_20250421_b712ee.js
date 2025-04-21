// GSAP Animations
document.addEventListener('DOMContentLoaded', () => {
    // Hero Section Animation
    gsap.from('.hero-content', {
        duration: 1,
        opacity: 0,
        y: 50,
        ease: 'power3.out'
    });
    
    gsap.from('.hero-image', {
        duration: 1,
        opacity: 0,
        x: 50,
        ease: 'power3.out',
        delay: 0.3
    });
    
    // Service Cards Hover Animation
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
    
    // Scroll Trigger Animations
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate sections on scroll
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out'
        });
    });
    
    // Animate skills bars
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        
        ScrollTrigger.create({
            trigger: bar,
            start: 'top 80%',
            onEnter: () => {
                gsap.to(bar, {
                    width: width,
                    duration: 1.5,
                    ease: 'power3.out'
                });
            }
        });
    });
    
    // Parallax Effect for Hero Section
    gsap.to('.hero::before', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        },
        x: '20%',
        y: '20%',
        ease: 'none'
    });
});