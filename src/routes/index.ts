import express from 'express';
import {ITypedRequest} from '../request/TypedRequest'
import {ITypedResponse} from '../respose/TypedResponse'
const router = express.Router();
import { IndexController } from '../controllers/IndexController';

const indexController = new IndexController();

/* GET home page. */
router.get('/', async (req: ITypedRequest, res: ITypedResponse) => {
  const result = await indexController.index(req);
  res.send(result);
});

export default router;
