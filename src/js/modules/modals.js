//first task
//чтобы экспортировать код, который здесь есть
const modals = () => {
  function bindModal({ triggersSelector, modalSelector, closeSelector, destroy = false }) {
    //на несколько одинаковых элементов повесить одни и те же функции
    const triggers = document.querySelectorAll(triggersSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);
    const windows = document.querySelectorAll('[data-modal]');
    const scroll = calcScroll();

    const closeModal = () => {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    };

    triggers.forEach((item) => {
      item.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault();
        }
		  //если аргумент true, то условие вполнится
        if (destroy) {
          item.remove();
        }

        windows.forEach((window) => {
          window.style.display = 'none';
        });
        //модальное окно показывается на странице
        modal.style.display = 'block';
        //когда модальное окно открыто, то скролится только модальное окно
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scroll}px`;

        const input = modal.querySelector('input');
        if (input) input.focus();
      });
    });

    //модальное окно закрывается при нажатии на крестик
    close.addEventListener('click', () => {
      windows.forEach((window) => {
        window.style.display = 'none';
      });
      closeModal();
      document.body.style.marginRight = `0`;
    });

    //чтоб мод окно закрывалось при нажатии вне модального окна
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        windows.forEach((window) => {
          window.style.display = 'none';
        });
        closeModal();
        document.body.style.marginRight = `0px`;
      }
    });

    //модальное окно закрывается при нажатии на escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal();
        document.body.style.marginRight = `0px`;
      }
    });
  }

  const showModalByTime = (selector, time) => {
    setTimeout(() => {
      const display = '';

      document.querySelectorAll('[data-modal]').forEach((item) => {
        //если модальное окно показано пользователю, то делаем...
        if (getComputedStyle(item).display !== 'none') {
          display = 'block';
        }
      });

		//если ни одно модальное окно не показывается, показываем окно, которое нужно
      if (!display) {
        document.querySelector(selector).style.display = 'block';
        document.body.style.overflow = 'hidden';
		  const scroll = calcScroll();
		  document.body.style.marginRight = `${scroll}px`;
      }
    }, time);
  };

  function calcScroll() {
    const div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    //вычислить размер прокрутки
    const scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
  }

  bindModal({
    triggersSelector: '.button-design',
    modalSelector: '.popup-design',
    closeSelector: '.popup-design .popup-close',
  });

  bindModal({
    triggersSelector: '.button-consultation',
    modalSelector: '.popup-consultation',
    closeSelector: '.popup-consultation .popup-close',
  });

   //  showModalByTime('.popup-consultation', 5000);
};

export default modals;
