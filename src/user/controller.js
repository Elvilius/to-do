import getJwt from '../token/service';
import { create, change } from './service';


export const login = async (req, res) => {
  const { user } = req;
  const jwtToken = getJwt(user);
  return res.send({ jwtToken });
};

export const createUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await create(email, password);
    const jwtToken = getJwt(user);
    return res.send({ jwtToken });
  } catch (e) {
    res.status(500);
    return res.send({ message: e.message });
  }
};

export const changePassword = async (req, res) => {
  try {
    const { user } = req;
    const { oldPassword, newPassword } = req.body;
    const updateUser = await change(user, oldPassword, newPassword);
    const jwtToken = getJwt(updateUser);
    return res.send({ jwtToken });
  } catch (e) {
    res.status(500);
    return res.send({ message: e.message });
  }
};
