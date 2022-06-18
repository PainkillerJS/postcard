import { genderRequest } from '../packages/api/rest/postcard';

export default class RadioBtns {
  constructor(errorModule, select) {
    this.radioBtns = document.querySelectorAll('input[type="radio"]');

    this.select = select;
    this.errorModule = errorModule;
  }

  async #getGender(name) {
    const response = await genderRequest(name).then((data) => data.json());

    while (this.select.childElementCount > 1) {
      this.select.remove(this.select.lastElementChild);
    }

    response?.forEach((item) => {
      const option = document.createElement('option');

      option.value = item.id;
      option.dataset.title = item.title;
      option.textContent = item.title;
      this.select.appendChild(option);
    });
  }

  checkValueListener() {
    this.radioBtns.forEach((radio) =>
      radio.addEventListener('change', async ({ target }) => {
        this.gender = target.id;

        this.errorModule.isValidSex = this.gender === 'male' || this.gender === 'female';

        this.#getGender(this.gender);
      }),
    );
  }
}
