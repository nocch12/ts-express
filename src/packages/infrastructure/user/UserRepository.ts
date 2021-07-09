import { Repository, getConnection } from 'typeorm'
import { User as UserEntity } from '../../../typeorm/entity/User'

import { User, UserIdType } from '../../domain/user/User';
import { UserRepositoryInterface } from '../../domain/user/UserRepositoryInterface';

export class UserRepository extends UserRepositoryInterface {
  private userRepository: Repository<UserEntity>;

  constructor() {
    super();

    this.userRepository = getConnection().getRepository(UserEntity);
  }

  async findAll() {
    const users = await this.userRepository.find();

    return new Promise<User[]>((resolve) =>
      resolve(users.map(user => new User(user.id, user.name)))
    );
  }

  async find(id: UserIdType) {
    const user = await this.userRepository.findOne(id);

    return new Promise<User>((resolve) =>
      resolve(new User(user.id, user.name))
    );
  }

  async save(user: User) {
    const newUser = this.userRepository.create({name: user.name});
    this.userRepository.save(newUser);

    return new Promise<User>((resolve) => resolve(new User(1, 'user1')));
  }  
}
