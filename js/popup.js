const buttonOpenConsultationPopup = document.querySelector('.consultations__button');
const buttonOpenOrderPopup = document.querySelector('.rolling-icon');

const buttonSubmitOrder = document.querySelector('.popup__submit_type_order')
const buttonSubmitConsultation = document.querySelector('.popup__submit_type_consultation');

const popupConsultation = document.querySelector('.popup_type_consultation');
const popupConsultationImage = popupConsultation.querySelector('.popup__image');
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

buttonOpenConsultationPopup.addEventListener('click', function() {
  openPopup(popupOrder);
});
buttonOpenOrderPopup.addEventListener('click', function() {
  openPopup(popupConsultation)
})

buttonSubmitConsultation.addEventListener('click', (evt) => {
  evt.preventDefault();
  
  
  popupConsultationImage.animate(
    [
      {
        // from
        transform: "rotate(0)", easing: "ease-in-out" 
      },
      {
        // to
        transform: "rotate(360deg)", easing: "ease-in-out"
      },
    ],
    2500
  );
})




