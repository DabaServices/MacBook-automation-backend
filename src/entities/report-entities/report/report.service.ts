import { Injectable } from '@nestjs/common';
import { ReportRepository } from './report.repository';

@Injectable()
export class ReportService {
  constructor(private readonly repository: ReportRepository) {}

  deleteAllForDate(date: string) {
    return this.repository.deleteAllForDate(new Date(date));
  }
}
