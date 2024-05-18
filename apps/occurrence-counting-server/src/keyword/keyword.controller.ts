import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { KeywordService } from "./keyword.service";
import { KeywordControllerBase } from "./base/keyword.controller.base";

@swagger.ApiTags("keywords")
@common.Controller("keywords")
export class KeywordController extends KeywordControllerBase {
  constructor(protected readonly service: KeywordService) {
    super(service);
  }
}
