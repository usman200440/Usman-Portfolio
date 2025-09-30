// Preloader
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('fade-out');
    setTimeout(() => {
        preloader.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 1000);
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const backToTop = document.querySelector('.back-to-top');
    
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    if (window.scrollY > 300) {
        backToTop.classList.add('active');
    } else {
        backToTop.classList.remove('active');
    }
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
});

// Close mobile menu when clicking on a link
navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Back to Top Button
const backToTop = document.querySelector('.back-to-top');
backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Skills Animation
const skillBars = document.querySelectorAll('.progress');

function animateSkills() {
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
}

// Smooth Scrolling with Easing
function smoothScroll(target, duration) {
    const targetElement = document.querySelector(target);
    if (!targetElement) return;
    
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 80;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // Easing function
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.getAttribute('href');
        if (target === '#') return;
        smoothScroll(target, 1000);
    });
});

// Project Hover Effect with 3D Tilt
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const angleX = (y - centerY) / 20;
        const angleY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateZ(20px)`;
        card.style.boxShadow = `${-angleY * 2}px ${angleX * 2}px 30px rgba(0, 0, 0, 0.3)`;
        
        // Add glow effect
        const glow = document.createElement('div');
        glow.className = 'project-glow';
        glow.style.left = `${x}px`;
        glow.style.top = `${y}px`;
        card.appendChild(glow);
        
        // Remove glow after animation
        setTimeout(() => {
            glow.remove();
        }, 1000);
    });
    
    // Reset transform on mouse leave
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
    });
});

// Form Submission
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        
        // Here you would typically send the form data to a server
        console.log('Form submitted:', formObject);
        
        // Show success message
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = 'Message Sent!';
        submitButton.style.backgroundColor = '#4CAF50';
        
        // Reset form
        contactForm.reset();
        
        // Reset button after 3 seconds
        setTimeout(() => {
            submitButton.textContent = originalText;
            submitButton.style.backgroundColor = '';
        }, 3000);
    });
}

// Animate on Scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.reveal');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// Initial check on page load
window.addEventListener('load', animateOnScroll);
// Check on scroll
window.addEventListener('scroll', animateOnScroll);

// Add animation classes to sections
const sections = document.querySelectorAll('section');

sections.forEach((section, index) => {
    section.classList.add('reveal');
    
    if (index % 2 === 0) {
        section.classList.add('fade-left');
    } else {
        section.classList.add('fade-right');
    }
});

// Create animated green line
document.addEventListener('DOMContentLoaded', () => {
    const greenLine = document.createElement('div');
    greenLine.className = 'green-line';
    document.body.appendChild(greenLine);
    
    // Create multiple lines for a better effect
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            const line = document.createElement('div');
            line.className = 'green-line';
            line.style.animationDelay = `${i * 1.5}s`;
            document.body.appendChild(line);
        }, i * 500);
    }
});

// Parallax Effect
window.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth - e.pageX) / 100;
    const y = (window.innerHeight - e.pageY) / 100;
    
    document.documentElement.style.setProperty('--x', `${x}px`);
    document.documentElement.style.setProperty('--y', `${y}px`);
});

// Particles Effect
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    document.body.appendChild(particlesContainer);
    
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random position
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        
        // Random size
        const size = Math.random() * 3 + 1;
        
        // Random animation duration
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * -20;
        
        // Apply styles
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        
        // Random opacity
        particle.style.opacity = Math.random() * 0.5 + 0.1;
        
        particlesContainer.appendChild(particle);
    }
}

// Initialize effects when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Create particles
    createParticles();
    
    // Animate skills when skills section is in view
    const skillsSection = document.querySelector('.skills');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    if (skillsSection) {
        observer.observe(skillsSection);
    }
});

// Custom Cursor with Smooth Movement
const cursor = document.createElement('div');
cursor.className = 'cursor';
document.body.appendChild(cursor);

const cursorFollower = document.createElement('div');
cursorFollower.className = 'cursor-follower';
document.body.appendChild(cursorFollower);

let mouseX = 0;
let mouseY = 0;
let followerX = 0;
let followerY = 0;

// Smooth cursor movement
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Immediate cursor position
    cursor.style.transform = `translate3d(calc(${mouseX}px - 50%), calc(${mouseY}px - 50%), 0)`;
});

// Smooth follower movement
function animateCursor() {
    // Ease out effect for follower
    followerX += (mouseX - followerX - 10) * 0.2;
    followerY += (mouseY - followerY - 10) * 0.2;
    
    cursorFollower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`;
    
    requestAnimationFrame(animateCursor);
}

