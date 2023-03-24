const qustionsBlockSelector = '.questions__list';
const qustionsItemSelector = '.questions__list-item';
const paragraphActiveClass = 'questions__list-paragraph_type_active';
const paragraph = document.querySelector('.qustions__list-paragraph')
const questionTitleSelector = '.questions__list-title';
const questionParagraphSelector = '.questions__list-paragraph';

let acc = document.querySelectorAll(".questions__list-item");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.closest('.questions__list-paragraph').classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


