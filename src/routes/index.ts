import express from 'express';
import {IRequest} from '../interface/request/IRequest'
import {IResponse} from '../interface/respose/IResponse'
const router = express.Router();
import { IndexController } from '../interface/controllers/IndexController';

const indexController = new IndexController();

/* GET home page. */
router.get('/', async (req: IRequest, res: IResponse) => {
  const result = await indexController.index(req);
  res.send(result);
});

export default router;
