let currentSlide = 0;

const reviews = document.querySelectorAll(".reviews__upper-block");
const buttonSlideLeft = document.querySelector('.reviews__button_type_left');
const buttonSlideRight = document.querySelector('.reviews__button_type_right');

const initReview = (n) => {
  
  reviews.forEach((review) => {
    review.style.display = "none"
  })
  reviews[n].style.display = "flex";
}
document.addEventListener("DOMContentLoaded", initReview(currentSlide))
const nextReview = () => {
  currentSlide >= reviews.length - 1 ? currentSlide = 0 : currentSlide++
  initReview(currentSlide)
}
const prevReview = () => {
  currentSlide <= 0 ? currentSlide = reviews.length - 1 : currentSlide--
  initReview(currentSlide)
}

buttonSlideRight.addEventListener('click', nextReview)
buttonSlideLeft.addEventListener('click', prevReview)