// Start animation
animateCursor();

document.addEventListener('mousedown', () => {
    cursor.classList.add('click');
    cursorFollower.classList.add('click');
});

document.addEventListener('mouseup', () => {
    cursor.classList.remove('click');
    cursorFollower.classList.remove('click');
});

// Add hover effect to links
const links = document.querySelectorAll('a, button, .project-card');

links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
        cursorFollower.classList.add('hover');
    });
    
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
        cursorFollower.classList.remove('hover');
    });
});

// Add CSS for cursor
const cursorStyle = document.createElement('style');
cursorStyle.textContent = `
    .cursor, .cursor-follower {
        position: fixed;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transform: translate3d(-50%, -50%, 0);
        transition: transform 0.1s ease, width 0.3s ease, height 0.3s ease, background-color 0.3s ease;
    }
    
    .cursor {
        width: 8px;
        height: 8px;
        background-color: var(--accent-color);
        z-index: 10000;
    }
    
    .cursor-follower {
        width: 30px;
        height: 30px;
        border: 2px solid var(--accent-color);
        z-index: 9999;
    }
    
    .cursor.hover, .cursor-follower.hover {
        transform: scale(1.5);
    }
    
    .cursor.click, .cursor-follower.click {
        transform: scale(0.8);
    }
`;

document.head.appendChild(cursorStyle);

// Add floating particles to hero section
function createFloatingParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const particleCount = 15;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        
        // Random position
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        
        // Random size
        const size = Math.random() * 4 + 1;
        
        // Random animation duration and delay
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * -20;
        
        // Apply styles
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        
        // Random color from gradient
        const colors = ['#6a11cb', '#2575fc', '#00f2fe'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.backgroundColor = color;
        
        // Random opacity
        particle.style.opacity = Math.random() * 0.5 + 0.1;
        
        hero.appendChild(particle);
    }
}

// Initialize floating particles when DOM is loaded
document.addEventListener('DOMContentLoaded', createFloatingParticles);

// Add CSS for floating particles
const floatingParticlesStyle = document.createElement('style');
floatingParticlesStyle.textContent = `
    .floating-particle {
        position: absolute;
        border-radius: 50%;
        pointer-events: none;
        z-index: 1;
        animation: floatParticle linear infinite;
    }
    
    @keyframes floatParticle {
        0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) translateX(20px);
            opacity: 0;
        }
    }
`;

document.head.appendChild(floatingParticlesStyle);

// WhatsApp Chat Functionality
const whatsappHireBtn = document.getElementById('whatsappHireBtn');
const whatsappModal = document.getElementById('whatsappModal');
const whatsappClose = document.getElementById('whatsappClose');
const whatsappInput = document.getElementById('whatsappInput');
const whatsappSend = document.getElementById('whatsappSend');
const editorBtns = document.querySelectorAll('.editor-btn');

// Your WhatsApp number (replace with your actual number)
const WHATSAPP_NUMBER = '923311288350'; // Replace with your WhatsApp number in international format without +

// Open WhatsApp Modal
whatsappHireBtn.addEventListener('click', () => {
    whatsappModal.classList.add('active');
    whatsappInput.focus();
});

