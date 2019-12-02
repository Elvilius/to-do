import express from 'express';
import { getList, createTask } from '../handlers/to-do';
import { createToDoValidate } from '../../middleware/validates';
import passportJwt from '../../auth/passport/passport-jwt';

const router = express.Router();

router.use(passportJwt.authenticate('jwt'));

router.get('/list', getList);
router.post('/create', createToDoValidate, createTask);
router.post('/updated/id', createToDoValidate, createTask);
router.post('/set-status/id', createToDoValidate, createTask);


export default router;
