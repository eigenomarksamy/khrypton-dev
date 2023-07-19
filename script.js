document.addEventListener('DOMContentLoaded', function () {
    const slideshow = document.querySelector('.slideshow');
    let currentSlide = 0;
    let images = ['khy1.jpg', 'khy2.jpg'];
  
    function loadSlide() {
      let slide = new Image();
      slide.src = images[currentSlide];
      slide.classList.add('slide');
      slide.addEventListener('load', function () {
        slideshow.innerHTML = '';
        slideshow.appendChild(slide);
        slide.classList.add('active');
      });
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % images.length;
      loadSlide();
    }
  
    // Start the slideshow
    setInterval(nextSlide, 3000); // Change slide every 3 seconds
  });
  