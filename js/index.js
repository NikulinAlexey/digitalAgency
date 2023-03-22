const btnBurger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');

const questionsList = Array.from(document.querySelectorAll('.questions__list-title'));

const radioButtons = document.querySelectorAll('.form__item');

const buttonReset = document.querySelector('.calculator__reset-block');
const resultPrice = document.querySelector('.calculator__price');

const selectService = document.querySelector('.calculator__select-item_type_service');
const selectDev = document.querySelector('.calculator__select-item_type_dev');

const dataPrices = {
  serviceSelect: {
    service1: 100,
    service2: 200,
    service3: 300,
  },
  devSelect: {
    dev1: 100,
    dev2: 200,
    dev3: 300,
  }
}

function changePrice (data) {
  let result = 0;
  let servicePrice = 0;
  let devPrice = 0;

  buttonReset.addEventListener('click', () => {
    result = 0;
  });

  selectDev.addEventListener('change', () => {
    devPrice = data.devSelect[`${selectDev.value}`];
    result = `от ${servicePrice + devPrice} руб.`;
    resultPrice.textContent = result;
  })

  selectService.addEventListener('change', () => {
    servicePrice = data.serviceSelect[`${selectService.value}`];
    result = `от ${servicePrice + devPrice} руб.`;
    resultPrice.textContent = result;
  });
}

$(buttonReset).click(() => {
  $('.calculator__select-item').prop('selectedIndex',0);
  resultPrice.textContent = `от 0 руб.`
})

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

btnBurger.addEventListener('click', function () {
  btnBurger.classList.toggle('active');
  menu.classList.toggle('active');
  document.querySelector('.body').classList.toggle('lock');
})

radioButtons.forEach((item) => {
  item.addEventListener('input', (evt) => {
    if(evt.target.checked) {
      radioButtons.forEach((item) => {
        item.parentNode.closest('.form__label').querySelector('.form__label-text').classList.remove('form__label-text-type_active');
      });
      
      evt.target.parentNode.closest('.form__label').querySelector('.form__label-text').classList.add('form__label-text-type_active');
    }
  })
})

changePrice(dataPrices);
