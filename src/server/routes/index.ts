import express, {Request, Response} from 'express';
import axios from 'axios';
import {emailBaseUrl, requestError, subscriptionBaseUrl} from "../utils/constants/stringUtils";

const router = express.Router();

router.get('/api/' + process.env.API_VERSION + '/emails', async (req: Request, res: Response) => {
  const config = req.headers
  // @ts-ignore
  axios.get(emailBaseUrl + req.path, req.headers)
    .then(response => {
      res.status(response.status).send(response.data);
    })
    .catch(error => {
      res.status(400).send({'message': requestError})
    })
});

router.post('/api/' + process.env.API_VERSION + '/emails', async (req: Request, res: Response) => {
  // @ts-ignore
  axios.post(emailBaseUrl + req.path, req.body, req.headers)
    .then(response => {
      res.status(response.status).send(response.data);
    })
    .catch(error => {
      res.status(400).send({'message': requestError})
    })
});

router.get('/api/' + process.env.API_VERSION + '/subscriptions', async (req: Request, res: Response) => {
  const config = req.headers
  // @ts-ignore
  axios.get(subscriptionBaseUrl + req.path, req.headers)
    .then(response => {
      res.status(response.status).send(response.data);
    })
    .catch(error => {
      res.status(400).send({'message': requestError})
    })
});

router.post('/api/' + process.env.API_VERSION + '/subscriptions', async (req: Request, res: Response) => {
  // @ts-ignore
  axios.post(subscriptionBaseUrl + req.path, req.body, req.headers)
    .then(response => {
      res.status(response.status).send(response.data);
    })
    .catch(error => {
      res.status(400).send({'message': requestError})
    })
});

router.get('/api/' + process.env.API_VERSION + '/campaigns', async (req: Request, res: Response) => {
  const config = req.headers
  // @ts-ignore
  axios.get(subscriptionBaseUrl + req.path, req.headers)
    .then(response => {
      res.status(response.status).send(response.data);
    })
    .catch(error => {
      res.status(400).send({'message': requestError})
    })
});

router.post('/api/' + process.env.API_VERSION + '/campaigns', async (req: Request, res: Response) => {
  // @ts-ignore
  axios.post(subscriptionBaseUrl + req.path, req.body, req.headers)
    .then(response => {
      res.status(response.status).send(response.data);
    })
    .catch(error => {
      res.status(400).send({'message': requestError})
    })
});

export {router as indexResourceRouter};
