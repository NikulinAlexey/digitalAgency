const serviceItems = document.querySelectorAll('.service__marketing-item');
const itemsBlock = document.querySelector('.service__items');
const itemsInfo = [
  dev = [
    {
      text: 'Разработка интернет магазина',
      link: './online-store-dev.html'
    },
    {
      text: 'Разработка лендинга',
      link: '#'
    },
    {
      text: 'Разработка корпоративного сайта',
      link: '#'
    },

    {
      text: 'Разработка сайта-визитки',
      link: '#'
    },
    {
      text: 'Разработка сайта-католога',
      link: '#'
    },
    {
      text: 'Разработка брендбука',
      link: '#'
    },
    {
      text: 'Разработка логотипа',
      link: '#'
    }
  ],
  promotion = [
    {
      text: 'CEO продвижение сайта',
      link: '#'
    },
    {
      text: 'Продвижение сайта за позиции',
      link: '#'
    },
    {
      text: 'Продвижение сайта за трафик',
      link: '#'
    },

    {
      text: 'Продвижение сайта за лиды',
      link: '#'
    },
    {
      text: 'Оптимизация сайта',
      link: '#'
    },
    {
      text: 'Раскрутка сайта',
      link: '#'
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
      text: 'Стратегия развитии',
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
  const element = getTemplate('#elementTemplate', '.service__item');
  
  element.setAttribute('href', `${dataItem.link}`);
  element.querySelector('.service__subtitle').textContent = `${dataItem.text}`;

  return element;
}

function generateStartingCards() {
  itemsInfo[0].forEach(() => {
    renderItem(generateItem(itemsInfo[0][0]));
  })
}

//Нужно сделать массив в массиве, чтобы сократить код слушателей
//dev
serviceItems[0].addEventListener('click', () => {
  itemsBlock.innerHTML = '';
  for(i = 0; itemsInfo[0].length; i++) {
    renderItem(generateItem(itemsInfo[0][i]));
  }
});
//promotion
serviceItems[1].addEventListener('click', () => {
  itemsBlock.innerHTML = '';
  for(i = 0; itemsInfo[1].length; i++) {
    renderItem(generateItem(itemsInfo[1][i]));
  }
});
//smm
serviceItems[2].addEventListener('click', () => {
  itemsBlock.innerHTML = '';
  for(i = 0; itemsInfo[2].length; i++) {
    console.log(itemsInfo[2][i])
    renderItem(generateItem(itemsInfo[2][i]));
  }
});
//advertising
serviceItems[3].addEventListener('click', () => {
  itemsBlock.innerHTML = '';
  for(i = 0; itemsInfo[3].length; i++) {
    console.log(itemsInfo[3][i])
    renderItem(generateItem(itemsInfo[3][i]));
  }
});
//messages
serviceItems[4].addEventListener('click', () => {
  itemsBlock.innerHTML = '';
  for(i = 0; itemsInfo[4].length; i++) {
    console.log(itemsInfo[4][i])
    renderItem(generateItem(itemsInfo[4][i]));
  }
});
//marketer
serviceItems[5].addEventListener('click', () => {
  itemsBlock.innerHTML = '';
  for(i = 0; itemsInfo[5].length; i++) {
    console.log(itemsInfo[5][i])
    renderItem(generateItem(itemsInfo[5][i]));
  }
});

generateStartingCards()
hightlightClickedItem()




