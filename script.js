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

// ---------- Contact form submission ----------
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        formStatus.textContent = 'Sending...';

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: new FormData(contactForm),
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                formStatus.textContent = "Thanks! Your message has been sent.";
                contactForm.reset();
            } else {
                formStatus.textContent = "Something went wrong. Please email me directly.";
            }
        } catch (err) {
            formStatus.textContent = "Something went wrong. Please email me directly.";
        }
    });
}

// ---------- Active nav link on scroll ----------
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
const pageSections = document.querySelectorAll('section[id]');

const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        const link = document.querySelector(`.nav-links a[href="#${id}"]`);
        if (!link) return;
        if (entry.isIntersecting) {
            navAnchors.forEach(a => a.classList.remove('active'));
            link.classList.add('active');
        }
    });
}, { threshold: 0.5 });

pageSections.forEach(section => navObserver.observe(section));

// ---------- Subtle tilt on project cards ----------
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateX = ((y / rect.height) - 0.5) * -6;
        const rotateY = ((x / rect.width) - 0.5) * 6;
        card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

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