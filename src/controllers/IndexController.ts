import { ITypedRequest } from '../request/TypedRequest';

export class IndexController {
  async index(req: ITypedRequest) {
    return { title: 'Express' };
  }
}
