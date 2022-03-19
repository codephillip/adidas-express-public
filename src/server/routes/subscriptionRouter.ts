import express, {Request, Response} from 'express';
import axios from 'axios';
import {emailBaseUrl, requestError, subscriptionBaseUrl} from '../utils/constants/stringUtils';
import {requireAuth} from '@adidastest-phillip/common';

const router = express.Router();

router.get([`/api/${process.env.API_VERSION}/subscriptions/:id`, `/api/${process.env.API_VERSION}/subscriptions`], requireAuth, async (req: Request, res: Response) => {
  // @ts-ignore
  axios.get(subscriptionBaseUrl + req.path, req.headers)
    .then(response => res.status(response.status).send(response.data))
    .catch(error => res.status(400).send({'message': requestError}))
});

router.post(`/api/${process.env.API_VERSION}/subscriptions`, async (req: Request, res: Response) => {
  // @ts-ignore
  axios.post(subscriptionBaseUrl + req.path, req.body, req.headers)
    .then(response => res.status(response.status).send(response.data))
    .catch(error => res.status(400).send({'message': requestError}))
});

router.put(`/api/${process.env.API_VERSION}/subscriptions/:id`, requireAuth, async (req: Request, res: Response) => {
  // @ts-ignore
  axios.put(subscriptionBaseUrl + req.path, req.body, req.headers)
    .then(response => res.status(response.status).send(response.data))
    .catch(error => res.status(400).send({'message': requestError}))
});

router.patch(`/api/${process.env.API_VERSION}/subscriptions/:id`, requireAuth, async (req: Request, res: Response) => {
  // @ts-ignore
  axios.patch(subscriptionBaseUrl + req.path, req.body, req.headers)
    .then(response => res.status(response.status).send(response.data))
    .catch(error => res.status(400).send({'message': requestError}))
});

router.delete(`/api/${process.env.API_VERSION}/subscriptions/:id`, requireAuth, async (req: Request, res: Response) => {
  // @ts-ignore
  axios.delete(subscriptionBaseUrl + req.path, req.body, req.headers)
    .then(response => res.status(response.status).send(response.data))
    .catch(error => res.status(400).send({'message': requestError}))
});

router.get([`/api/${process.env.API_VERSION}/campaigns/:id`, `/api/${process.env.API_VERSION}/campaigns`], requireAuth, async (req: Request, res: Response) => {
  // @ts-ignore
  axios.get(subscriptionBaseUrl + req.path, req.headers)
    .then(response => res.status(response.status).send(response.data))
    .catch(error => res.status(400).send({'message': requestError}))
});

router.post(`/api/${process.env.API_VERSION}/campaigns`, requireAuth, async (req: Request, res: Response) => {
  // @ts-ignore
  axios.post(subscriptionBaseUrl + req.path, req.body, req.headers)
    .then(response => res.status(response.status).send(response.data))
    .catch(error => res.status(400).send({'message': requestError}))
});

router.put(`/api/${process.env.API_VERSION}/campaigns/:id`, requireAuth, async (req: Request, res: Response) => {
  // @ts-ignore
  axios.put(subscriptionBaseUrl + req.path, req.body, req.headers)
    .then(response => res.status(response.status).send(response.data))
    .catch(error => res.status(400).send({'message': requestError}))
});

router.patch(`/api/${process.env.API_VERSION}/campaigns/:id`, requireAuth, async (req: Request, res: Response) => {
  // @ts-ignore
  axios.patch(subscriptionBaseUrl + req.path, req.body, req.headers)
    .then(response => res.status(response.status).send(response.data))
    .catch(error => res.status(400).send({'message': requestError}))
});

router.delete(`/api/${process.env.API_VERSION}/campaigns/:id`, requireAuth, async (req: Request, res: Response) => {
  // @ts-ignore
  axios.delete(subscriptionBaseUrl + req.path, req.body, req.headers)
    .then(response => res.status(response.status).send(response.data))
    .catch(error => res.status(400).send({'message': requestError}))
});

export {router as subscriptionRouter};
