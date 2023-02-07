export interface IAccordion {
  triggersSelector: string;
}

const accordion = ({ triggersSelector }: IAccordion) => {
  const btns = document.querySelectorAll(triggersSelector) as NodeListOf<HTMLElement>;

  btns.forEach((btn: HTMLElement ) => {
    btn.addEventListener('click', function () {
      this.classList.toggle('active-style');

      (this.nextElementSibling as HTMLElement).classList.toggle('active-content');

      if (this.classList.contains('active-style')) {

			(this.nextElementSibling as HTMLElement).style.maxHeight = `${(this.nextElementSibling as HTMLElement).scrollHeight + 80}px`;

      } else {
			(this.nextElementSibling as HTMLElement).style.maxHeight = '0';
      }
    });
  });
};

export default accordion;
