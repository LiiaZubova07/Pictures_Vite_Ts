// import checkNumInputs from "./checkNumInputs";

const forms = () => {
  const forms = document.querySelectorAll('form');
  const inputs = document.querySelectorAll('input');
  const uploads = document.querySelectorAll('[name="upload"]');

  //   checkNumInputs('input[name="user_phone"]');

  const message = {
    loading: 'Загрузка...',
    succes: 'Спасибо! Мы с Вами скоро свяжемся',
    failure: 'Что-то пошло не так',
    spinner: 'assets/img/spinner.gif',
    ok: 'assets/img/ok.png',
    fail: 'assets/img/fail.png',
  };

  //пути, по которым отправляем данные
  const path = {
    designer: 'assets/server.php',
    question: 'assets/question.php',
  };

  //запрос на сервер
  const postData = async (url, data) => {
    const res = await fetch(url, {
      method: 'POST',
      body: data,
    });

    return await res.text();
  };

  //функция очищает все инпуты
  const clearInputs = () => {
    inputs.forEach((input) => {
      input.value = '';
    });
    uploads.forEach((upload) => {
      upload.previousElementSibling.textContent = 'Файл не выбран';
    });
  };

  //   uploads.forEach((upload) => {
  //     upload.addEventListener('input', () => {
  //       console.log(upload.files[0]);
  //       let dots;
  //       const arr = upload.files[0].name.split('.');

  //       arr[0].length > 6 ? (dots = '...') : (dots = '.');
  //       //
  //       const name = arr[0].substring(0, 6) + dots + arr[1];
  //       upload.previousElementSibling.textContent = name;
  //     });
  //   });

  uploads.forEach((upload) => {
    upload.addEventListener('input', () => {
      const file = upload.files[0];
      console.log(file);

      // const fileName = file.name.split('.')[0];
      // const fileExt = file.name.split('.')[1];
      const [fileName, fileExt] = file.name.split('.');

      const dots = fileName.length > 6 ? '...' : '.';
      //
      const name = `${fileName.substring(0, 6)} ${dots} ${fileExt}`;

      upload.previousElementSibling.textContent = name;
    });
  });

  //перебор форм
  forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      //форма для сообщений выше
      const statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      form.parentNode.appendChild(statusMessage);

      //чтоб исчезало и не оставляло физического места
      form.classList.add('animated', 'fadeOutUp');
      setTimeout(() => {
        form.style.display = 'none';
      }, 400);

      //отображение статуса сообщения после отправки формы
      const statusImg = document.createElement('img');
      statusImg.setAttribute('src', message.spinner);
      statusImg.classList.add('animated', 'fadeInUp');
      statusMessage.appendChild(statusImg);

      //текстовое сообщение
      const textMessage = document.createElement('div');
      textMessage.textContent = message.loading;
      statusMessage.appendChild(textMessage);

      //сбор данных из формы
      const formData = new FormData(form);
      const api =
        form.closest('.popup-design') || form.classList.contains('calc_form')
          ? (api = path.designer)
          : (api = path.question);
      console.log(api);

      //formData отправляется на сервер
      postData(api, formData)
        .then((res) => {
          console.log(res);
          statusImg.setAttribute('src', message.ok);
          textMessage.textContent = message.succes;
        })
        .catch(() => {
          statusImg.setAttribute('src', message.fail);
          textMessage.textContent = message.failure;
        })
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMessage.remove();
            form.style.display = 'block';
            form.classList.remove('fadeOutUp');
            form.classList.add('fadeInUp');
          }, 5000);
        });
    });
  });
};

export default forms;
