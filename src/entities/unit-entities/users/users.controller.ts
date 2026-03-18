import { Body, Controller, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import type { ChangeUserUnitDTO } from './users.types';

@Controller('users')
export class UserController {
  constructor(private readonly service: UsersService) {}

  @Put('')
  changeUserUnit(@Body() changeUserUnitDTO: ChangeUserUnitDTO) {
    return this.service.changeUnitForUser(changeUserUnitDTO);
  }
}
