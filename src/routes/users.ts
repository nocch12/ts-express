import express from 'express';
const router = express.Router();
import {UserController} from '../interface/controllers/UserController'

router.get('/', async (req, res, next) => {
  const userController = new UserController();
  const result = await userController.index(req); 
  res.json(result);
});

export default router;
