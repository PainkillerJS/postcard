import genderService from '../services/GenderService.js';

class GenderController {
  async getGender(req, res) {
    const { gender } = req.query;
    const newData = await genderService.getGender(gender);

    res.status(200).json(newData);
  }
}

export default new GenderController();
