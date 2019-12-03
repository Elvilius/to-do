import express from 'express';
import { createUser, login, changePassword } from './controller';
import passportLocal from '../auth/passport/passport-local';
import passportJwt from '../auth/passport/passport-jwt';
import { validateRegistration, validatePassword } from './validate';
import { validateError } from '../middleware/middleware';

const router = express.Router();

router.post('/registration', validateRegistration, validateError, createUser);
router.post('/login', validateRegistration, validateError, passportLocal.authenticate('local'), login);
router.put('/change-password', validatePassword, validateError, passportJwt.authenticate('jwt'), changePassword);

export default router;
