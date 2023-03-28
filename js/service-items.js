const serviceItems = document.querySelectorAll('.service__marketing-item');
const itemsBlock = document.querySelector('.service__items');
const itemsInfo = [
   dev = {
    'разработка интернет магазина': './online-store-dev.html',
    'разработка лендинга': '#',
    'разработка корпоративного сайта': '#',
    'разработка сайта-визитки': '#',
    'разработка сайта-католога': '#',
    'разработка брендбука': '#',
    'разработка логотипа': '#'
  },
  promotion = {
    'сео продвижение сайта': '#',
    'продвижение сайта за позиции': '#',
    'продвижение сайта за трафик': '#',
    'продвижение сайта за лиды': '#',
    'оптимизация сайта': '#',
    'раскрутка сайта': '#',
  },
  smm = {
    'ведение вк': '#',
    'ведение инстаграмм': '#',
    'таргетированная реклама': '#'
  },
  advertising = {
    'настройка контекстной рекламы': '#',
    'ведение контекстной рекламы': '#',
    'настройка и ведение РСЯ': '#'
  },
  messages = {
    'рассылка вотсап': '#',
    'рассылка телеграмм': '#'
  },
  marketer = {
    'маркетинговые исследования': '#',
    'анализ рынка': '#',
    'стратегия развитии': '#',
    'анализ конкурентов': '#',
    'анализ отдела продаж': '#',
    'выстраивание отдела продаж': '#'
  },
]
//Функционал выделения нажатого элемента:
function setActiveClass (element) {
  element.querySelector('.service__marketing-mask').classList.add('service__marketing-mask_type_active');
  element.querySelector('.service__circle').classList.add('service__circle_type_active');
  element.querySelector('.service__marketing-subtitle').classList.add('service__marketing-subtitle_type_active');
}
function removeActiveClass (element) {
  element.querySelector('.service__marketing-mask').classList.remove('service__marketing-mask_type_active');
  element.querySelector('.service__circle').classList.remove('service__circle_type_active');
  element.querySelector('.service__marketing-subtitle').classList.remove('service__marketing-subtitle_type_active');
}
function hightlightClickedItem () {
  for(i = 0; i < serviceItems.length; i++) {
    serviceItems[i].addEventListener('click', (evt) => {
      serviceItems.forEach(item => {
        removeActiveClass(item);
      })
      setActiveClass(evt.target.closest('.service__marketing-item'));
    })
  }
}

//Функционал генерации карточек:
function getTemplate(templateSelector, itemSelector) {
  const serviceItem = document
  .querySelector(templateSelector)
  .content
  .querySelector(itemSelector)
  .cloneNode(true);
 
  return serviceItem;
}

function renderItem(item) {
  itemsBlock.prepend(item);
}

function generateItem(data) {
  const element = getTemplate('#elementTemplate', '.service__item');
  
  //добавим в элемент ссылку из обьекта
  element.setAttribute('href', `${data[0]['разработка интернет магазина']}`);
  //добавим в элемент текст из обьекта
  element.querySelector('.service__subtitle').textContent = `${Object.keys(data[0])}`;

  return element;
}

hightlightClickedItem()
renderItem(generateItem(itemsInfo))



