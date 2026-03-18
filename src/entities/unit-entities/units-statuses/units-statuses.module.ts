import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UnitStatusTypesController } from './units-statuses.controller';
import { UnitStatus } from './units-statuses.model';
import { UnitStatusTypesRepository } from './units-statuses.repository';
import { UnitStatusTypesService } from './units-statuses.service';
import { UnitRelation } from '../unit-relations/unit-relation.model';

@Module({
  imports: [SequelizeModule.forFeature([UnitStatus, UnitRelation])],
  controllers: [UnitStatusTypesController],
  providers: [UnitStatusTypesService, UnitStatusTypesRepository],
  exports: [UnitStatusTypesService],
})
export class UnitStatusTypesModule {}
