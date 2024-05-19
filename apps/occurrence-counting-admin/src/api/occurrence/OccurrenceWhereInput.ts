import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type OccurrenceWhereInput = {
  count?: IntNullableFilter;
  detectionId?: StringNullableFilter;
  id?: StringFilter;
};
