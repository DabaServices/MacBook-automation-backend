import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UnitHierarchyController } from "./unit-hierarchy.controller";
import { UnitHierarchyService } from "./unit-hierarchy.service";
import { UnitHierarchyRepository } from "./unit-hierarchy.repository";
import { UnitId } from "../../unit-id/unit-id.model";
import { Unit } from "../../unit/unit.model";
import { UnitRelation } from "../../unit-relations/unit-relation.model";
import { UnitStatusType } from "../../unit-status-type/unit-status-type.model";
import { UnitUser } from "../../unit-users/unit-user.model";
import { UnitStatus } from "../../units-statuses/units-statuses.model";
import { UnitStatusTypesRepository } from "../../units-statuses/units-statuses.repository";
import { Report } from "src/entities/report-entities/report/report.model";
import { ReportRoutingRepository } from "src/entities/report-entities/report/report-routing.repository";

@Module({
  imports: [
    SequelizeModule.forFeature([
      UnitId,
      Unit,
      UnitRelation,
      UnitStatusType,
      UnitUser,
      UnitStatus,
      Report,
    ]),
  ],
  controllers: [UnitHierarchyController],
  providers: [
    UnitHierarchyService,
    UnitHierarchyRepository,
    UnitStatusTypesRepository,
    ReportRoutingRepository
  ],
  exports: [UnitHierarchyService]
})
export class UnitHierarchyModule { }
