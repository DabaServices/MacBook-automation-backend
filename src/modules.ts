import { ReportModule } from './entities/report-entities/report/report.module';
import { UnitHierarchyModule } from './entities/unit-entities/features/unit-hierarchy/unit-hierarchy.module';
import { UnitStatusTypesModule } from './entities/unit-entities/units-statuses/units-statuses.module';
import { UsersModule } from './entities/unit-entities/users/users.module';

export default [
  UnitHierarchyModule,
  ReportModule,
  UnitStatusTypesModule,
  UsersModule,
];
