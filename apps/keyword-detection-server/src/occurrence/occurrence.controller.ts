import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OccurrenceService } from "./occurrence.service";
import { OccurrenceControllerBase } from "./base/occurrence.controller.base";

@swagger.ApiTags("occurrences")
@common.Controller("occurrences")
export class OccurrenceController extends OccurrenceControllerBase {
  constructor(protected readonly service: OccurrenceService) {
    super(service);
  }
}
