import {
  Column,
  DataType,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { ReportItem } from 'src/entities/report-entities/report-item/report-item.model';

export type IMaterial = {
  id: string;
  description?: string | null;
  centerId: number;
  sectionId: number;
  unitOfMeasurement?: string | null;
  multiply?: number | null;
  recordStatus: string;
  type: string;
};

@Table({ tableName: 'materials', timestamps: false })
export class Material extends Model<IMaterial> {
  @PrimaryKey
  @Column(DataType.STRING(18))
  declare id: string;

  @Column(DataType.STRING(40))
  declare description: string | null;

  @Column({ field: 'center_id', type: DataType.INTEGER })
  declare centerId: number;

  @Column({ field: 'section_id', type: DataType.INTEGER })
  declare sectionId: number;

  @Column({ field: 'unit_of_measurement', type: DataType.STRING(40) })
  declare unitOfMeasurement: string | null;

  @Column(DataType.DECIMAL)
  declare multiply: string | null;

  @Column({ field: 'record_status', type: DataType.STRING(20) })
  declare recordStatus: string;

  @Column(DataType.STRING(20))
  declare type: string;

  @HasMany(() => ReportItem)
  declare reportItems?: ReportItem[];
}
