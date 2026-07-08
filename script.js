// ---------- Mobile menu toggle ----------
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Close menu when a link is clicked (mobile)
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });
});

// ---------- Auto-update footer year ----------
document.getElementById('year').textContent = new Date().getFullYear();

// ---------- Fade-in sections on scroll ----------
const sections = document.querySelectorAll('.section, .hero');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

sections.forEach(section => {
    section.classList.add('fade-init');
    observer.observe(section);
});