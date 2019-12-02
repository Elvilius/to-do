import express from 'express';
import { userValidate } from '../../middleware/validates';
import { createUser, login } from '../handlers/user';
import passport from '../../auth/passport/passport-local';


const router = express.Router();

router.post('/registration', userValidate, createUser);
router.post('/login', userValidate, passport.authenticate('local'), login);

export default router;
