import { createImageRequest, downloadImageRequest } from '../packages/api/rest/postcard';

export default class Image {
  constructor() {
    this.containerImg = document.querySelector('.postcard__content');
  }

  #clearChildrens() {
    for (let index = 0; index < this.containerImg.children.length; index++) {
      this.containerImg.removeChild(this.containerImg.children[index]);
    }
  }

  #showImg(url) {
    this.#clearChildrens();

    const img = document.createElement('img');

    img.src = url;
    img.style.height = '100%';
    img.style.width = '100%';

    this.containerImg.appendChild(img);
  }

  async downloadImage() {
    const blob = await downloadImageRequest(this.id).then((data) => data.blob());
    const urlDownload = URL.createObjectURL(blob);

    return urlDownload;
  }

  async createImage(data) {
    const { url, id } = await createImageRequest(data).then((data) => data.json());

    this.url = url;
    this.id = id;

    this.#showImg(this.url);
  }
}
