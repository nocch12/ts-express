import { User, UserIdType } from '../../domain/user/User';
import { UserRepositoryInterface } from '../../domain/user/UserRepositoryInterface';

export class UserRepositoryDummy extends UserRepositoryInterface {
  findAll() {
    return new Promise<User[]>((resolve) =>
      resolve([
        new User(1, 'user1'),
        new User(2, 'user2'),
        new User(3, 'user3'),
      ])
    );
  }

  find(id: UserIdType) {
    return new Promise<User>((resolve) => resolve(new User(1, 'user1')));
  }

  save(user: User) {
    return new Promise<User>((resolve) => resolve(new User(1, 'user1')));
  }

  
}
