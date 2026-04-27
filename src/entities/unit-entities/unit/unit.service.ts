import { Injectable } from "@nestjs/common";
import { UnitRepository } from "./unit.repository";

@Injectable()
export class UnitService {
    constructor(private readonly repository: UnitRepository) { }

    async fetchPikuds() {
        const pikuds = await this.repository.fetchPikuds();
        
        return pikuds.map(pikud => pikud.unitId);
    }
}