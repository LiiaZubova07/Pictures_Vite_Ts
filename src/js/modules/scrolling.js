const scrolling = (upSelector) => {
  const upElem = document.querySelector(upSelector);

  const BREAKPOINT = 1650;

  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > BREAKPOINT) {
      upElem.classList.add('animated', 'fadeIn');
      upElem.classList.remove('fadeOut');
    } else {
      upElem.classList.add('fadeOut');
      upElem.classList.remove('fadeIn');
    }
  });

  //скролл с raf
  //ищу ссылки, начинающиеся с #
  const links = document.querySelectorAll('[href^="#"]');
  const speed = 0.5;

  links.forEach((link) => {
    link.addEventListener('click', function (event) {
      event.preventDefault();

      const widthTop = document.documentElement.scrollTop;
      let hash = this.hash;
      //получить верхние координаты
      const toBlock = document.querySelector(hash).getBoundingClientRect().top;
      let start = null;

      requestAnimationFrame(step);
      //
      function step(time) {
        //первый ли раз анимация запускается
        if (start === null) {
          start = time;
        }

        const progress = time - start;
        //количество пикселей, на которые нужно пролистать в течение этой операции
        const r =
          toBlock < 0
            ? Math.max(widthTop - progress / speed, widthTop + toBlock)
            : Math.min(widthTop + progress / speed, widthTop + toBlock);

        document.documentElement.scrollTo(0, r);

        if (r != widthTop + toBlock) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash;
        }
      }
    });
  });

  //   //плавный скролл
  //   const element = document.documentElement;
  //   const body = document.body;

  //   //подсчёт сколько нужно пролистать и как сделать
  //   const calcScroll = () => {
  //     upElem.addEventListener('click', function (event) {
  //       //какое расстояние пролистано
  //       let scrollTop = Math.round(body.scrollTop || element.scrollTop);

  //       if (this.hash !== '') {
  //         event.preventDefault();

  //         let hashElement = document.querySelector(this.hash);
  //         let hashElementTop = 0;

  //         while (hashElement.offsetParent) {
  //           //сколько пикселей до верхней границы родительского элемента
  //           hashElementTop += hashElement.offsetTop;
  //           //перебрать всех родителей, которые могут быть основой для позиционир данного эл-та
  //           hashElement = hashElement.offsetParent;
  //         }
  //         hashElementTop = Math.round(hashElementTop);
  //         smoothScroll(scrollTop, hashElementTop, this.hash);
  //       }
  //     });
  //   };

  //   //создать ф-ю перед вызовом calcScroll
  //   const smoothScroll = (from, to, hash) => {
  //     let timeInterval = 1;
  //     let prevScrollTop;
  //     let speed;

  //     //движение куда
  //     if (to > from) {
  //       speed = 30;
  //     } else {
  //       speed = -30;
  //     }

  //     //анимация
  //     let move = setInterval(function () {
  //       let scrollTop = Math.round(body.scrollTop || element.scrollTop);

  //       if (
  //         //пред анимация равна тому, что получили
  //         prevScrollTop === scrollTop ||
  //         (to > from && scrollTop >= to) ||
  //         (to < from && scrollTop <= to)
  //       ) {
  //         clearInterval(move);
  //         history.replaceState(
  //           history.state,
  //           document.title,
  //           location.href.replace(/#.*$/g, '') + hash
  //         );
  //       } else {
  //         //страница двигается с нужной скоростью
  //         body.scrollTop += speed;
  //         //страница двигается, вне зависимости от значения
  //         element.scrollTop += speed;
  //         //как изменяется значение
  //         prevScrollTop = scrollTop;
  //       }
  //     }, timeInterval);
  //   };

  //   calcScroll();
};

export default scrolling;
