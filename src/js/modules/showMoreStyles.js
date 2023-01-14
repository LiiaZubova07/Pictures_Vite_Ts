import { getResource } from '../services/requests';

const showMoreStyles = (trigger, wrapper) => {
   const btn = document.querySelector(trigger);

  //анимации
  //   cards.forEach((card) => {
  //     card.classList.add('animated', 'fadeInUp');
  //   });

  //   btn.addEventListener('click', () => {
  //     cards.forEach((card) => {
  //       card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
  //       card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
  //     });
  // 	//  btn.style.display='none';
  // 	 btn.remove();
  //   });

  btn.addEventListener('click', () => {
    getResource('http://localhost/dist/');
    then((res) => console.console.log(res));
  });

  const createCards = (responce) => {
    responce.forEach((item) => {
      const card = document.createElement('div');

      card.classList.add(
        'animated',
        'fadeInUp',
        'col-sm-3',
        'col-sm-offset-0',
        'col-xs-10',
        'col-xs-offset-1'
      );

      card.innerHTML = `
		<div class='styles-block'>
			<img src=${item.src} alt='style'>
			<h4>${item.title}</h4>
			<a href=${item.src}>Подробнее</a>
		</div>
	`;

	document.querySelector(wrapper).appendChild(card);
    });
  };
};
export default showMoreStyles;
