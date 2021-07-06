import { IRequest } from '../request/IRequest';

export class IndexController {
  async index(req: IRequest) {
    return { title: 'Express' };
  }
}
