export default class Buttons {
  constructor(inputs, select, image, errors) {
    this.buttonSubmit = document.querySelector('.form__submit');
    this.buttonDownload = document.querySelector('.form__download');
    this.aHref = this.buttonDownload.querySelector('a');

    this.inputs = inputs;
    this.select = select;
    this.image = image;
    this.errors = errors;
  }

  checkValueListener() {
    this.buttonSubmit.addEventListener('click', (event) => {
      event.preventDefault();

      if (this.errors.checkValid) {
        const inputsValue = this.inputs.getValues();
        const selectValue = this.select.getValue();

        this.image.createImage({ ...inputsValue, ...selectValue });
      }
    });

    this.buttonDownload.addEventListener('click', async (event) => {
      event.preventDefault();

      if (this.image.url) {
        this.aHref.href = await this.image.downloadImage();
        this.aHref.download = 'postcard';

        this.aHref.onclick = function (event) {
          event.stopPropagation();
        };

        this.aHref.click();
      }
    });
  }
}
