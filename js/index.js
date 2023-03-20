const btnBurger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');

const questionsList = Array.from(document.querySelectorAll('.questions__list-title'));

const buttonConsultation = document.querySelector('.consultations__button');
const buttonOrder = document.querySelector('.process__button');
const popupConsultation = document.querySelector('.popup_type_consultation');
const popupOrder = document.querySelector('.popup_type_order')
const popups = document.querySelectorAll('.popup');

function closeByEscape (evt) {
  if(evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup__opened');
    closePopup(openedPopup);
  }
}

function openPopup (popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
}

function closePopup (popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
}

$(function(){
  $('.portfolio__item').height($('.portfolio__item').width());
  $('.clients__item-block').height($('.clients__item-block').width());
  $('.gratitude__item').height($('.gratitude__item').width()/1.3);

  $(window).resize(function(){
    $('.portfolio__item').height($('.portfolio__item').width());
    $('.clients__item-block').height($('.clients__item-block').width());
    $('.gratitude__item').height($('.gratitude__item').width()/1.3);
  });
});

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
          closePopup(popup)
      }
      if (evt.target.classList.contains('popup__close-icon')) {
        closePopup(popup)
      }
  })
})

questionsList.forEach(function(question) {
  question.addEventListener('click', function(evt) {
    evt.target.closest('.questions__list-item')
    .querySelector('.questions__list-paragraph')
    .classList.toggle('questions__list-paragraph_type_active');

    evt.target.closest('.questions__list-item')
    .querySelector('.questions__icon')
    .classList.toggle('questions__icon_type_active');
  })
})

buttonConsultation.addEventListener('click', function() {
  openPopup(popupConsultation);
});

buttonOrder.addEventListener('click', function() {
  openPopup(popupOrder)
});

btnBurger.addEventListener('click', function () {
  btnBurger.classList.toggle('active');
  menu.classList.toggle('active');
  document.querySelector('.body').classList.toggle('lock');
})




