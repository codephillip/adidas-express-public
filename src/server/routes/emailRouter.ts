import express, {Request, Response} from 'express';
import axios from 'axios';
import {emailBaseUrl, requestError} from '../utils/constants/stringUtils';
import {requireAuth} from '@adidastest-phillip/common'

const router = express.Router();

router.get([`/api/${process.env.API_VERSION}/emails/:id`, `/api/${process.env.API_VERSION}/emails`], requireAuth, async (req: Request, res: Response) => {
  // @ts-ignore
  axios.get(emailBaseUrl + req.path, req.headers)
    .then(response => res.status(response.status).send(response.data))
    .catch(error => res.status(error.response.status).send(error.response.data))
});

router.post(`/api/${process.env.API_VERSION}/emails`, requireAuth, async (req: Request, res: Response) => {
  // @ts-ignore
  axios.post(emailBaseUrl + req.path, req.body, req.headers)
    .then(response => res.status(response.status).send(response.data))
    .catch(error => res.status(error.response.status).send(error.response.data))
});

router.patch(`/api/${process.env.API_VERSION}/emails/:id`, requireAuth, async (req: Request, res: Response) => {
  // @ts-ignore
  axios.patch(emailBaseUrl + req.path, req.body, req.headers)
    .then(response => res.status(response.status).send(response.data))
    .catch(error => res.status(error.response.status).send(error.response.data))
});

router.put(`/api/${process.env.API_VERSION}/emails/:id`, requireAuth, async (req: Request, res: Response) => {
  // @ts-ignore
  axios.put(emailBaseUrl + req.path, req.body, req.headers)
    .then(response => res.status(response.status).send(response.data))
    .catch(error => res.status(error.response.status).send(error.response.data))
});

router.delete(`/api/${process.env.API_VERSION}/emails/:id`, requireAuth, async (req: Request, res: Response) => {
  // @ts-ignore
  axios.delete(emailBaseUrl + req.path, req.body, req.headers)
    .then(response => res.status(response.status).send(response.data))
    .catch(error => res.status(error.response.status).send(error.response.data))
});

export {router as emailRouter};
