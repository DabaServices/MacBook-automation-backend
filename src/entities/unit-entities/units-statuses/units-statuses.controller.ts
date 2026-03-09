import { Controller, Delete, Query, Req } from "@nestjs/common";
import { UnitStatusTypesService } from "./units-statuses.service";

@Controller('statuses')
export class UnitStatusTypesController {
    constructor(private readonly service: UnitStatusTypesService) { }
    /**
     * DELETE /statuses/reset
     *
     * Resets all units in units_statuses for the given date to status 0.
     * Requires the `screendate` header (format: dd.MM.yyyy).
     *
     * Responses:
     *   200 – all units for the date now have unit_status_id = 0
     *   500 – reset incomplete (some units still have a non-zero status)
     *   401 – missing screendate header (handled by HeadersMiddleware)
     */
    @Delete('reset')
    resetAllStatuses(@Query('date') date: string) {
        return this.service.resetAllStatusesForDate(date);
    }
}