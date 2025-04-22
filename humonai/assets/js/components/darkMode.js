/**
 * Dark Mode Toggle and Header Interactions
 */

// Store the user's preference in local storage
const darkModePreference = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('.dark-mode-toggle');
const body = document.body;

// Apply dark mode if it was previously enabled
if (darkModePreference === 'enabled') {
  body.classList.add('dark-mode');
  if (darkModeToggle.querySelector('i').classList.contains('fa-moon')) {
    darkModeToggle.querySelector('i').classList.remove('fa-moon');
    darkModeToggle.querySelector('i').classList.add('fa-sun');
  }
}

// Toggle dark mode function
function toggleDarkMode() {
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', null);
    darkModeToggle.querySelector('i').classList.remove('fa-sun');
    darkModeToggle.querySelector('i').classList.add('fa-moon');
  } else {
    body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
    darkModeToggle.querySelector('i').classList.remove('fa-moon');
    darkModeToggle.querySelector('i').classList.add('fa-sun');
  }
}

// Add event listener to dark mode toggle button
if (darkModeToggle) {
  darkModeToggle.addEventListener('click', toggleDarkMode);
}

// Handle header scroll effects
const header = document.querySelector('.header');
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > 100) {
    header.style.padding = '0.3rem 0';
    header.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
  } else {
    header.style.padding = '0.5rem 0';
    header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.08)';
  }
  
  lastScrollTop = scrollTop;
});

// Sidebar toggle functionality
function openSidebar() {
  document.getElementById('sidebar').style.width = '250px';
}

function closeSidebar() {
  document.getElementById('sidebar').style.width = '0';
}

// Attach event listeners to sidebar open/close buttons
const burgerMenu = document.querySelector('.burger-menu');
const closeSidebarBtn = document.querySelector('.sidebar .closebtn');

if (burgerMenu) {
  burgerMenu.addEventListener('click', openSidebar);
}

if (closeSidebarBtn) {
  closeSidebarBtn.addEventListener('click', closeSidebar);
}

// Smooth scroll for anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    // Skip if it's a link without a hash or just '#'
    if (this.getAttribute('href') === '#' || this.getAttribute('href') === '') return;
    
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Account for fixed header
        behavior: 'smooth'
      });
    }
  });
});
