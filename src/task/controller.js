import { create, getList } from './service';

export const getTaskList = (req, res) => {
  const { user } = req;
  const list = getList(user.id);
  return res.send({ data: list });
};

export const createTask = (req, res) => {
  const { name, description } = req.body;
  const newTask = create(name, description);
  return res.send({ data: newTask });
};
