import express from 'express';
import {json} from 'body-parser';
import {emailRouter} from "../server/routes/emailRouter";
import {subscriptionRouter} from "../server/routes/subscriptionRouter";
import {currentUser} from '@adidastest-phillip/common'

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(currentUser);
app.use(emailRouter);
app.use(subscriptionRouter);

export {app};
