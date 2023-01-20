const drop = () => {
  //drag *
  //dragend *
  //dragenter - объект над dropArea
  //dragexit *
  //dragleave - объект за пределами dropArea
  //dragover - объект зависает над вкщзФкуф
  //dragstart *
  //drop - объект отправлен в dropArea

  // с * срабатывает на элементе, который перетаскиваем, не сработают в нашей задаче

  const fileInputs = document.querySelectorAll('[name="upload"]');

  const preventDefaults = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const highlight = (item) => {
    item.closest('.file_upload').style.border = '5px solid yellow';
    item.closest('.file_upload').style.backgroundColor = 'rgba(0,0,0, 0.7';
  };
  const unHighlight = (item) => {
    item.closest('.file_upload').style.border = 'none';
    item.closest('.file_upload').style.backgroundColor = '#ededed';
  };

  //массив событий
  ['dragenter', 'dragleave', 'dragover', 'drop'].forEach((eventName) => {
    fileInputs.forEach((input) => {
      input.addEventListener(eventName, preventDefaults, false);
    });
  });

  //события разукрашивают область, где картинка
  ['dragenter', 'dragover'].forEach((eventName) => {
    fileInputs.forEach((input) => {
      input.addEventListener(eventName, () => highlight(input), false);
    });
  });
  //убирается цвет
  ['dragleave', 'drop'].forEach((eventName) => {
    fileInputs.forEach((input) => {
      input.addEventListener(eventName, () => unHighlight(input), false);
    });
  });
};

export default drop;
