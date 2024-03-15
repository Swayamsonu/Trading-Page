document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });
        });
    });

    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const message = this.querySelector('textarea').value;
        // Here you can implement code to handle form submission, such as sending the message via email
        console.log('Message:', message);
        alert('Message sent successfully!');
        this.reset();
    });

    // Add animation to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#555';
        });
        button.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#333';
        });
    });

    // Add animation to header
    const header = document.querySelector('header');
    header.style.opacity = '0';
    setTimeout(() => {
        header.style.transition = 'opacity 1s';
        header.style.opacity = '1';
    }, 500);
});
