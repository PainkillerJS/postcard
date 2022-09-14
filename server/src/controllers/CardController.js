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

    const { id } = await sharpService.createIMG(namesPictures[holyday], name, surname);

    res.status(200).json({
      url: `http://localhost:5000/static/${id}.jpg`,
      id,
    });
  }

  downloadCard(req, res) {
    const { id } = req.query;

    res.download(getPath('userFiles', `${id}.jpg`));
  }
}

export default new CardController();
