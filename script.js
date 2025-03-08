document.addEventListener('DOMContentLoaded', function() {
  // Handle navigation highlighting
  const navLinks = document.querySelectorAll('nav a');
  const sections = document.querySelectorAll('section');
  
  // Smooth scrolling for navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Only apply to in-page links
      if (this.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 70,
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  // Highlight active navigation item based on scroll position
  window.addEventListener('scroll', function() {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
  
  // Projects page tab system
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');
  
  if (tabButtons.length > 0) {
    tabButtons.forEach(button => {
      button.addEventListener('click', function() {
        const tabId = this.getAttribute('data-tab');
        
        // Set active tab button
        tabButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // Show selected tab content
        tabContents.forEach(content => {
          content.classList.remove('active');
          if (content.getAttribute('id') === tabId) {
            content.classList.add('active');
          }
        });
      });
    });
    
    // Activate first tab by default
    if (tabButtons[0]) {
      tabButtons[0].click();
    }
  }
  
  // Scroll to top button
  const scrollTopBtn = document.querySelector('.scroll-top');
  
  if (scrollTopBtn) {
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    });
    
    scrollTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
