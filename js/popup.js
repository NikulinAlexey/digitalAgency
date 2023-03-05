const buttonConsultation = document.querySelector('.consultations__button');
const popupConsultation = document.querySelector('.popup_type_consultation');
const buttonClosePopupConsultation = document.querySelector('.popup__close-icon_type_consultation');

function openPopup (popup) {
  popup.classList.add('popup_opened');
}

function closePopup (popup) {
  popup.classList.remove('popup_opened');
}

buttonConsultation.addEventListener('click', function() {
  openPopup(popupConsultation);
});

buttonClosePopupConsultation.addEventListener('click', function() {
  closePopup(popupConsultation)
})