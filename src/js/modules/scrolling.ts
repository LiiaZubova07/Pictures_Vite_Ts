const scrolling = (upSelector:string) => {
  const upElem = document.querySelector(upSelector) as HTMLElement;

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

  const links = document.querySelectorAll('[href^="#"]');

  links.forEach((link) => {
    const href = link.getAttribute('href');
    const scrolledElement = href === '#' ? null : document.querySelector(href as string);

    link.addEventListener('click', (event) => {
      event.preventDefault();
      (scrolledElement as HTMLElement).scrollIntoView({ behavior: 'smooth' });
    });
  });

};

export default scrolling;
