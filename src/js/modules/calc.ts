interface ICalc {
  size: string;
  material: string;
  options: string;
  promocode: string;
  result: string;
}

export const calc = ({ size, material, options, promocode, result }: ICalc) => {
  const sizeBlock = document.querySelector(size) as HTMLInputElement;
  const materialBlock = document.querySelector(material) as HTMLInputElement;
  const optionsBlock = document.querySelector(options) as HTMLInputElement;
  const promocodeBlock = document.querySelector(promocode) as HTMLInputElement;
  const resultBlock = document.querySelector(result) as HTMLElement;

  //считает сумму
  const calcFunc = () => {
    const sum:any = Math.round(
      Number(sizeBlock.value) * Number(materialBlock.value) + Number(optionsBlock.value)
    );

    //проверить или 1 селект не заполнен или второй не заполнен
    if (sizeBlock.value == '' || materialBlock.value == '') {
      resultBlock.textContent = 'Пожалуйста, выберите размер и материал картины';
    } else if (promocodeBlock.value == 'IWANTPOPART') {
      resultBlock.textContent
      resultBlock.textContent = sum;
    }
  };
  //
  sizeBlock.addEventListener('change', calcFunc);
  materialBlock.addEventListener('change', calcFunc);
  optionsBlock.addEventListener('change', calcFunc);
  promocodeBlock.addEventListener('input', calcFunc);
};

export default calc;
