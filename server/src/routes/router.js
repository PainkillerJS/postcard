import sharp from 'sharp';
import { Router } from 'express';

import cardController from '../controllers/CardController.js';
import genderController from '../controllers/GenderController.js';

const router = Router();

router.get('/gender', genderController.getGender);
router.get('/downloadCard', cardController.downloadCard);
router.post('/create', cardController.create);

export default router;
