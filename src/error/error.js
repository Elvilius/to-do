export default [(req, res, next) => {
  const error = new Error(`${req.url} Not found`);
  error.status = 404;
  next(error);
// eslint-disable-next-line no-unused-vars
}, (error, req, res, next) => {
  res.error = error;
  return res.status(error.status).send({ error: error.message });
}];
