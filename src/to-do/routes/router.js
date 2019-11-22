import express from 'express';
import { getList, createTask } from '../handler/handler';
import { validateCreateTask } from '../middleware/validate';

const router = express.Router();

router.get('/list', getList);

router.post('/create', validateCreateTask, createTask);

export default router;
