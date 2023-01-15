const filter = () => {
  //добавляем элементы, с которыми будем работать
  const menu = document.querySelector('.portfolio-menu');
  const items = menu.querySelectorAll('li');
  const btnAll = menu.querySelector('.all');
  const btnLovers = menu.querySelector('.lovers');
  const btnChef = menu.querySelector('.chef');
  const btnGirl = menu.querySelector('.girl');
  const btnGuy = menu.querySelector('.guy');
  const btnGrandmother = menu.querySelector('.grandmother');
  const btnGrandfather = menu.querySelector('.grandfather');

  const wrapper = document.querySelector('.portfolio-wrapper');

  const markAll = wrapper.querySelectorAll('.all');
  const markGirl = wrapper.querySelectorAll('.girl');
  const markLovers = wrapper.querySelectorAll('.lovers');
  const markChef = wrapper.querySelectorAll('.chef');
  const markGuy = wrapper.querySelectorAll('.guy');

  const no = document.querySelector('.portfolio-no');

  //фильтрация элементов
  //скрыть ненужные элементы и показать нужные
  const typeFilter = (markType) => {
    markAll.forEach((mark) => {
      mark.style.display = 'none';
      mark.classList.remove('animated', 'fadeIn');
    });

    no.style.display = 'none';
    no.classList.remove('animated', 'fadeIn');

    if (markType) {
      markType.forEach((mark) => {
        mark.style.display = 'block';
        mark.classList.add('animated', 'fadeIn');
      });
    } else {
      no.style.display = 'block';
      no.classList.add('animated', 'fadeIn');
    }

    //  markType
    //    ? markType.forEach((mark) => {
    //        (mark.style.display = 'block'), mark.classList.add('animated', 'fadeIn');
    //      })
    //    : ((no.style.display = 'block'), no.classList.add('animated', 'fadeIn'));
  };

//   const btn = (btnName, markName) => {
//     btnName.addEventListener('click', () => {
//       typeFilter(markName);
//     });
//   };

//   btn(btnAll, markAll);
//   btn(btnLovers, markLovers);

  //используем кнопки
  btnAll.addEventListener('click', () => {
    typeFilter(markAll);
  });
  btnLovers.addEventListener('click', () => {
    typeFilter(markLovers);
  });

  btnChef.addEventListener('click', () => {
    typeFilter(markChef);
  });
  btnGirl.addEventListener('click', () => {
    typeFilter(markGirl);
  });
  btnGuy.addEventListener('click', () => {
    typeFilter(markGuy);
  });
  btnGrandmother.addEventListener('click', () => {
    typeFilter();
  });
  btnGrandfather.addEventListener('click', () => {
    typeFilter();
  });


  //меню, делегирование событий
menu.addEventListener('click', (e)=>{
let target = e.target;

if(target && target.tagName == 'LI'){
items.forEach(btn=> btn.classList.remove('active'));
target.classList.add('active');
}
})


};

export default filter;
