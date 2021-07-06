import { UserGetRequest } from '../request/UserRequest';

export class UserController {
  index(req: UserGetRequest) {
    const sort = req.params.sort;
    return {
      list: [{ id: 1, name: 'john' }],
    };
  }
}
