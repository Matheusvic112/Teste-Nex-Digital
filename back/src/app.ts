import express from 'express';
import { userRouter } from './routes';
import cors from 'cors';
import { handleError } from './errors';

export const app = express();
app.use(cors())
app.use(express.json());
app.use('/user',userRouter)
app.use(handleError)