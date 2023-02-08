const pictureSize = (imgSelector: string) => {
  const blocks = document.querySelectorAll(
    imgSelector
  ) as NodeListOf<HTMLElement>;

  //мышь над блоком
  const showImg = (block: HTMLElement) => {
    const img = block.querySelector("img") as HTMLImageElement;
    //somethimg.png => something-1.png
    (img.src as string) = img.src.slice(0, -4) + "-1.png";
    //скрыть лишние эл-ты
    block.querySelectorAll("p:not(.sizes-hit").forEach((p) => {
      (p as HTMLElement).style.display= "none";
    });
  };

  //мышь выходит за пределы элемента
  const hideImg = (block: HTMLElement) => {
    const img = block.querySelector("img") as HTMLImageElement;
    //somethimg-1.png => something.png
    img.src = img.src.slice(0, -6) + ".png";

    //скрыть лишние эл-ты
    block.querySelectorAll("p:not(.sizes-hit").forEach((p) => {
      (p as HTMLElement).style.display = "block";
    });
  };

  blocks.forEach((block) => {
    block.addEventListener("mouseover", () => {
      showImg(block);
    });
    block.addEventListener("mouseout", () => {
      hideImg(block);
    });
  });
};

export default pictureSize;
