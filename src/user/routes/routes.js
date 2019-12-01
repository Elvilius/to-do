import express from 'express';
import { userValidate } from '../../middleware/validates';
import { createUser } from '../handlers/user';

const router = express.Router();

router.post('/registration', userValidate, createUser);

export default router;
