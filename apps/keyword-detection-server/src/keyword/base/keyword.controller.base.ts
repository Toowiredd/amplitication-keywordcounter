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
import { KeywordService } from "../keyword.service";
import { KeywordCreateInput } from "./KeywordCreateInput";
import { Keyword } from "./Keyword";
import { KeywordFindManyArgs } from "./KeywordFindManyArgs";
import { KeywordWhereUniqueInput } from "./KeywordWhereUniqueInput";
import { KeywordUpdateInput } from "./KeywordUpdateInput";

export class KeywordControllerBase {
  constructor(protected readonly service: KeywordService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Keyword })
  async createKeyword(
    @common.Body() data: KeywordCreateInput
  ): Promise<Keyword> {
    return await this.service.createKeyword({
      data: {
        ...data,

        detection: data.detection
          ? {
              connect: data.detection,
            }
          : undefined,
      },
      select: {
        createdAt: true,

        detection: {
          select: {
            id: true,
          },
        },

        id: true,
        text: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Keyword] })
  @ApiNestedQuery(KeywordFindManyArgs)
  async keywords(@common.Req() request: Request): Promise<Keyword[]> {
    const args = plainToClass(KeywordFindManyArgs, request.query);
    return this.service.keywords({
      ...args,
      select: {
        createdAt: true,

        detection: {
          select: {
            id: true,
          },
        },

        id: true,
        text: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Keyword })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async keyword(
    @common.Param() params: KeywordWhereUniqueInput
  ): Promise<Keyword | null> {
    const result = await this.service.keyword({
      where: params,
      select: {
        createdAt: true,

        detection: {
          select: {
            id: true,
          },
        },

        id: true,
        text: true,
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
  @swagger.ApiOkResponse({ type: Keyword })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateKeyword(
    @common.Param() params: KeywordWhereUniqueInput,
    @common.Body() data: KeywordUpdateInput
  ): Promise<Keyword | null> {
    try {
      return await this.service.updateKeyword({
        where: params,
        data: {
          ...data,

          detection: data.detection
            ? {
                connect: data.detection,
              }
            : undefined,
        },
        select: {
          createdAt: true,

          detection: {
            select: {
              id: true,
            },
          },

          id: true,
          text: true,
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
  @swagger.ApiOkResponse({ type: Keyword })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteKeyword(
    @common.Param() params: KeywordWhereUniqueInput
  ): Promise<Keyword | null> {
    try {
      return await this.service.deleteKeyword({
        where: params,
        select: {
          createdAt: true,

          detection: {
            select: {
              id: true,
            },
          },

          id: true,
          text: true,
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
