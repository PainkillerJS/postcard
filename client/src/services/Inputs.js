export default class Inputs {
  constructor(errorInstance, blockOfError) {
    this.inputName = document.getElementById('name');
    this.inputLastname = document.getElementById('surname');

    this.blockOfErrorName = blockOfError.blockOfErrorName;
    this.blockOfErrorLastname = blockOfError.blockOfErrorLastname;

    this.errorInstance = errorInstance;
  }

  checkValueListener() {
    this.inputName?.addEventListener('input', ({ target }) => {
      const isValidValue = target.value.match(/^[А-Я][а-яё]+?$/);

      this.errorInstance.isValidName = !!isValidValue;

      this.inputName.style.borderColor = isValidValue ? '#eee' : 'red';
      this.blockOfErrorName.style.opacity = isValidValue ? '0' : '1';
    });

    this.inputLastname?.addEventListener('input', ({ target }) => {
      const isValidValue = target.value.match(/^[А-Я][а-яё]+([-][А-Я][а-яё]+)?$/);

      this.errorInstance.isValidSurname = !!isValidValue;

      this.inputLastname.style.borderColor = isValidValue ? '#eee' : 'red';
      this.blockOfErrorLastname.style.opacity = isValidValue ? '0' : '1';
    });
  }

  getValues() {
    return {
      name: this.inputName.value,
      surname: this.inputLastname.value,
    };
  }
}
