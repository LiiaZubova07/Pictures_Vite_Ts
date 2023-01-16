const pictureSize = (imgSelector) => {
  const blocks = document.querySelectorAll(imgSelector);

  //мышь над блоком
  const showImg = (block) => {
    const img = block.querySelector('img');
    //somethimg.png => something-1.png
    img.src = img.src.slice(0, -4) + '-1.png';
    //скрыть лишние эл-ты
    block.querySelectorAll('p:not(.sizes-hit').forEach((p) => {
      p.style.display = 'none';
    });
  };

  //мышь выходит за пределы элемента
  const hideImg = (block) => {
    const img = block.querySelector('img');
    //somethimg-1.png => something.png
    img.src = img.src.slice(0, -6) + '.png';
    //скрыть лишние эл-ты
    block.querySelectorAll('p:not(.sizes-hit').forEach((p) => {
      p.style.display = 'block';
    });
  };

  blocks.forEach((block) => {
    block.addEventListener('mouseover', () => {
		showImg(block);
	 });
    block.addEventListener('mouseout', () => {
		hideImg(block);
	 });
  });


};

export default pictureSize;
