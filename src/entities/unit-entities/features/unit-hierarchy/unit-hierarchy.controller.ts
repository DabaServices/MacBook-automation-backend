import { Body, Controller, Delete, Get, Post, Put, Query, Req } from "@nestjs/common";
import { UnitHierarchyService } from "./unit-hierarchy.service";
import type { Request } from "express";
import { RemoveUnitRelationDto } from "./DTO/remove-unit-relation.dto";
import { AddUnitRelationDto } from "./DTO/add-unit-relation.dto";
import { TransferUnitRelationDto } from "./DTO/update-unit-relation.dto";

@Controller("/units")
export class UnitHierarchyController {
  constructor(private readonly service: UnitHierarchyService) { }

  @Get("")
  async getAllUnits(@Query('date') date: string) {
    return this.service.getAllUnitsWithParents(date);
  }

  @Get("hierarchy")
  async getHierarchy(@Query('date') date: string, @Query('unit') unit: number) {
    return this.service.getHierarchyForUser(unit, date);
  }

  @Post("hierarchy")
  addUnitRelation(
    @Body() addUnitRelationDto: AddUnitRelationDto
  ) {
    return this.service.addUnitRelation(
      addUnitRelationDto
    );
  }

  @Delete("hierarchy")
  removeUnitRelation(
    @Body() removeUnitRelationDto: RemoveUnitRelationDto,
    @Req() request: Request
  ) {
    return this.service.removeUnitRelation(removeUnitRelationDto, request?.["date"]);
  }

  @Put("hierarchy")
  transferUnitRelation(
    @Body() transferUnitRelationDto: TransferUnitRelationDto,
    @Req() request: Request
  ) {
    return this.service.transferUnitRelation(
      transferUnitRelationDto,
      request?.["date"],
      request?.["username"]
    );
  }
}
