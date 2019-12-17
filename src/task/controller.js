import {
  create,
  getList,
  complete,
  change,
} from './service';

export const getTaskList = async (req, res) => {
  try {
    const { user, query } = req;
    const list = await getList(user.id, query);
    return res.send({ data: list });
  } catch (e) {
    res.status(500);
    return res.send({ message: e.message });
  }
};

export const createTask = async (req, res) => {
  try {
    const { user } = req;
    const { name, description } = req.body;
    const newTask = await create(name, description, user.id);
    return res.send({ data: newTask });
  } catch (e) {
    res.status(500);
    return res.send({ message: e.message });
  }
};

export const changeTask = async (req, res) => {
  try {
    const { user } = req;
    const { id } = req.params;
    const { name, description } = req.body;
    const updatedTask = await change(name, description, id, user.id);
    return res.send({ data: updatedTask });
  } catch (e) {
    res.status(500);
    return res.send({ message: e.message });
  }
};

export const completeTask = async (req, res) => {
  try {
    const { user } = req;
    const { id } = req.params;
    const completedTask = await complete(user.id, id);
    return res.send({ data: completedTask });
  } catch (e) {
    res.status(500);
    return res.send({ message: e.message });
  }
};
