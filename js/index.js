const btnBurger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');


$(function(){
  $('.clients__item-block').height($('.clients__item-block').width());
  $('.gratitude__item').height($('.gratitude__item').width()/1.3);
  $('.team__item').height($('.team__image').width()*0.7);

  $(window).resize(function(){
    $('.clients__item-block').height($('.clients__item-block').width());
    $('.gratitude__item').height($('.gratitude__item').width()/1.3);
    $('.team__item').height($('.team__image').width()*0.7);
  });
});



btnBurger.addEventListener('click', function () {
  btnBurger.classList.toggle('active');
  menu.classList.toggle('active');
  document.querySelector('.body').classList.toggle('lock');
})






