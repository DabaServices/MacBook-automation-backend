import { Body, Controller, Delete, Req } from "@nestjs/common";
import { ReportItemService } from "./report-item.service";
import { DeleteItemsDTO } from "./report.types";

@Controller('reportsItems')
export class ReportItemController {
    constructor(private readonly service: ReportItemService) { }

    @Delete('')
    deleteItems(@Req() request: Request, @Body() deleteItemsDTO: DeleteItemsDTO) {
        return this.service.deleteReportItems(Number(request?.['unit']), deleteItemsDTO, request?.['date']
        )
    }
}