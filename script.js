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

  //   const form = document.querySelector('.contact-form');
  //   const submitBtn = form.querySelector('.submit-btn');

  //   form.addEventListener('submit', function (e) {
  //       e.preventDefault();

  //       // Get form values
  //       const name = document.getElementById('name').value.trim();
  //       const email = document.getElementById('email').value.trim();
  //       const company = document.getElementById('company').value.trim();
  //       const message = document.getElementById('message').value.trim();

  //       if (!name || !email || !company || !message) {
  //           alert('Please fill all fields.');
  //           submitBtn.textContent = 'Send Message';
  //           submitBtn.disabled = false;
  //           return;
  //       }

  //       // Show submitting state
  //       submitBtn.textContent = 'Submitting...';
  //       submitBtn.disabled = true;

  //       // Simulate 0.5s delay then redirect
  //       setTimeout(function () {
  //           // Create simple thank you page as data URL
  //           const thankYouContent = `
  //               <header class="header" style="background-color:#f8f8f8; border-bottom:2px solid #e8d9b8; position:sticky; top:0; z-index:1000; box-shadow:0 2px 8px rgba(0,0,0,0.05);">
  //   <div class="nav-container" style="max-width:1200px; margin:0 auto; padding:0 40px; display:flex; justify-content:space-between; align-items:center; height:70px;">
  //     <a href="index.html" class="logo" style="font-size:24px; font-weight:700; color:#1a1a1a; text-decoration:none; letter-spacing:1px;">
  //       Nexus<span style="color:#d4af37;">Gate</span>
  //     </a>
  //   </div>
  // </header>

  // <main class="thank-you-container" style="flex:1; max-width:600px; margin:0 auto; padding:80px 40px; text-align:center;">
    
  //   <div class="thank-you-icon" style="width:100px; height:100px; background:linear-gradient(135deg, #e8d9b8, #d4af37); border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 40px; font-size:48px; color:#1a1a1a;">
  //     ✓
  //   </div>

  //   <h1 class="thank-you-title" style="font-size:36px; font-weight:700; color:#1a1a1a; margin-bottom:20px;">
  //     Thank You!
  //   </h1>

  //   <p class="thank-you-message" style="font-size:20px; color:#333333; margin-bottom:40px; line-height:1.6;">
  //     Thank You, <span style="color:#d4af37; font-weight:600;">${name}</span>! 
  //     Your message has been received. We will contact you shortly.
  //   </p>

  //   <a href="index.html" class="home-btn" style="background-color:#d4af37; color:#1a1a1a; padding:16px 40px; border:none; border-radius:4px; font-size:16px; font-weight:600; cursor:pointer; transition:all 0.3s ease; text-decoration:none; display:inline-block;">
  //     Back to Home
  //   </a>

  // </main>

  // <footer style="margin-top:auto; background-color:#1a1a1a; color:#f8f8f8; padding:40px; text-align:center; border-top:3px solid #d4af37;">
  //   <p>&copy; 2025 NexusGate International. All rights reserved.</p>
  //   <p>Connecting Global Industries to Africa's Most Promising Opportunities</p>
  // </footer>
  //           `;

  //           // Use window.open for better compatibility
  //           const thankYouWindow = window.open('', '_self');
  //           thankYouWindow.document.write(`
  //               <!DOCTYPE html>
  //               <html>
  //               <head>
  //                   <meta charset="UTF-8">
  //                   <meta name="viewport" content="width=device-width, initial-scale=1.0">
  //                   <title>Thank You</title>
  //                   <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  //               </head>
  //               <body style="margin:0px">${thankYouContent}</body>
  //               </html>
  //           `);
  //           thankYouWindow.document.close();

  //       }, 500);
  //   });
});





