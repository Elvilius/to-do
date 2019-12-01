import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import passport from 'passport';
import toDoRoute from './to-do/routes/router';
import userRoute from './user/routes/routes';
import errorHandler from './error/error';

dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

app.use('/to-do', toDoRoute);
app.use('/user', userRoute);

app.use(errorHandler);
app.listen(process.env.PORT);
