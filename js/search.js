const radioButtons = document.querySelectorAll('.form__item');

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