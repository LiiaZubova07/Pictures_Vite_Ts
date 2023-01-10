//значение в виде строки, селекторы отвечающие за кнопки
const sliders = ({ slides, dir, prev, next }) => {
  //показывается первый слайд на странице
  let slideIndex = 1;
  let paused = false;
  //создание элементов
  const items = document.querySelectorAll(slides);

  //функция, перемещающая slideIndex
  const showSlides = (n) => {
    if (n > items.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = items.length;
    }

    //скрыьб другие слайды, показать текущий
    items.forEach((item) => {
      item.classList.add('animated');
      item.style.display = 'none';
    });

    //чтоб слайд начинался с 1, а не с 0
    items[slideIndex - 1].style.display = 'block';
  };

  //инициализация
  showSlides(slideIndex);

  //функционал слайдера
  //когда кликаем на определённые элементы (вперёд/назад)
  const plusSlides = (n) => {
    showSlides((slideIndex += n));
  };

  //не всегда эл-ты посажены на странице
  //если подозреваем ошибки, используем
  //чтоб не обрушить все скрипты
  try {
    const prevBtn = document.querySelector(prev);
    const nextBtn = document.querySelector(next);

    prevBtn.addEventListener('click', () => {
      plusSlides(-1);
      //когда перемещаемся влево, добавляем слайд вправо
      items[slideIndex - 1].classList.remove('slideInLeft');
      items[slideIndex - 1].classList.add('slideInRight');
    });
    nextBtn.addEventListener('click', () => {
      plusSlides(1);
      //когда перемещаемся вправо, добавляем слайд влево
      items[slideIndex - 1].classList.remove('slideInRight');
      items[slideIndex - 1].classList.add('slideInLeft');
    });
  } catch (e) {}

  const activateAnimation = () => {
    //вертикальный слайдер
    if (dir === 'vertical') {
      paused = setInterval(() => {
        plusSlides(1);
        items[slideIndex - 1].classList.add('slideInDown');
      }, 3000);
    } else {
      paused = setInterval(() => {
        plusSlides(1);
        items[slideIndex - 1].classList.remove('slideInRight');
        items[slideIndex - 1].classList.add('slideInLeft');
      }, 3000);
    }
  };

  activateAnimation();

  //чтоб при наведении мышки на слайдер, он не переключался
  items[0].parentNode.addEventListener('mouseenter', () => {
    clearInterval(paused);
  });
  items[0].parentNode.addEventListener('mouseleave', () => {
    activateAnimation();
  });
};

export default sliders;
