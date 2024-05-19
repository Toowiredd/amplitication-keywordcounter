import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type KeywordWhereInput = {
  category?: StringNullableFilter;
  description?: StringNullableFilter;
  detectionId?: StringNullableFilter;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  text?: StringNullableFilter;
};
