/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { OccurrenceService } from "../occurrence.service";
import { OccurrenceCreateInput } from "./OccurrenceCreateInput";
import { Occurrence } from "./Occurrence";
import { OccurrenceFindManyArgs } from "./OccurrenceFindManyArgs";
import { OccurrenceWhereUniqueInput } from "./OccurrenceWhereUniqueInput";
import { OccurrenceUpdateInput } from "./OccurrenceUpdateInput";

export class OccurrenceControllerBase {
  constructor(protected readonly service: OccurrenceService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Occurrence })
  @swagger.ApiBody({
    type: OccurrenceCreateInput,
  })
  async createOccurrence(
    @common.Body() data: OccurrenceCreateInput
  ): Promise<Occurrence> {
    return await this.service.createOccurrence({
      data: data,
      select: {
        count: true,
        createdAt: true,
        detectionId: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Occurrence] })
  @ApiNestedQuery(OccurrenceFindManyArgs)
  async occurrences(@common.Req() request: Request): Promise<Occurrence[]> {
    const args = plainToClass(OccurrenceFindManyArgs, request.query);
    return this.service.occurrences({
      ...args,
      select: {
        count: true,
        createdAt: true,
        detectionId: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Occurrence })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async occurrence(
    @common.Param() params: OccurrenceWhereUniqueInput
  ): Promise<Occurrence | null> {
    const result = await this.service.occurrence({
      where: params,
      select: {
        count: true,
        createdAt: true,
        detectionId: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Occurrence })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiBody({
    type: OccurrenceUpdateInput,
  })
  async updateOccurrence(
    @common.Param() params: OccurrenceWhereUniqueInput,
    @common.Body() data: OccurrenceUpdateInput
  ): Promise<Occurrence | null> {
    try {
      return await this.service.updateOccurrence({
        where: params,
        data: data,
        select: {
          count: true,
          createdAt: true,
          detectionId: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Occurrence })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteOccurrence(
    @common.Param() params: OccurrenceWhereUniqueInput
  ): Promise<Occurrence | null> {
    try {
      return await this.service.deleteOccurrence({
        where: params,
        select: {
          count: true,
          createdAt: true,
          detectionId: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
