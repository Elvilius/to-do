import getJwt from '../token/service';
import { create } from './service';


export const login = async (req, res) => {
  const { user } = req;
  const jwtToken = getJwt(user);
  return res.send({ jwtToken });
};

export const createUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = create(email, password);
    const jwtToken = getJwt(user);
    return res.send({ jwtToken });
  } catch (e) {
    if (e instanceof Error) {
      return res.send('A user with that email address already exists.');
    }
    throw e;
  }
};
