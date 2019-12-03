import { body } from 'express-validator';

export const validateRegistration = [
  body('email').isEmail(),
  body('password').isLength({ min: 8 }),
];

export const validatePassword = [
  body('oldPassword').isLength({ min: 8 }),
  body('newPassword').isLength({ min: 8 }),
];
