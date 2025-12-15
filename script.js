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





// Video player functionality
document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('promo-video');
    const playBtn = document.getElementById('play-btn');
    const container = document.querySelector('.video-container');

    if (video && playBtn && container) {
        // Hide controls initially
        video.controls = false;
        
        // Play button click
        playBtn.addEventListener('click', function(e) {
            e.preventDefault();
            container.classList.add('video-playing');
            video.play().then(() => {
                video.controls = true;
            }).catch(err => {
                console.log('Autoplay prevented:', err);
                video.controls = true;
                container.classList.remove('video-playing');
            });
        });
    };

    if (video && playBtn && container) {
        // Show native controls when playing
        playBtn.addEventListener('click', function (e) {
            e.preventDefault();
            container.classList.add('video-playing');
            video.play().then(() => {
                video.controls = true; // Ensure controls are visible
            }).catch(err => {
                console.log('Autoplay prevented:', err);
                // Fallback: show controls immediately
                video.controls = true;
                container.classList.remove('video-playing');
            });
        });

        // Click video to play/pause
        video.addEventListener('click', function (e) {
            if (!video.controls) {
                if (video.paused) {
                    container.classList.add('video-playing');
                    video.play();
                }
            }
        });

        // Reset overlay when video ends or paused
        video.addEventListener('pause', function () {
            if (video.currentTime === 0 || video.ended) {
                container.classList.remove('video-playing');
            }
        });

        video.addEventListener('ended', function () {
            container.classList.remove('video-playing');
        });

        // Hide overlay on first user interaction
        let hasInteracted = false;
        document.addEventListener('click', function () {
            if (!hasInteracted) {
                hasInteracted = true;
            }
        }, { once: true });
    }
});

