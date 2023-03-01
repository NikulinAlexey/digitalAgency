const btnBurger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__navigation');

btnBurger.addEventListener('click', function () {
  btnBurger.classList.toggle('active');
  menu.classList.toggle('active');
  document.querySelector('.body').classList.toggle('lock');

  document.querySelector('.header__search-block').classList.toggle('closed');
  document.querySelector('.header__login-block').classList.toggle('closed');
  document.querySelector('.header__location').classList.toggle('closed');
  document.querySelector('.header__language-block').classList.toggle('closed');

  document.querySelector('.header__logo').classList.toggle('burger');
})

