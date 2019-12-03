import express from 'express';
import { createUser, login } from './controller';
import passportLocal from '../auth/passport/passport-local';
import passportJwt from '../auth/passport/passport-jwt';
import validateUser from './validate';
import { validateError } from '../middleware/middleware';

const router = express.Router();

router.post('/registration', validateUser, validateError, createUser);
router.post('/login', validateUser, validateError, passportLocal.authenticate('local'), login);
router.get('/test', passportJwt.authenticate('jwt'), (req, res) => res.send(true));

export default router;
