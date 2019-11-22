import { body, validationResult } from 'express-validator';

export const validateCreateTask = [
  body('description').isString(),
  body('name').isString(),
  body('startAt').isInt(),
  body('finishAt').isInt(),
  // eslint-disable-next-line consistent-return
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  }];

export const a = () => 123123;
