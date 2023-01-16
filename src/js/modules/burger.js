const burger = ({ menuSelector, burgerSelector }) => {
  const menuElem = document.querySelector(menuSelector);
  const burgerElem = document.querySelector(burgerSelector);

  //скрыть меню вручную
  menuElem.style.display = 'none';

  //отслеживание действий, которые происходят на бургере
  burgerElem.addEventListener('click', () => {
    if (menuElem.style.display == 'none' && window.screen.availWidth < 993) {
      menuElem.style.display = 'block';
    } else {
      menuElem.style.display = 'none';
    }
  });
};

export default burger;
