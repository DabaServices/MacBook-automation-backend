import {
  Body,
  Controller,
  Delete,
  Get,
  ParseIntPipe,
  Post,
  Put,
  Query,
  Req,
} from '@nestjs/common';
import { UnitHierarchyService } from './unit-hierarchy.service';
import type { Request } from 'express';
import { RemoveUnitRelationDto } from './DTO/remove-unit-relation.dto';
import { AddUnitRelationDto } from './DTO/add-unit-relation.dto';
import { TransferUnitRelationDto } from './DTO/update-unit-relation.dto';

type RequestWithContext = Request & {
  date: string;
  username: string;
};

@Controller('/units')
export class UnitHierarchyController {
  constructor(private readonly service: UnitHierarchyService) {}

  @Get('')
  async getAllUnits(@Query('date') date: string) {
    return this.service.getAllUnitsWithParents(date);
  }

  @Get('hierarchy')
  async getHierarchy(
    @Query('date') date: string,
    @Query('unit', ParseIntPipe) unit: number,
  ) {
    return this.service.getHierarchyForUser(unit, date);
  }

  @Get('related')
  async getRelatedUnits(
    @Query('date') date: string,
    @Query('unit', ParseIntPipe) unit: number,
  ) {
    return this.service.fetchLowerUnits(date, unit);
  }

  @Post('hierarchy')
  addUnitRelation(@Body() addUnitRelationDto: AddUnitRelationDto) {
    return this.service.addUnitRelation(addUnitRelationDto);
  }

  @Delete('hierarchy')
  removeUnitRelation(
    @Body() removeUnitRelationDto: RemoveUnitRelationDto,
    @Req() request: RequestWithContext,
  ) {
    return this.service.removeUnitRelation(removeUnitRelationDto, request.date);
  }

  @Put('hierarchy')
  transferUnitRelation(
    @Body() transferUnitRelationDto: TransferUnitRelationDto,
    @Req() request: RequestWithContext,
  ) {
    return this.service.transferUnitRelation(
      transferUnitRelationDto,
      request.date,
      request.username,
    );
  }
}
