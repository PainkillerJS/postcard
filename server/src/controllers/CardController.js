import sharpService from '../services/SharpService.js';

import path from 'path';
import appRootPath from 'app-root-path';

const getPath = (...names) => path.join(appRootPath.toString(), 'src', ...names);

const namesPictures = {
  NY: '/NY.png',
  flowers: '/8march.png',
  bd: '/birthDay.png',
  it: '/ITday.png',
  mother: '/motherDay.png',
  manDay: '/mensDay.png',
  teacher: '/teacherDay.png',
  tank: '/23feb.png',
};

class CardController {
  async create(req, res) {
    const { holyday, name, surname } = req.body;

    await sharpService.createIMG(namesPictures[holyday], name, surname);

    res.status(200).json({
      url: 'http://localhost:5000/static/postcard.jpg',
    });
  }

  downloadCard(req, res) {
    res.download(getPath('userFiles', 'postcard.jpg'));
  }
}

export default new CardController();
