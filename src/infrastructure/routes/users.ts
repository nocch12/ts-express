import express from 'express';
const router = express.Router();
import {UserController} from '../../interface/controllers/UserController'

router.get('/', function(req, res, next) {
  const userController = new UserController();
  res.json(userController.index(req));
});

export default router;
