export type UserIdType = number;

export class User {
  constructor(
    private _id: UserIdType,
    private _name: string
  ) {}

  get id(): UserIdType {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  set id(id: UserIdType) {
    this._id = id;
  }

  set name(name: string) {
    this._name = name;
  }
}