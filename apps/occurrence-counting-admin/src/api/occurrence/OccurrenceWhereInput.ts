import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type OccurrenceWhereInput = {
  category?: StringNullableFilter;
  count?: IntNullableFilter;
  description?: StringNullableFilter;
  detectionId?: StringNullableFilter;
  id?: StringFilter;
};
