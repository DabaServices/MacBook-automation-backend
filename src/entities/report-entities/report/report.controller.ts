import { Controller, Delete, Query } from '@nestjs/common';
import { ReportService } from './report.service';

@Controller('/reports')
export class ReportController {
  constructor(private readonly service: ReportService) {}

  @Delete('allForDate')
  deleteAllForDate(@Query() date: string) {
    return this.service.deleteAllForDate(date);
  }
}
