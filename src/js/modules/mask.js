const mask = (selector) => {
  const setCursorPosition = (pos, elem) => {
    elem.focus();

    //полифил для старого браузера
    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      const range = elem.createTextRange();

      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
		range.select();
    }
  };

  const createMask = (event) => {
    const matrix = '+7 (___) ___ __ __';
    const i = 0;
    //получать все НЕ цифры, которые там есть
    const def = matrix.replace(/\D/g, '');
    const val = this.value.replace(/\D/g, '');

    if (def.length >= val.length) {
      val = def;
    }

    this.value = matrix.replace(/./g, (a) => {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
    });

    if (event.type === 'blur') {
      if (this.value.length == 2) {
        this.value = '';
      }
    } else {
      setCursorPosition(this.value.length, this);
    }
  };

  const inputs = document.querySelectorAll(selector);

  inputs.forEach(input =>{
input.addEventListener('input',createMask);
input.addEventListener('focus',createMask);
input.addEventListener('blur',createMask);
  })
};

export default mask;
