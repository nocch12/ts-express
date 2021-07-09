import { UserGetRequest } from '../request/UserRequest';
import { UserRepository } from '../../packages/infrastructure/user/UserRepository';
import { FindUserUseCase } from '../../packages/usecases/user/FindUserUseCase';

export class UserController {
  constructor(private userRepository = new UserRepository()) {}

  async index(req: UserGetRequest) {
    const useCase = new FindUserUseCase(this.userRepository);
    
    const res = await useCase.getAllUsers();
    return res;
  }
}
