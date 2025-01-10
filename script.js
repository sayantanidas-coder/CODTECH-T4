const navLinks = document.querySelector('.nav-links');
const navbarToggle = document.createElement('div');
navbarToggle.classList.add('navbar-toggle');
navbarToggle.innerHTML = '&#9776;'; 
document.querySelector('.navbar').prepend(navbarToggle);

navbarToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show-nav');
});
const sections = document.querySelectorAll('section');
const options = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, options);
sections.forEach((section) => observer.observe(section));
const scrollToTopButton = document.createElement('button');
scrollToTopButton.innerText = '↑';
scrollToTopButton.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopButton);

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.classList.add('show');
    } else {
        scrollToTopButton.classList.remove('show');
    }
});
document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1); 
        const targetElement = document.getElementById(targetId);
        if (targetElement) { 
            window.scrollTo({
                top: targetElement.offsetTop - 60,
                behavior: 'smooth'
            });
        } 
    });
});
const enrollButtons = document.querySelectorAll('.enroll-button');
enrollButtons.forEach((button) => {
    button.addEventListener('click', () => {
        alert('You have successfully enrolled in this course!');
    });
});
 