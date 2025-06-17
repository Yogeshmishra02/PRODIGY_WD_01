// Navbar scroll effect
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Optional: Keyboard accessibility for nav links
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  link.addEventListener('focus', function() {
    this.classList.add('focus-visible');
  });
  link.addEventListener('blur', function() {
    this.classList.remove('focus-visible');
  });
});
  