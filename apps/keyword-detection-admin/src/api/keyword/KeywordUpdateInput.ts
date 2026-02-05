import { DetectionWhereUniqueInput } from "../detection/DetectionWhereUniqueInput";

export type KeywordUpdateInput = {
  detection?: DetectionWhereUniqueInput | null;
  text?: string | null;
};
