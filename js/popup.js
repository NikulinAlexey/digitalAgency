// создаем переменные для открытия / закрытия popup-ов
const buttonOpenConsultationPopup = document.querySelector('.consultations__button');
const buttonOpenOrderPopup = document.querySelector('.rolling-icon');

const buttonSubmitConsultation = document.querySelector('.popup__submit_type_consultation');
const buttonSubmitOrder = document.querySelector('.popup__submit_type_order');

const popups = document.querySelectorAll('.popup');
const popupConsultation = document.querySelector('.popup_type_consultation');
const popupOrder = document.querySelector('.popup_type_order');

// создаём переменные для "колеса фортуны"
const wheel = document.querySelector(".popup__deal-wheel");
const spinner = wheel.querySelector(".popup__spinner");
const trigger = document.querySelector(".popup__submit_type_consultation");
const ticker = wheel.querySelector(".popup__ticker");

// надписи и цвета на секторах
const prizes = [
  {
    text: "Веб дизайн",
    color: "#fff",
  },
  {
    text: "Графический дизайн",
    color: "#0A1921",
  },
  {
    text: "Раскрутка сайта",
    color: "#fff",
  },
  {
    text: "СEO продвижение",
    color: "#0A1921",
  }
];
// на сколько секторов нарезаем круг
const prizeSlice = 360 / prizes.length;
// на какое расстояние смещаем сектора друг относительно друга
const prizeOffset = Math.floor(180 / prizes.length);
// прописываем CSS-классы, которые будем добавлять и убирать из стилей
const spinClass = "is-spinning";
const selectedClass = "selected";
// получаем все значения параметров стилей у секторов
const spinnerStyles = window.getComputedStyle(spinner);

// переменная для анимации⠀
let tickerAnim;
// угол вращения
let rotation = 0;
// текущий сектор⠀
let currentSlice = 0;
// переменная для текстовых подписей
let prizeNodes;

//------------------------------------------------ функции для "колеса фортуны":

// расставляем текст по секторам
const createPrizeNodes = () => {
  // обрабатываем каждую подпись
  prizes.forEach(({ text, color, reaction }, i) => {
    // каждой из них назначаем свой угол поворота
    const rotation = ((prizeSlice * i) * -1) - prizeOffset;
    // добавляем код с размещением текста на страницу в конец блока spinner
    spinner.insertAdjacentHTML(
      "beforeend",
      // текст при этом уже оформлен нужными стилями
      `<li class="popup__prize" data-reaction=${reaction} style="--rotate: ${rotation}deg">
        <span class="text">${text}</span>
      </li>`
    );
  });
};
// рисуем разноцветные секторы
const createConicGradient = () => {
  // устанавливаем нужное значение стиля у элемента spinner
  spinner.setAttribute(
    "style",
    `background: conic-gradient(
      from -90deg,
      ${prizes
      // получаем цвет текущего сектора
      .map(({ color }, i) => `${color} 0 ${(100 / prizes.length) * (prizes.length - i)}%`)
      .reverse()
    }
    );`
  );
};

// создаём функцию, которая нарисует колесо в сборе
const setupWheel = () => {
  // сначала секторы
  createConicGradient();
  // потом текст
  createPrizeNodes();
  // а потом мы получим список всех призов на странице, чтобы работать с ними как с объектами
  prizeNodes = wheel.querySelectorAll(".popup__prize");
};

// функция запуска вращения с плавной остановкой
const spinertia = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// отслеживаем нажатие на кнопку
trigger.addEventListener("click", (evt) => {
  evt.preventDefault()
  // делаем её недоступной для нажатия
  trigger.disabled = true;
  // задаём начальное вращение колеса
  rotation = Math.floor(Math.random() * 360 + spinertia(2000, 5000));
  // убираем прошлый приз
  prizeNodes.forEach((prize) => prize.classList.remove(selectedClass));
  // добавляем колесу класс is-spinning, с помощью которого реализуем нужную отрисовку
  wheel.classList.add(spinClass);
  // через CSS говорим секторам, как им повернуться
  spinner.style.setProperty("--rotate", rotation);
  // возвращаем язычок в горизонтальную позицию
  ticker.style.animation = "none";
  // запускаем анимацию вращение
  runTickerAnimation();
});

// функция запуска вращения с плавной остановкой
const runTickerAnimation = () => {
  // взяли код анимации отсюда: https://css-tricks.com/get-value-of-css-rotation-through-javascript/
  const values = spinnerStyles.transform.split("(")[1].split(")")[0].split(",");
  const a = values[0];
  const b = values[1];
  let rad = Math.atan2(b, a);

  if (rad < 0) rad += (2 * Math.PI);

  const angle = Math.round(rad * (180 / Math.PI));
  const slice = Math.floor(angle / prizeSlice);

  // анимация язычка, когда его задевает колесо при вращении
  // если появился новый сектор
  if (currentSlice !== slice) {
    // убираем анимацию язычка
    ticker.style.animation = "none";
    // и через 10 миллисекунд отменяем это, чтобы он вернулся в первоначальное положение
    setTimeout(() => ticker.style.animation = null, 5);
    // после того как язычок прошёл сектор — делаем его текущим 
    currentSlice = slice;
  }
  // запускаем анимацию
  tickerAnim = requestAnimationFrame(runTickerAnimation);
};

// функция выбора призового сектора
const selectPrize = () => {
  let selected = Math.floor(rotation / prizeSlice);

  if(selected == 3 || selected == 2){
    selected -= 2;
  }else if(selected == 1 || selected == 0){
    selected += 2;
  }

  prizeNodes[selected].classList.add(selectedClass);
};

// отслеживаем, когда закончилась анимация вращения колеса
spinner.addEventListener("transitionend", () => {
  // останавливаем отрисовку вращения
  cancelAnimationFrame(tickerAnim);
  // получаем текущее значение поворота колеса
  rotation %= 360;
  // выбираем приз
  selectPrize();
  // убираем класс, который отвечает за вращение
  wheel.classList.remove(spinClass);
  // отправляем в CSS новое положение поворота колеса
  spinner.style.setProperty("--rotate", rotation);
  // делаем кнопку снова активной
  trigger.disabled = false;
});

//------------------------------------------------ функции открытия / закрытия popup-ов:

function openPopup(popup) {
  popup.classList.add('popup_opened');
}
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
    }
    if (evt.target.classList.contains('popup__close-icon')) {
      closePopup(popup);
    }
  })  
})
buttonOpenConsultationPopup.addEventListener('click', function () {
  openPopup(popupOrder);
});
buttonOpenOrderPopup.addEventListener('click', function () {
  openPopup(popupConsultation)
})

setupWheel();