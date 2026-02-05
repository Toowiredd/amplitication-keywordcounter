import { DetectionWhereUniqueInput } from "../detection/DetectionWhereUniqueInput";

export type OccurrenceUpdateInput = {
  count?: number | null;
  detection?: DetectionWhereUniqueInput | null;
};
