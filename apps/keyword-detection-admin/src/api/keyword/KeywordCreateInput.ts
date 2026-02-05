import { DetectionWhereUniqueInput } from "../detection/DetectionWhereUniqueInput";

export type KeywordCreateInput = {
  detection?: DetectionWhereUniqueInput | null;
  text?: string | null;
};
