import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Report } from "./report.model";

@Injectable()
export class ReportRepository {
    constructor(@InjectModel(Report) private readonly reportModel: typeof Report) { }

    deleteAllForDate(date: Date) {
        return this.reportModel.destroy({
            where: {
                createdOn: date
            }
        })
    }
}
