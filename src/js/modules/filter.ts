export const filter = () => {
  //добавляем элементы, с которыми будем работать
  const menu = document.querySelector('.portfolio-menu') as HTMLElement;

  const items = menu.querySelectorAll('li') as NodeListOf<HTMLLIElement>;
  const btnAll = menu.querySelector('.all') as HTMLElement;
  const btnLovers = menu.querySelector('.lovers') as HTMLElement;
  const btnChef = menu.querySelector('.chef') as HTMLElement;
  const btnGirl = menu.querySelector('.girl') as HTMLElement;
  const btnGuy = menu.querySelector('.guy') as HTMLElement;
  const btnGrandmother = menu.querySelector('.grandmother') as HTMLElement;
  const btnGrandfather = menu.querySelector('.granddad') as HTMLElement;

  const wrapper = document.querySelector('.portfolio-wrapper') as HTMLElement;

  const markAll = wrapper.querySelectorAll('.all');
  const markGirl = wrapper.querySelectorAll('.girl');
  const markLovers = wrapper.querySelectorAll('.lovers');
  const markChef = wrapper.querySelectorAll('.chef');
  const markGuy = wrapper.querySelectorAll('.guy');

  const no = document.querySelector('.portfolio-no') as HTMLElement;

  //фильтрация элементов
  //скрыть ненужные элементы и показать нужные
  const typeFilter = (markType:any) => {
    markAll.forEach((mark) => {
      mark.style.display = 'none';
      mark.classList.remove('animated', 'fadeIn');
    });

    no.style.display = 'none';
    no.classList.remove('animated', 'fadeIn');

    if (markType.length > 1) {
      markType.forEach((mark: HTMLElement) => {
        mark.style.display = 'block';
        mark.classList.add('animated', 'fadeIn');
      });
    } else {
      no.style.display = 'block';
      no.classList.add('animated', 'fadeIn');
    }
  };

  const btn = (btnName:HTMLElement, markName:NodeListOf<Element> | string) => {
    btnName.addEventListener('click', () => {
      typeFilter(markName);
    });
  };

  //используем кнопки
  btn(btnAll, markAll);
  btn(btnLovers, markLovers);
  btn(btnChef, markChef);
  btn(btnGirl, markGirl);
  btn(btnGuy, markGuy);
  btn(btnGrandmother, '');
  btn(btnGrandfather, '');

  //   btnAll.addEventListener('click', () => {
  //     typeFilter(markAll);
  //   });
  //   btnLovers.addEventListener('click', () => {
  //     typeFilter(markLovers);
  //   });
  //   btnChef.addEventListener('click', () => {
  //     typeFilter(markChef);
  //   });
  //   btnGirl.addEventListener('click', () => {
  //     typeFilter(markGirl);
  //   });
  //   btnGuy.addEventListener('click', () => {
  //     typeFilter(markGuy);
  //   });
  //   btnGrandmother.addEventListener('click', () => {
  //     typeFilter();
  //   });
  //   btnGrandfather.addEventListener('click', () => {
  //     typeFilter();
  //   });

  //меню, делегирование событий
  menu.addEventListener('click', (e: any) => {
    const target = e.target;

    if (target && target.tagName == 'LI') {
      items.forEach((btn) => btn.classList.remove('active'));
      target.classList.add('active');
    }
  });
};

export default filter;
