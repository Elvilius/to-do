import model from '../database/models/index';

const getTask = async (userId, id) => {
  console.log(id);
  const task = await model.Task.findOne({ where: { userId, id, isCompleted: false } });
  if (!task) {
    throw new Error('task not found');
  }
  return task;
};

export const create = async (name, description, userId) => {
  const newTask = await model.Task.create({
    name, description, isCompleted: false, userId,
  });
  return newTask;
};

export const getList = async (userId, condition) => {
  const task = await model.Task.findAll({ where: { userId, isCompleted: false, condition } });
  return task;
};

export const complete = async (userId, taskId) => {
  const task = await getTask(userId, taskId);
  return task.update({ isCompleted: true });
};

export const change = async (name, description, taskId, userId) => {
  const task = await getTask(userId, taskId);
  console.log(task);
  return task.update({ name, description });
};
