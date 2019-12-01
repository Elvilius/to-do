import express from 'express';
import { getList, createTask } from '../handlers/handler';
import { createToDoValidate } from '../../middleware/validates';

const router = express.Router();

router.get('/list', getList);
router.post('/create', createToDoValidate, createTask);


export default router;
