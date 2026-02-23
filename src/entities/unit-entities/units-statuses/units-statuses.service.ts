import { Injectable } from "@nestjs/common";
import { Transaction } from "sequelize";
import { UnitStatusTypesRepository } from "./units-statuses.repository";
import { UpdateUnitStatus } from "./DTO/updateUnitStatus";

@Injectable()
export class UnitStatusTypesService {
    constructor(private readonly repository: UnitStatusTypesRepository) { }

    async updateHierarchyStatuses(
        unitsStatuses: UpdateUnitStatus,
        date: string,
        transaction?: Transaction
    ) {
        try {
            const hierarchyUnitIds = await this.repository.fetchHierarchyUnitIds(date, unitsStatuses.unitsIds);
            const targetUnitIds = unitsStatuses.updateHierarchy
                ? hierarchyUnitIds
                : unitsStatuses.unitsIds;

            if (unitsStatuses.clearHierarchyStatuses) {
                return this.repository.clearStatusesForUnitsDate(targetUnitIds, date, transaction);
            }

            const statusesToSave = targetUnitIds.map(unitId => ({
                    unitId,
                    unitStatusId: unitsStatuses.statusId,
                    date: new Date(date)
                }));

            return this.repository.updateStatuses(statusesToSave);
        } catch (error) {
            console.log(error);
        }
    }

    clearStatusForUnitDate(unitId: number, date: string, transaction?: Transaction) {
        return this.repository.clearStatusForUnitDate(unitId, date, transaction);
    }
}
