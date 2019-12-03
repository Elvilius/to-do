import { body } from 'express-validator';

export default [
  body('description').isString(),
  body('name').isString(),
  body('startAt').isInt(),
  body('finishAt').isInt(),
];
