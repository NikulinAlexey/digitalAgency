const btnBurger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');

btnBurger.addEventListener('click', function () {
  btnBurger.classList.toggle('active');
  menu.classList.toggle('active');
  document.querySelector('.body').classList.toggle('lock');
})

