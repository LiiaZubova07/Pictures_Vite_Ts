import modals from './modules/modals';
import sliders from './modules/sliders';
import forms from './modules/forms';

//когда вся DOM-структура загружена
window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  modals();
  sliders({
    slides: '.feedback-slider-item',
    dir: 'horizontal',
    prev: '.main-prev-btn',
    next: '.main-next-btn',
  });
  sliders({
    slides: '.main-slider-item',
    dir: 'vertical',
  });
  forms();
});
