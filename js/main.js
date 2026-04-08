document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-links a');
  const welcomePopup = document.getElementById('welcome-popup');
  const overlay = document.querySelector('.overlay');

  function showWelcome() {
    if (welcomePopup && overlay) {
      welcomePopup.classList.add('show');
      overlay.classList.add('show');
      
      setTimeout(function() {
        welcomePopup.classList.remove('show');
        overlay.classList.remove('show');
      }, 2000);
    }
  }

  navLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href && href.endsWith('.html')) {
        e.preventDefault();
        showWelcome();
        setTimeout(function() {
          window.location.href = href;
        }, 800);
      }
    });
  });

  if (overlay) {
    overlay.addEventListener('click', function() {
      welcomePopup.classList.remove('show');
      overlay.classList.remove('show');
    });
  }
});