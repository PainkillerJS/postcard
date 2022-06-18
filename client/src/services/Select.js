export default class Select {
  constructor(errorModule) {
    this.select = document.querySelector('select');

    this.errorModule = errorModule;
  }

  checkValueListener() {
    this.select.addEventListener('change', ({ target }) => {
      const celebName = target.options[target.selectedIndex].dataset.title.replace(/\s/g, '-').toLowerCase();

      this.errorModule.isValidSelect = true;
      this.celebName = celebName;
    });
  }

  getValue() {
    return {
      holyday: this.select.value,
    };
  }
}
