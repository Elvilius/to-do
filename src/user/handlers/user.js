import * as bcrypt from 'bcrypt';
import model from '../../database/models/index';
import getJwt from '../token/jwt';

const saltOrRounds = 10;

export const findUserByEmail = email => model.User.findOne({ where: { email } });

const getPasswordHash = password => bcrypt.hash(password, saltOrRounds);

export const createUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await findUserByEmail(email);
  if (user) {
    return res.send('fail');
  }
  const passwordHash = await getPasswordHash(password);
  const newUser = await model.User.create({ email, password: passwordHash });
  const jwtToken = await getJwt(newUser);
  return res.send({ jwtToken });
};
