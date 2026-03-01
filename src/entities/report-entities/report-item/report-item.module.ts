import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { ReportItem } from "./report-item.model";
import { ReportItemRepository } from "./report-item.repository";
import { ReportItemService } from "./report-item.service";
import { ReportItemController } from "./report-item.controller";
import { Report } from "../report/report.model";

@Module({
    imports: [SequelizeModule.forFeature([ReportItem, Report])],
    providers: [ReportItemRepository, ReportItemService],
    controllers: [ReportItemController]
})

export class ReportItemModule { }