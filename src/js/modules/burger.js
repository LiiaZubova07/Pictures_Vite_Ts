const burger = ({ menuSelector, burgerSelector }) => {
  const menuElem = document.querySelector(menuSelector);
  const burgerElem = document.querySelector(burgerSelector);

  const BREAKPOINT = 992;

  //скрыть меню вручную
  menuElem.style.display = 'none';

  //отслеживание действий, которые происходят на бургере
  burgerElem.addEventListener('click', () => {
    if (menuElem.style.display == 'none' && window.screen.availWidth <= BREAKPOINT) {
      menuElem.style.display = 'block';
    } else {
      menuElem.style.display = 'none';
    }
  });

  //отслеживание изменения размеров пользователем
  window.addEventListener('resize', () => {
    if (window.screen.availWidth > BREAKPOINT) {
      menuElem.style.display = 'none';
    }
  });
};

export default burger;
