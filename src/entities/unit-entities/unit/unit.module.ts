import { Module } from "@nestjs/common";
import { UnitController } from "./unit.controller";
import { UnitRepository } from "./unit.repository";
import { UnitService } from "./unit.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { Unit } from "./unit.model";

@Module({
    imports: [SequelizeModule.forFeature([Unit])],
    controllers: [UnitController],
    providers: [UnitRepository, UnitService]
})

export class UnitModule { }