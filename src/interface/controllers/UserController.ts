import { UserGetRequest } from '../request/UserRequest';
import {UserRepositoryDummy} from '../../packages/infrastructure/user/UserRepositoryDummy'
import {FindUserUseCase} from '../../packages/usecases/user/FindUserUseCase'

export class UserController {
  constructor(
    private userRepository = new UserRepositoryDummy
  ) {}

  async index(req: UserGetRequest) {
    const useCase = new FindUserUseCase(this.userRepository);
    const res = await useCase.getAllUsers();
    return res;
  }
}
