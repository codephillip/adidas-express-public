import express from 'express';
import {json} from 'body-parser';
import {indexResourceRouter} from './routes';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(indexResourceRouter);

app.all('*', async (req: any, res: any) => {
  throw new Error();
});

export {app};
