import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { VoiceControlService } from "./voicecontrol.service";

@swagger.ApiTags("voiceControls")
@common.Controller("voiceControls")
export class VoiceControlController {
  constructor(protected readonly service: VoiceControlService) {}

  @common.Post("/pause")
  @swagger.ApiOkResponse({
    type: Boolean
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async PauseDetection(
    @common.Body()
    body: string
  ): Promise<boolean> {
        return this.service.PauseDetection(body);
      }

  @common.Post("/start")
  @swagger.ApiOkResponse({
    type: Boolean
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async StartDetection(
    @common.Body()
    body: string
  ): Promise<boolean> {
        return this.service.StartDetection(body);
      }

  @common.Post("/stop")
  @swagger.ApiOkResponse({
    type: Boolean
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async StopDetection(
    @common.Body()
    body: string
  ): Promise<boolean> {
        return this.service.StopDetection(body);
      }
}
