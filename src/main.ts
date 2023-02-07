import modals from './js/modules/modals';
// import sliders from './modules/sliders';
// import forms from './modules/forms';
import mask from './js/modules/mask';
// import checkTextInputs from './modules/checkTextInputs';
// import showMoreStyles from './modules/showMoreStyles';
// import calc from './modules/calc';
// import filter from './modules/filter';
// import pictureSize from './modules/pictureSize';
// import accordion from './modules/accordion';
// import burger from './modules/burger';
// import scrolling from './modules/scrolling';
// import drop from './modules/drop';

//когда вся DOM-структура загружена
window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  modals();

//   sliders({
//     slides: '.feedback-slider-item',
//     dir: 'horizontal',
//     prev: '.main-prev-btn',
//     next: '.main-next-btn',
//   });

//   sliders({
//     slides: '.main-slider-item',
//     dir: 'vertical',
//   });

//   forms();

  mask('[name="phone"]');

//   checkTextInputs('[name="name"]');
//   checkTextInputs('[name="message"]');

//   showMoreStyles({
//     trigger: '.button-styles',
//     wrapper: '#styles .row',
//   });

//   calc({
//     size: '#size',
//     material: '#material',
//     options: '#options',
//     promocode: '.promocode',
//     result: '.calc-price',
//   });

//   filter();

//   pictureSize('.sizes-block');

//   accordion({
//     triggersSelector: '.accordion-heading',
//   });

//   burger({
//     menuSelector: '.burger-menu',
//     burgerSelector: '.burger',
//   });

//   scrolling('.pageup');

//   drop();
});
