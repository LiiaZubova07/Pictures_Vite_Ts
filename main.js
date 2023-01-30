import modals from '/src/js/modules/modals';
import sliders from '/src/js/modules/sliders';
import forms from '/src/js/modules/forms';
import mask from '/src/js/modules/mask';
import checkTextInputs from '/src/js/modules/checkTextInputs';
import showMoreStyles from '/src/js/modules/showMoreStyles';
import calc from '/src/js/modules/calc';
import filter from '/src/js/modules/filter';
import pictureSize from '/src/js/modules/pictureSize';
import accordion from '/src/js/modules/accordion';
import burger from '/src/js/modules/burger';
import scrolling from '/src/js/modules/scrolling';

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

  mask('[name="phone"]');

  checkTextInputs('[name="name"]');
  checkTextInputs('[name="message"]');

  showMoreStyles({
    trigger: '.button-styles',
    wrapper: '#styles .row',
  });

  calc({
    size: '#size',
    material: '#material',
    options: '#options',
    promocode: '.promocode',
    result: '.calc-price',
  });

  filter();

  pictureSize('.sizes-block');

  accordion({
    triggersSelector: '.accordion-heading',
  });

  burger({
    menuSelector: '.burger-menu',
    burgerSelector: '.burger',
  });

  scrolling('.pageup');
});
