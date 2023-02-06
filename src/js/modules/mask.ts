const mask = (selector:string) => {
  const setCursorPosition = (pos:number, elem:HTMLInputElement) => {
    elem.focus();

    //полифил для старого браузера
    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else if ((elem as any).createTextRange) {
      const range = (elem as any).createTextRange();

      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };

  function createMask(event:Event) {
    const matrix = '+7 (___) ___ __ __';
    let i:number = 0;
    //получать все НЕ цифры, которые там есть
    let def = matrix.replace(/\D/g, '');
    let val:string = this.value.replace(/\D/g, '');

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
  }

  const inputs = document.querySelectorAll(selector) as NodeListOf<Element>;

  inputs.forEach((input) => {
    input.addEventListener('input', createMask);
    input.addEventListener('focus', createMask);
    input.addEventListener('blur', createMask);
  });
};

export default mask;
