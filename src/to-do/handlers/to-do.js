const list = [];

export const getList = (req, res) => res.json({ data: list });

export const createTask = (req, res) => {
  const { description, name, finishAt } = req.body;
  list.push({ description, name, finishAt });
  return res.send(true);
};
