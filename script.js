
// ==================================
// CREATIVE PORTFOLIO INTERACTIONS
// ==================================

// Smooth scrolling
document.querySelectorAll('nav a, .button, footer a').forEach(link => {
    link.addEventListener('click', function(event) {
        const href = this.getAttribute('href');

        if (href && href.startsWith('#')) {
            const target = document.querySelector(href);

            if (target) {
                event.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Reveal elements while scrolling
const revealElements = document.querySelectorAll(
    '.section, .content-card, .stat-card, .gallery-grid img, .hero-text, .hero-photo'
);

revealElements.forEach(element => {
    element.classList.add('reveal');
});

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

revealElements.forEach(element => {
    observer.observe(element);
});

// Header shadow when scrolling
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');

    if (window.scrollY > 30) {
        header.style.boxShadow =
            '0 5px 20px rgba(0,0,0,0.06)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// Check profile picture
document.querySelectorAll('img').forEach(image => {
    image.addEventListener('error', () => {
        console.warn('Image not found:', image.getAttribute('src'));
    });
});

console.log('Creative portfolio loaded successfully!');
