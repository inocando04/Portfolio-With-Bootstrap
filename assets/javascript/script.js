// navigation active color
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


// robot spline watermark remover

(() => {
  const interval = setInterval(() => {
    try {
      const viewer = document.querySelector('spline-viewer');
      if (viewer && viewer.shadowRoot) {
        const logo = viewer.shadowRoot.querySelector('#logo');
        if (logo) {
          logo.remove();
          console.log("Logo removed!");
          clearInterval(interval);
        }
      }
    } catch (e) {
      console.error("Error removing logo:", e);
    }
  }, 500);
})();




  
