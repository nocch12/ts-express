import { User, UserIdType } from './User';

export interface UserRepositoryInterface {
  findAll(): Promise<User[]>;

  find(id: UserIdType): Promise<User>;

  save(user: User): Promise<User|null>; 
}
