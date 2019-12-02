import express from 'express';
import { userValidate } from '../../middleware/validates';
import { createUser, login } from '../handlers/user';
import passportLocal from '../../auth/passport/passport-local';
import passportJwt from '../../auth/passport/passport-jwt';


const router = express.Router();

router.post('/registration', userValidate, createUser);
router.post('/login', userValidate, passportLocal.authenticate('local'), login);
router.get('/test', passportJwt.authenticate('jwt'), (req, res) => res.send(true));

export default router;
