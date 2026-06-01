<<<<<<< HEAD
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



const images = {
  project1: [
    "assets/images/brochure.png",
    "assets/images/brochure2.png",
  ],
  project2: [
    "assets/images/FRONT.png",
    "assets/images/BACK.png",
    "assets/images/SAMPLE.png",
  ],
  project3: [
    "assets/images/fish.jpg",
  ],
  project4: [
    "assets/images/megamind.jpeg",
  ],
  project5: [
    "assets/images/robot.jpg",
  ],
  project6: [
    "assets/images/sdad.png",
  ],
  project7: [
    "assets/images/webdesign.jpg",
  ],
  project8: [
    "assets/images/woman.jpg",
  ],
  project9: [
    "assets/images/jesus.png",
  ],
  project10: [
    "assets/images/project.png",
  ],
};




function openGallery(project, index) {
  const container = document.getElementById("galleryImages");
  container.innerHTML = "";

  images[project].forEach((img, i) => {
    container.innerHTML += `
      <div class="carousel-item ${i === index ? 'active' : ''} h-100">
        <img src="${img}" class="w-100 h-100" style="object-fit: contain;">
      </div>
    `;
  });

  

  new bootstrap.Modal(document.getElementById('galleryModal')).show();
}



  
=======
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



const images = {
  project1: [
    "assets/images/brochure.png",
    "assets/images/brochure2.png",
  ],
  project2: [
    "assets/images/FRONT.png",
    "assets/images/BACK.png",
    "assets/images/SAMPLE.png",
  ],
  project3: [
    "assets/images/fish.jpg",
  ],
  project4: [
    "assets/images/megamind.jpeg",
  ],
  project5: [
    "assets/images/robot.jpg",
  ],
  project6: [
    "assets/images/sdad.png",
  ],
  project7: [
    "assets/images/webdesign.jpg",
  ],
  project8: [
    "assets/images/woman.jpg",
  ],
  project9: [
    "assets/images/jesus.png",
  ],
};




function openGallery(project, index) {
  const container = document.getElementById("galleryImages");
  container.innerHTML = "";

  images[project].forEach((img, i) => {
    container.innerHTML += `
      <div class="carousel-item ${i === index ? 'active' : ''} h-100">
        <img src="${img}" class="w-100 h-100" style="object-fit: contain;">
      </div>
    `;
  });

  

  new bootstrap.Modal(document.getElementById('galleryModal')).show();
}



  
>>>>>>> 6c29e0f1ef98f788257d4b144da960d418ba1d39
