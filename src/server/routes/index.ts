import express, {Request, Response} from 'express';

const router = express.Router();

router.get('/api/' + process.env.API_VERSION + '/emails', async (req: Request, res: Response) => {
  res.status(200).send("email service");
});

export {router as indexResourceRouter};
