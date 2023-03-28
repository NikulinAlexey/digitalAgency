const serviceItems = document.querySelectorAll('.service__marketing-item');
const itemsBlock = document.querySelector('.service__items');
const itemsInfo = [
  dev = [
    {
      text: 'разработка интернет магазина',
      link: './online-store-dev.html'
    },
    {
      text: 'разработка лендинга',
      link: '#'
    },
    {
      text: 'разработка корпоративного сайта',
      link: '#'
    },

    {
      text: 'разработка сайта-визитки',
      link: '#'
    },
    {
      text: 'разработка сайта-католога',
      link: '#'
    },
    {
      text: 'разработка брендбука',
      link: '#'
    },
    {
      text: 'разработка логотипа',
      link: '#'
    }
  ],
  promotion = [
    {
      text: 'сео продвижение сайта',
      link: '#'
    },
    {
      text: 'продвижение сайта за позиции',
      link: '#'
    },
    {
      text: 'продвижение сайта за трафик',
      link: '#'
    },

    {
      text: 'продвижение сайта за лиды',
      link: '#'
    },
    {
      text: 'оптимизация сайта',
      link: '#'
    },
    {
      text: 'раскрутка сайта',
      link: '#'
    }
  ],
  smm = [
    {
      text: 'ведение вк',
      link: '#'
    },
    {
      text: 'ведение инстаграмм',
      link: '#'
    },
    {
      text: 'таргетированная реклама',
      link: '#'
    }
  ],
  advertising = [
    {
      text: 'настройка контекстной рекламы',
      link: '#'
    },
    {
      text: 'ведение контекстной рекламы',
      link: '#'
    },
    {
      text: 'настройка и ведение РСЯ',
      link: '#'
    }
  ],
  messages = [
    {
      text: 'рассылка вотсап',
      link: '#'
    },
    {
      text: 'рассылка телеграмм',
      link: '#'
    }
  ],
  marketer = [
    {
      text: 'маркетинговые исследования',
      link: '#'
    },
    {
      text: 'анализ рынка',
      link: '#'
    },
    {
      text: 'стратегия развитии',
      link: '#'
    },
    {
      text: 'анализ конкурентов',
      link: '#'
    },
    {
      text: 'анализ отдела продаж',
      link: '#'
    },
    {
      text: 'выстраивание отдела продаж',
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


//dev
serviceItems[0].addEventListener('click', (evt) => {
  itemsBlock.innerHTML = '';
  for(i = 0; itemsInfo[0].length; i++) {
    renderItem(generateItem(itemsInfo[0][i]));
  }
});
//promotion
serviceItems[1].addEventListener('click', (evt) => {
  itemsBlock.innerHTML = '';
  for(i = 0; itemsInfo[1].length; i++) {
    renderItem(generateItem(itemsInfo[1][i]));
  }
});
//smm
serviceItems[2].addEventListener('click', (evt) => {
  itemsBlock.innerHTML = '';
  for(i = 0; itemsInfo[2].length; i++) {
    console.log(itemsInfo[2][i])
    renderItem(generateItem(itemsInfo[2][i]));
  }
});
//advertising
serviceItems[3].addEventListener('click', (evt) => {
  itemsBlock.innerHTML = '';
  for(i = 0; itemsInfo[3].length; i++) {
    console.log(itemsInfo[3][i])
    renderItem(generateItem(itemsInfo[3][i]));
  }
});
//messages
serviceItems[4].addEventListener('click', (evt) => {
  itemsBlock.innerHTML = '';
  for(i = 0; itemsInfo[4].length; i++) {
    console.log(itemsInfo[4][i])
    renderItem(generateItem(itemsInfo[4][i]));
  }
});
//marketer
serviceItems[5].addEventListener('click', (evt) => {
  itemsBlock.innerHTML = '';
  for(i = 0; itemsInfo[5].length; i++) {
    console.log(itemsInfo[5][i])
    renderItem(generateItem(itemsInfo[5][i]));
  }
});




generateStartingCards()
hightlightClickedItem()




