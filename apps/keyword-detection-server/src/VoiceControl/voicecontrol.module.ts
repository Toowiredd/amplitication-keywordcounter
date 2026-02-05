import { Module } from "@nestjs/common";
import { VoiceControlService } from "./voicecontrol.service";
import { VoiceControlController } from "./voicecontrol.controller";
import { VoiceControlResolver } from "./voicecontrol.resolver";

@Module({
  controllers: [VoiceControlController],
  providers: [VoiceControlService, VoiceControlResolver],
  exports: [VoiceControlService],
})
export class VoiceControlModule {}
