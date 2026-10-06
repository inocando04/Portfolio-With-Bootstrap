document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      navLinks.forEach(link => link.classList.remove('active'));
      event.target.classList.add('active');
    });
  });

  document.querySelectorAll('.carousel').forEach((carouselEl) => {
    if (!carouselEl.dataset.bsRide) {
      carouselEl.setAttribute('data-bs-ride', 'carousel');
    }

    if (!bootstrap.Carousel.getOrCreateInstance(carouselEl)) {
      new bootstrap.Carousel(carouselEl, {
        interval: 3000,
        pause: 'hover',
        wrap: true
      });
    }
  });
});

(() => {
  const interval = setInterval(() => {
    try {
      const viewer = document.querySelector('spline-viewer');
      if (viewer && viewer.shadowRoot) {
        const logo = viewer.shadowRoot.querySelector('#logo');
        if (logo) {
          logo.remove();
          clearInterval(interval);
        }
      }
    } catch (e) {
      console.error('Error removing logo:', e);
    }
  }, 500);
})();

const images = {
  project1: [
    'assets/images/brochure.png',
    'assets/images/brochure2.png'
  ],
  project2: [
    'assets/images/FRONT.png',
    'assets/images/BACK.png',
    'assets/images/SAMPLE.png'
  ],
  project3: ['assets/images/fish.jpg'],
  project4: ['assets/images/megamind.jpeg'],
  project5: ['assets/images/robot.jpg'],
  project6: ['assets/images/sdad.png'],
  project7: ['assets/images/webdesign.jpg'],
  project8: ['assets/images/woman.jpg'],
  project9: ['assets/images/jesus.png'],
  project10: ['assets/images/project.png'],
  project11: [
    'assets/images/Task1A.png',
    'assets/images/Task1B.png',
    'assets/images/Task2.png'
  ]
};

function openGallery(project, index) {
  const container = document.getElementById('galleryImages');
  const modalElement = document.getElementById('galleryModal');
  const galleryCarousel = document.getElementById('galleryContent');

  if (!container || !galleryCarousel || !modalElement) return;

  container.innerHTML = '';

  images[project].forEach((img, i) => {
    const slide = document.createElement('div');
    slide.className = `carousel-item ${i === index ? 'active' : ''} h-100`;
    slide.innerHTML = `<img src="${img}" class="w-100 h-100" style="object-fit: contain;">`;
    container.appendChild(slide);
  });

  if (bootstrap.Carousel.getOrCreateInstance(galleryCarousel)) {
    bootstrap.Carousel.getOrCreateInstance(galleryCarousel).to(index);
  } else {
    const galleryInstance = new bootstrap.Carousel(galleryCarousel, {
      interval: false,
      wrap: true
    });
    galleryInstance.to(index);
  }

  new bootstrap.Modal(modalElement).show();
}



  
