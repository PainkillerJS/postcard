export default class Error {
  constructor() {
    this.isValidName = false;
    this.isValidSurname = false;
    this.isValidSelect = false;
  }

  checkValid() {
    return this.isValidSurname && this.isValidSelect && this.isValidName;
  }
}
