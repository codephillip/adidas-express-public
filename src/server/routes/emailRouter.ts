import express, {Request, Response} from 'express';
import axios from 'axios';
import {emailBaseUrl, requestError} from "../utils/constants/stringUtils";

const router = express.Router();

process.env.API_VERSION = 'v1'
router.get(`/api/${process.env.API_VERSION}/emails`, async (req: Request, res: Response) => {
  // @ts-ignore
  axios.get(emailBaseUrl + req.path, req.headers)
    .then(response => {
      res.status(response.status).send(response.data);
    })
    .catch(error => {
      res.status(400).send({'message': requestError})
    })
});

router.get(`/api/${process.env.API_VERSION}/emails/:id`, async (req: Request, res: Response) => {
  // @ts-ignore
  axios.get(emailBaseUrl + req.path, req.headers)
    .then(response => {
      res.status(response.status).send(response.data);
    })
    .catch(error => {
      res.status(400).send({'message': requestError})
    })
});

router.post(`/api/${process.env.API_VERSION}/emails`, async (req: Request, res: Response) => {
  // @ts-ignore
  axios.post(emailBaseUrl + req.path, req.body, req.headers)
    .then(response => {
      res.status(response.status).send(response.data);
    })
    .catch(error => {
      res.status(400).send({'message': requestError})
    })
});

router.patch(`/api/${process.env.API_VERSION}/emails/:id`, async (req: Request, res: Response) => {
  // @ts-ignore
  axios.patch(emailBaseUrl + req.path, req.body, req.headers)
    .then(response => {
      res.status(response.status).send(response.data);
    })
    .catch(error => {
      res.status(400).send({'message': requestError})
    })
});

router.put(`/api/${process.env.API_VERSION}/emails/:id`, async (req: Request, res: Response) => {
  // @ts-ignore
  axios.put(emailBaseUrl + req.path, req.body, req.headers)
    .then(response => {
      res.status(response.status).send(response.data);
    })
    .catch(error => {
      res.status(400).send({'message': requestError})
    })
});

router.delete(`/api/${process.env.API_VERSION}/emails/:id`, async (req: Request, res: Response) => {
  // @ts-ignore
  axios.delete(emailBaseUrl + req.path, req.body, req.headers)
    .then(response => {
      res.status(response.status).send(response.data);
    })
    .catch(error => {
      res.status(400).send({'message': requestError})
    })
});

export {router as emailRouter};