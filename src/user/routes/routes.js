import express from 'express';
import validateUser from '../../middleware/validates';

const router = express.Router();

router.get('/login', true);

router.post('/registration', validateUser, true);

router.post('/change-password', true);

export default router;
