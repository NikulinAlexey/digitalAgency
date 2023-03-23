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
const buttonReset = document.querySelector('.calculator__reset-block');
const resultPrice = document.querySelector('.calculator__price');
const selectService = document.querySelector('.calculator__select-item_type_service');
const selectDev = document.querySelector('.calculator__select-item_type_dev');

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

changePrice(dataPrices);