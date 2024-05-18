import { DetectionWhereUniqueInput } from "../detection/DetectionWhereUniqueInput";

export type OccurrenceCreateInput = {
  count?: number | null;
  detection?: DetectionWhereUniqueInput | null;
};
