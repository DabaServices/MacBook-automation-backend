import { Controller, Get } from "@nestjs/common";
import { UnitService } from "./unit.service";

@Controller('units')
export class UnitController {
    constructor(private readonly service: UnitService) {}
    
    @Get('pikuds')
    fetchPikuds() {
        return this.service.fetchPikuds();
    }
}