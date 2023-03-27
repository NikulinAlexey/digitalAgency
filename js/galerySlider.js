let currentSlide = 0;
const slides = document.querySelectorAll(".portfolio__items");
const buttonPortfolioLeft = document.querySelector('.portfolio__button_type_left');
const buttonPortfolioRight = document.querySelector('.portfolio__button_type_right');

const init = (n) => {
  
  slides.forEach((slide) => {
    slide.style.display = "none"
  })
  slides[n].style.display = "grid";
}
document.addEventListener("DOMContentLoaded", init(currentSlide))
const next = () => {
  currentSlide >= slides.length - 1 ? currentSlide = 0 : currentSlide++
  init(currentSlide)
}
const prev = () => {
  currentSlide <= 0 ? currentSlide = slides.length - 1 : currentSlide--
  init(currentSlide)
}

buttonPortfolioRight.addEventListener('click', next)
buttonPortfolioLeft.addEventListener('click', prev)
