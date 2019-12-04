import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import passport from 'passport';
import toDoRoute from './task/routes';
import userRoute from './user/routes';
import { errorHandler } from './middleware/middleware';

dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

app.use('/to-do', toDoRoute);
app.use('/user', userRoute);
app.get('/', (req, res) => res.send('Hello World!'));

app.use(errorHandler);
app.listen(process.env.PORT);