// Close WhatsApp Modal
whatsappClose.addEventListener('click', () => {
    whatsappModal.classList.remove('active');
});

// Close modal when clicking outside
whatsappModal.addEventListener('click', (e) => {
    if (e.target === whatsappModal) {
        whatsappModal.classList.remove('active');
    }
});

// Text Editor Toolbar Functionality
editorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const command = btn.getAttribute('data-command');
        document.execCommand(command, false, null);
        whatsappInput.focus();
        
        // Toggle active state for formatting buttons
        btn.classList.toggle('active');
        setTimeout(() => btn.classList.remove('active'), 200);
    });
});

// Keyboard shortcuts for text formatting
whatsappInput.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey) {
        switch(e.key.toLowerCase()) {
            case 'b':
                e.preventDefault();
                document.execCommand('bold', false, null);
                break;
            case 'i':
                e.preventDefault();
                document.execCommand('italic', false, null);
                break;
            case 'u':
                e.preventDefault();
                document.execCommand('underline', false, null);
                break;
        }
    }
    
    // Send message on Enter (Shift+Enter for new line)
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendWhatsAppMessage();
    }
});

// Convert HTML formatting to WhatsApp formatting
function convertToWhatsAppFormat(html) {
    let text = html;
    
    // Convert bold
    text = text.replace(/<b>(.*?)<\/b>/gi, '*$1*');
    text = text.replace(/<strong>(.*?)<\/strong>/gi, '*$1*');
    
    // Convert italic
    text = text.replace(/<i>(.*?)<\/i>/gi, '_$1_');
    text = text.replace(/<em>(.*?)<\/em>/gi, '_$1_');
    
    // Convert underline (WhatsApp doesn't support underline, so we'll use bold)
    text = text.replace(/<u>(.*?)<\/u>/gi, '*$1*');
    
    // Convert strikethrough
    text = text.replace(/<strike>(.*?)<\/strike>/gi, '~$1~');
    text = text.replace(/<s>(.*?)<\/s>/gi, '~$1~');
    
    // Convert line breaks
    text = text.replace(/<br\s*\/?>/gi, '\n');
    text = text.replace(/<div>/gi, '\n');
    text = text.replace(/<\/div>/gi, '');
    text = text.replace(/<p>/gi, '');
    text = text.replace(/<\/p>/gi, '\n');
    
    // Convert lists
    text = text.replace(/<li>(.*?)<\/li>/gi, '• $1\n');
    text = text.replace(/<ul>/gi, '');
    text = text.replace(/<\/ul>/gi, '\n');
    text = text.replace(/<ol>/gi, '');
    text = text.replace(/<\/ol>/gi, '\n');
    
    // Remove any remaining HTML tags
    text = text.replace(/<[^>]*>/g, '');
    
    // Decode HTML entities
    const textarea = document.createElement('textarea');
    textarea.innerHTML = text;
    text = textarea.value;
    
    // Clean up extra newlines
    text = text.replace(/\n{3,}/g, '\n\n').trim();
    
    return text;
}

// Send WhatsApp Message
function sendWhatsAppMessage() {
    const messageHTML = whatsappInput.innerHTML.trim();
    
    if (!messageHTML || messageHTML === '<br>') {
        return;
    }
    
    // Convert HTML formatting to WhatsApp format
    const message = convertToWhatsAppFormat(messageHTML);
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');
    
    // Clear input
    whatsappInput.innerHTML = '';
    
    // Close modal after a short delay
    setTimeout(() => {
        whatsappModal.classList.remove('active');
    }, 500);
}

// Send button click handler
whatsappSend.addEventListener('click', sendWhatsAppMessage);

// Prevent default paste behavior and paste as plain text
whatsappInput.addEventListener('paste', (e) => {
    e.preventDefault();
    const text = (e.clipboardData || window.clipboardData).getData('text/plain');
    document.execCommand('insertText', false, text);
});
