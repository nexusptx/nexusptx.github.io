const slideshow = document.querySelector('.slideshow-container');
const slides = slideshow.querySelectorAll('.mySlides');
const prevBtn = slideshow.querySelector('.prev');
const nextBtn = slideshow.querySelector('.next');
let slideIndex = 0;

function showSlide(n) {
  if (n > slides.length - 1) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex = n;
  }
  slides.forEach(slide => slide.style.display = "none");
  slides[slideIndex].style.display = "block";
}

function nextSlide() {
  showSlide(slideIndex + 1);
}

function prevSlide() {
  showSlide(slideIndex - 1);
}

showSlide(slideIndex);

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

function home() {
    window.location.href = "../../index.html";
  }

  



  