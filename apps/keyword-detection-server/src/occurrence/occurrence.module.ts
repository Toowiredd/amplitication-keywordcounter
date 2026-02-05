import { Module } from "@nestjs/common";
import { OccurrenceModuleBase } from "./base/occurrence.module.base";
import { OccurrenceService } from "./occurrence.service";
import { OccurrenceController } from "./occurrence.controller";
import { OccurrenceResolver } from "./occurrence.resolver";

@Module({
  imports: [OccurrenceModuleBase],
  controllers: [OccurrenceController],
  providers: [OccurrenceService, OccurrenceResolver],
  exports: [OccurrenceService],
})
export class OccurrenceModule {}
