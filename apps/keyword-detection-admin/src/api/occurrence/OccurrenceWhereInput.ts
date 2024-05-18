import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DetectionWhereUniqueInput } from "../detection/DetectionWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type OccurrenceWhereInput = {
  count?: IntNullableFilter;
  detection?: DetectionWhereUniqueInput;
  id?: StringFilter;
};
