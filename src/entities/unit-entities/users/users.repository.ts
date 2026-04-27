import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { IUser, User } from './users.model';

@Injectable()
export class UsersRepository {
  constructor(@InjectModel(User) private readonly unitUser: typeof User) {}

  changeUnitForUser(user: IUser) {
    return this.unitUser.upsert(user);
  }
}
