import { UserIdType } from '../../domain/user/User';
import { UserRepositoryInterface } from '../../domain/user/UserRepositoryInterface';

export class FindUserUseCase {
  constructor(private userRepository: UserRepositoryInterface) {}

  public getUser(id: UserIdType) {
    return this.userRepository.find(id);
  }

  public getAllUsers() {
    return this.userRepository.findAll();
  }
}
