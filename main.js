
//Hamburger Toogle Navigation
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const navbarLinks = document.querySelector('.navbar-links');
    const navLinks = document.querySelectorAll('.navbar-links a'); // Select all links
  
    if (hamburgerButton && navbarLinks) {
      hamburgerButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
      });
  
      // Close the hamburger menu when a navigation link is clicked
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          navbarLinks.classList.remove('active'); // Hide the menu
        });
      });
    } else {
      console.error('Elements not found in the DOM');
    }
  });
  
