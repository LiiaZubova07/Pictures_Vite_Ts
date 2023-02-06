//first task
//чтобы экспортировать код, который здесь есть
interface IBindModals {
  triggersSelector: string;
  modalSelector: string;
  closeSelector: string;
  destroy?: boolean;
}

export const modals = () => {
  let btnPressed = false;

  function bindModal({
    triggersSelector,
    modalSelector,
    closeSelector,
    destroy = false,
  }: IBindModals) {
    //на несколько одинаковых элементов повесить одни и те же функции
    const triggers = document.querySelectorAll(triggersSelector) as NodeListOf<Element>;
    const modal = document.querySelector(modalSelector) as HTMLElement;
    const close = document.querySelector(closeSelector) as HTMLElement;
    const windows: NodeListOf<HTMLElement> = document.querySelectorAll(
      '[data-modal]'
    ) as NodeListOf<HTMLElement>;
    const scroll = calcScroll();

    const closeModal = () => {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    };

    triggers.forEach((item) => {
      item.addEventListener('click', (e: Event) => {
        if (e.target) {
          e.preventDefault();
        }
        //нажал ли пользователь хоть какую-то кнопку
        btnPressed = true;

        //если аргумент true, то условие вполнится
        if (destroy) {
          item.remove();
        }

        windows.forEach((window) => {
          window.style.display = 'none';
          window.classList.add('animated', 'fadeIn');
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
        document.body.style.marginRight = `0`;
      }
    });

    //модальное окно закрывается при нажатии на escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal();
        document.body.style.marginRight = `0`;
      }
    });
  }

  const showModalByTime = (selector: string, time: number) => {
    setTimeout(() => {
      let display = false;

      document.querySelectorAll('[data-modal]').forEach((item) => {
        //если модальное окно показано пользователю, то делаем...
        if (getComputedStyle(item).display !== 'none') {
          display:boolean = 'block';
        }
      });

      //если ни одно модальное окно не показывается, показываем окно, которое нужно
      if (!display) {
        (document.querySelector(selector) as HTMLElement).style.display = 'block';
        document.body.style.overflow = 'hidden';
        const scroll = calcScroll();
        document.body.style.marginRight = `${scroll}px`;
      }
    }, time);
  };

  const calcScroll = () => {
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
  };

  const openByScroll = (selector: string) => {
    window.addEventListener('scroll', () => {
      //узнать сколько пикселей пользователь отлистал
      // + контент, который виден пользователю
      // + определить долистал ли пользователь страницу до конца
      if (
        !btnPressed &&
        window.pageYOffset + document.documentElement.clientHeight >=
          document.documentElement.scrollHeight
      ) {
        //вызвать событие вручную
        (document.querySelector(selector) as HTMLElement).click();
      }
    });
  };

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

  bindModal({
    triggersSelector: '.fixed-gift',
    modalSelector: '.popup-gift',
    closeSelector: '.popup-gift .popup-close',
    destroy: true,
  });
  openByScroll('.fixed-gift');

  // showModalByTime('.popup-consultation', 5000);
};

export default modals;
