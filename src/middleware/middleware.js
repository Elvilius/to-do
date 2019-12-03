import { validationResult } from 'express-validator';

// eslint-disable-next-line consistent-return
export const validateError = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
};

export const errorHandler = [(req, res, next) => {
  const error = new Error(`${req.url} Not found`);
  error.status = 404;
  next(error);
// eslint-disable-next-line no-unused-vars
}, (error, req, res, next) => {
  res.error = error;
  return res.status(error.status).send({ error: error.message });
}];
