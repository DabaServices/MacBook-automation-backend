import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Material } from 'src/entities/material-entities/material/material.model';
import { UnitHierarchyModule } from 'src/entities/unit-entities/features/unit-hierarchy/unit-hierarchy.module';
import { UnitRelation } from 'src/entities/unit-entities/unit-relations/unit-relation.model';
import { UnitStatusType } from 'src/entities/unit-entities/unit-status-type/unit-status-type.model';
import { Unit } from 'src/entities/unit-entities/unit/unit.model';
import { UnitStatus } from 'src/entities/unit-entities/units-statuses/units-statuses.model';
import { ReportItem } from '../report-item/report-item.model';
import { ReportController } from './report.controller';
import { Report } from './report.model';
import { ReportRepository } from './report.repository';
import { ReportService } from './report.service';

@Module({
  imports: [
    SequelizeModule.forFeature([
      Report,
      ReportItem,
      Material,
      Unit,
      UnitRelation,
      UnitStatus,
      UnitStatusType,
    ]),
    UnitHierarchyModule,
  ],
  controllers: [ReportController],
  providers: [ReportService, ReportRepository],
  exports: [ReportService],
})
export class ReportModule {}
