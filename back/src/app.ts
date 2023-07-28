import express from 'express';
import { userRouter } from './routes';
import cors from 'cors';

export const app = express();
app.use(cors())
app.use(express.json());
app.use(userRouter)
