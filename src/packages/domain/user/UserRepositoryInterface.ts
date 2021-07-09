import { User, UserIdType } from './User';

export abstract class UserRepositoryInterface {
  abstract findAll(): Promise<User[]>;

  abstract find(id: UserIdType): Promise<User>;

  abstract save(user: User): Promise<User|null>; 
}
