import express from 'express';
// import validateUser from '../../middleware/validates';
import model from '../../database/models/index';

                 


                    







const router = express.Router();

router.get('/login', async (req, res) => {
  const user = await model.User.findOne({ email: 'fnord', password: 'omnomnom', token: 'qweqweqweqwe' });
  console.log(user);
  res.send(user);
});

// router.post('/registration', validateUser, true);

// router.post('/change-password', true);

export default router;
