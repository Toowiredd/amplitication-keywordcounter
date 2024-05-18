import * as graphql from "@nestjs/graphql";
import { VoiceControlService } from "./voicecontrol.service";

export class VoiceControlResolver {
  constructor(protected readonly service: VoiceControlService) {}

  @graphql.Mutation(() => Boolean)
  async PauseDetection(
    @graphql.Args()
    args: string
  ): Promise<boolean> {
    return this.service.PauseDetection(args);
  }

  @graphql.Mutation(() => Boolean)
  async StartDetection(
    @graphql.Args()
    args: string
  ): Promise<boolean> {
    return this.service.StartDetection(args);
  }

  @graphql.Mutation(() => Boolean)
  async StopDetection(
    @graphql.Args()
    args: string
  ): Promise<boolean> {
    return this.service.StopDetection(args);
  }
}
