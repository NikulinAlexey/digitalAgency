const buttonConsultation = document.querySelector('.consultations__button');
const buttonOrder = document.querySelector('.process__button');

const popupConsultation = document.querySelector('.popup_type_consultation');
const popupOrder = document.querySelector('.popup_type_order')

const buttonClosePopupConsultation = document.querySelector('.popup__close-icon_type_consultation');
const buttonClosePopupOrder = document.querySelector('.popup__close-icon_type_order');  

function openPopup (popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', function(evt) {
    if (evt.key === 'Escape') {
      closePopup(popup);
    }
  }, { once: true});
}

function closePopup (popup) {
  popup.classList.remove('popup_opened');
}

function closePopupByOutsideClick (evt, popup) {
  if (evt.target.classList.contains('popup')) {
    closePopup(popup);
  }
}

popupConsultation.addEventListener('click', function (evt) {
  closePopupByOutsideClick(evt ,popupConsultation);
});

popupOrder.addEventListener('click', function (evt) {
  closePopupByOutsideClick(evt ,popupOrder);
});

buttonConsultation.addEventListener('click', function() {
  openPopup(popupConsultation);
});

buttonClosePopupConsultation.addEventListener('click', function() {
  closePopup(popupConsultation)
});

buttonOrder.addEventListener('click', function() {
  openPopup(popupOrder)
});

buttonClosePopupOrder.addEventListener('click', function() {
  closePopup(popupOrder)
});