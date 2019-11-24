import express from 'express';
// import validateUser from '../../middleware/validates';
import model from '../../database/models/index';

const router = express.Router();

router.get('/login', (req, res) => {
  res.send(model.User.findAll());
});

// router.post('/registration', validateUser, true);

// router.post('/change-password', true);

export default router;
