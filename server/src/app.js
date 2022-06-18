import express from 'express';
import cors from 'cors';

import router from './routes/router.js';

const app = express();

const PORT = 5000;

app.use('/static', express.static('./src/userFiles'));

app.use(cors());
app.use(express.json());
app.use('/assets', express.static('./src/assets'));
app.use('/api', router);

app.listen(PORT, () => {
  console.log('Server on http://localhost:' + PORT);
});
