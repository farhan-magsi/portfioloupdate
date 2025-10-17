// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if(contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}

// Add scroll effect to header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if(window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(44, 62, 80, 0.95)';
        header.style.padding = '0.5rem 0';
    } else {
        header.style.backgroundColor = 'var(--header-color)';
        header.style.padding = '1rem 0';
    }
});

// Color Picker Functionality
const headerColorPicker = document.getElementById('headerColor');
const heroColorPicker = document.getElementById('heroColor');

// Load saved colors from localStorage
document.addEventListener('DOMContentLoaded', function() {
    const savedHeaderColor = localStorage.getItem('headerColor');
    const savedHeroColor = localStorage.getItem('heroColor');
    
    if (savedHeaderColor) {
        document.documentElement.style.setProperty('--header-color', savedHeaderColor);
        headerColorPicker.value = savedHeaderColor;
    }
    
    if (savedHeroColor) {
        document.documentElement.style.setProperty('--hero-color', savedHeroColor);
        heroColorPicker.value = savedHeroColor;
    }
});

// Header color change
headerColorPicker.addEventListener('input', function() {
    const color = this.value;
    document.documentElement.style.setProperty('--header-color', color);
    localStorage.setItem('headerColor', color);
});

// Hero color change
heroColorPicker.addEventListener('input', function() {
    const color = this.value;
    document.documentElement.style.setProperty('--hero-color', color);
    localStorage.setItem('heroColor', color);
});