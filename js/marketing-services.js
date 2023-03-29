const serviceItems = document.querySelectorAll('.service__marketing-item');
const itemsBlock = document.querySelector('.service__items');

const itemSelector = '.service__item';
const templateSelector = '#elementTemplate';
const textSelector = '.service__subtitle';

const itemsInfo = [
  dev = [
    {
      text: 'Разработка интернет магазина',
      link: './online-store-dev.html',
    },
    {
      text: 'Разработка лендинга',
      link: '#',
    },
    {
      text: 'Разработка корпоративного сайта',
      link: '#',
    },

    {
      text: 'Разработка сайта-визитки',
      link: '#',
    },
    {
      text: 'Разработка сайта-католога',
      link: '#',
    },
    {
      text: 'Разработка брендбука',
      link: '#',
    },
    {
      text: 'Разработка логотипа',
      link: '#',
    }
  ],
  promotion = [
    {
      text: 'CEO продвижение сайта',
      link: '#',
    },
    {
      text: 'Продвижение сайта за позиции',
      link: '#',
    },
    {
      text: 'Продвижение сайта за трафик',
      link: '#',
    },

    {
      text: 'Продвижение сайта за лиды',
      link: '#',
    },
    {
      text: 'Оптимизация сайта',
      link: '#',
    },
    {
      text: 'Раскрутка сайта',
      link: '#',
    }
  ],
  smm = [
    {
      text: 'Ведение вк',
      link: '#'
    },
    {
      text: 'Ведение инстаграмм',
      link: '#'
    },
    {
      text: 'Таргетированная реклама',
      link: '#'
    }
  ],
  advertising = [
    {
      text: 'Настройка контекстной рекламы',
      link: '#'
    },
    {
      text: 'Ведение контекстной рекламы',
      link: '#'
    },
    {
      text: 'Настройка и ведение РСЯ',
      link: '#'
    }
  ],
  messages = [
    {
      text: 'Рассылка вотсап',
      link: '#'
    },
    {
      text: 'Рассылка телеграмм',
      link: '#'
    }
  ],
  marketer = [
    {
      text: 'Маркетинговые исследования',
      link: '#'
    },
    {
      text: 'Анализ рынка',
      link: '#'
    },
    {
      text: 'Стратегия развития',
      link: '#'
    },
    {
      text: 'Анализ конкурентов',
      link: '#'
    },
    {
      text: 'Анализ отдела продаж',
      link: '#'
    },
    {
      text: 'Выстраивание отдела продаж',
      link: '#'
    }
  ]
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
  itemsBlock.append(item);
}
function generateItem(dataItem) {
  const element = getTemplate(templateSelector, itemSelector);
  
  element.setAttribute('href', `${dataItem.link}`);
  element.querySelector(textSelector).textContent = `${dataItem.text}`;

  return element;
}
function generateStartingCards() {
  itemsInfo[0].forEach(() => {
    renderItem(generateItem(itemsInfo[0][0]));
  })
}

//Навешиваем на все блоки шахматных фигур слушатели клика. По клику на блок фигуры функция берет данные из массива itemsInfo и рисует нужные карточки
function setEventListeners() {
  for(let i = 0; i < serviceItems.length; i++) {
    serviceItems[i].addEventListener('click', () => {
      itemsBlock.innerHTML = '';
      for(j = 0; j < itemsInfo[i].length; j++) {
        renderItem(generateItem(itemsInfo[i][j]));
      }
    });
  }
}

setEventListeners()
generateStartingCards()
hightlightClickedItem()




