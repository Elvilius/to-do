import * as jwt from 'jsonwebtoken';

require('dotenv').config();

export const secret = process.env.JWT_SECRET;

export default (user) => {
  const payload = { email: user.email, password: user.password, id: user.id };
  return jwt.sign(payload, secret);
};
