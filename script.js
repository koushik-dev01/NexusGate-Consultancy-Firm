function showPage(pageId, clickedElement = null) {
    // Hide all pages
    const pages = document.querySelectorAll('.page-section');
    pages.forEach(page => page.classList.remove('active'));

    // Show selected page
    document.getElementById(pageId).classList.add('active');

    // Clear all active states first
    const allNavLinks = document.querySelectorAll('.nav-links a');
    allNavLinks.forEach(link => link.classList.remove('active'));

    // Activate the clicked link or correct link based on page
    if (clickedElement) {
        clickedElement.classList.add('active');
    } else if (pageId === 'home') {
        // Logo click or direct home navigation
        const homeLink = document.querySelector('.nav-links li:first-child a');
        if (homeLink) homeLink.classList.add('active');
    }

    // Auto-close mobile menu
    const mobileNav = document.querySelector('.nav-links');
    if (mobileNav) {
        mobileNav.classList.remove('active');
    }

    // Scroll to top
    window.scrollTo(0, 0);
}

function scrollToContact() {
    // Close mobile menu first
    const mobileNav = document.querySelector('.nav-links');
    mobileNav.classList.remove('active');

    // Scroll to contact section smoothly
    document.querySelector('.contact-section').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Initialize event listeners
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }
});





