import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as cors from 'cors';
import { mail } from './routes';

admin.initializeApp(functions.config().firebase);

const app = express();
const main = express();
main.use(cors({ origin: true }));
main.use('/v1', app);

app.post('/mail', mail);
export const api = functions.https.onRequest(main);
