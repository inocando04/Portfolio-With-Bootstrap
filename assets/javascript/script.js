
  // Wait for the document to load before running the script
  document.addEventListener('DOMContentLoaded', function() {
    // Get all nav-links
    const navLinks = document.querySelectorAll('.nav-link');

    // Loop through each nav-link and add a click event listener
    navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        // Remove the 'active' class from all links
        navLinks.forEach(link => link.classList.remove('active'));

        // Add the 'active' class to the clicked link
        event.target.classList.add('active');
      });
    });
  });
