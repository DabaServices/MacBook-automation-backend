import { Controller, Delete, Query } from '@nestjs/common';
import { UnitStatusTypesService } from './units-statuses.service';

@Controller('statuses')
export class UnitStatusTypesController {
  constructor(private readonly service: UnitStatusTypesService) {}

  @Delete('reset')
  resetAllStatuses(@Query('date') date: string) {
    return this.service.resetAllStatusesForDate(date);
  }
}
