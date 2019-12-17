import express from 'express';
import {
  getTaskList,
  createTask,
  completeTask,
  changeTask,
} from './controller';
import createToDoValidate from './validate';
import passportJwt from '../auth/passport/passport-jwt';
import { validateError } from '../middleware/middleware';

const router = express.Router();

router.use(passportJwt.authenticate('jwt'));

router.get('/list', getTaskList);
router.put('/complete/:id', completeTask);
router.put('/change/:id', createToDoValidate, validateError, changeTask);
router.post('/create', createToDoValidate, validateError, createTask);


export default router;
