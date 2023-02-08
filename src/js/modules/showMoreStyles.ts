import { getResource } from "../services/requests";

interface IShow {
  trigger: string;
  wrapper: string;
}
interface IResponce {
  src: string;
  title: string;
  link: string;
}

const showMoreStyles = ({ trigger, wrapper }: IShow) => {
  const btn = document.querySelector(trigger) as HTMLElement;

  //анимации
  btn.addEventListener("click", function () {
    getResource("assets/db.json")
      .then((res) => createCards(res.styles))
      .catch((error) => console.log(error));

    this.remove();
  });

  function createCards(responce: any) {
    responce.forEach(({ src, title, link }: IResponce) => {

      const card = document.createElement("div") as HTMLElement;

      card.classList.add(
        "animated",
        "fadeInUp",
        "col-sm-3",
        "col-sm-offset-0",
        "col-xs-10",
        "col-xs-offset-1"
      );

      card.innerHTML = `
		<div class='styles-block'>
			<img src=${src} alt='style'>
			<h4>${title}</h4>
			<a href=${link}>Подробнее</a>
		</div>
	`;

      (document.querySelector(wrapper as string) as HTMLElement).appendChild(card);
    });
  }
};
export default showMoreStyles;
