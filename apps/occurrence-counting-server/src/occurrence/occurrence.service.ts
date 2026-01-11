import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OccurrenceServiceBase } from "./base/occurrence.service.base";

@Injectable()
export class OccurrenceService extends OccurrenceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
