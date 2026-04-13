import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { ChangeUserUnitDTO } from './users.types';
import { IUser } from './users.model';

@Injectable()
export class UsersService {
  constructor(private readonly repository: UsersRepository) {}

  changeUnitForUser(changeUnitUser: ChangeUserUnitDTO) {
    return this.repository.changeUnitForUser({
      userId: changeUnitUser.userId,
      unitId: changeUnitUser.unitId,
    } as IUser);
  }
}