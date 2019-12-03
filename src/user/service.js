import * as bcrypt from 'bcrypt';
import model from '../database/models/index';

const saltOrRounds = 10;

export const findUserByEmail = email => model.User.findOne({ where: { email } });

export const findUserById = id => model.User.findOne({ where: { id } });

const getPasswordHash = password => bcrypt.hash(password, saltOrRounds);

export const change = async (user, oldPassword, newPassword) => {
  if (!await user.validatePassword(oldPassword)) {
    throw new Error('Password entered incorrectly');
  }
  const passwordHash = await getPasswordHash(newPassword);
  const updateUser = await user.update({ password: passwordHash });
  return updateUser;
};

export const create = async (email, password) => {
  const user = await findUserByEmail(email);
  if (user) {
    throw new Error('A user with that email address already exists.');
  }
  const passwordHash = await getPasswordHash(password);
  const newUser = await model.User.create({ email, password: passwordHash });
  return newUser;
};
