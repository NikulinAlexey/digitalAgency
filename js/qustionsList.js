const questionsList = Array.from(document.querySelectorAll('.questions__list-title'));

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

