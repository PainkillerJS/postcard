import holidaysList from '../constants/holidaysList.js';

class GenderService {
  checkGender(item, gender) {
    return item.gender === gender || item.gender === 'any';
  }

  async getGender(gender) {
    return holidaysList.filter((item) => this.checkGender(item, gender));
  }
}

export default new GenderService();
