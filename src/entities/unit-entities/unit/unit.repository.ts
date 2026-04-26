import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Unit } from "./unit.model";
import { UNIT_LEVELS } from "src/contants";

@Injectable()
export class UnitRepository {
    constructor(@InjectModel(Unit) private unitModel: typeof Unit) { }

    fetchPikuds() {
        return this.unitModel.findAll({
            where: {
                unitLevelId: UNIT_LEVELS.PIKUD
            }
        });
    }
}