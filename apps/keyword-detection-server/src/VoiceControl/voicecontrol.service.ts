import { Injectable } from "@nestjs/common";

@Injectable()
export class VoiceControlService {
  constructor() {}
  async PauseDetection(args: string): Promise<boolean> {
    throw new Error("Not implemented");
  }
  async StartDetection(args: string): Promise<boolean> {
    throw new Error("Not implemented");
  }
  async StopDetection(args: string): Promise<boolean> {
    throw new Error("Not implemented");
  }
}
