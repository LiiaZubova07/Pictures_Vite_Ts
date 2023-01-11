// import checkNumInputs from "./checkNumInputs";

const forms = () => {
  const forms = document.querySelectorAll('form');
  const inputs = document.querySelectorAll('input');

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
  };

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
      let api;
      form.closest('.popup-design') ? (api = path.designer) : (api = path.question);
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
          }, 5000);
        });
    });
  });
};

export default forms;
