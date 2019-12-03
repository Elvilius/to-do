import { body } from 'express-validator';

export default [
  body('email').isEmail(),
  body('password').isLength({ min: 8 }),
];
