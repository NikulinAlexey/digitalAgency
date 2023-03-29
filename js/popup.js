const buttonConsultation = document.querySelector('.consultations__button');
const buttonOrder = document.querySelector('.rolling-icon');
const buttonOrderSubmit = document.querySelector('.popup__submit_type_order')

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

popups.forEach((popup) => {
  if(popup) {
    popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
          closePopup(popup)
      }
      if (evt.target.classList.contains('popup__close-icon')) {
        closePopup(popup)
      }
  })
  }
})

buttonConsultation.addEventListener('click', function() {
  openPopup(popupOrder);
});
buttonOrder.addEventListener('click', function() {
  openPopup(popupConsultation)
})




