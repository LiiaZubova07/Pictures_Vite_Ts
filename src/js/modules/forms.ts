// import checkNumInputs from "./checkNumInputs";
import { postData } from '../services/requests';

const forms = () => {
  const forms = document.querySelectorAll('form') as NodeListOf<HTMLFormElement>;
  const inputs = document.querySelectorAll('input') as NodeListOf<HTMLInputElement>;
  const uploads: NodeListOf<HTMLFormElement> = document.querySelectorAll(
    '[name="upload"]'
  ) as NodeListOf<HTMLFormElement>;

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

  //функция очищает все инпуты
  const clearInputs = () => {
    inputs.forEach((input) => {
      input.value = '';
    });
    uploads.forEach((upload) => {
      // @ts-ignore-next-line
      upload.previousElementSibling.textContent = 'Файл не выбран';
    });
  };

  uploads.forEach((upload) => {
    upload.addEventListener('input', () => {
      const file = upload.files[0];
      console.log(file);

      const [fileName, fileExt] = file.name.split('.');

      const dots = fileName.length > 6 ? '...' : '.';
      //
      const name = `${fileName.substring(0, 6)} ${dots} ${fileExt}`;
      // @ts-ignore-next-line
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
      (form.parentNode as ParentNode).appendChild(statusMessage);

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
		
      const api: string =
        form.closest('.popup-design') || form.classList.contains('calc_form')
          ? path.designer
          : path.question;
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
