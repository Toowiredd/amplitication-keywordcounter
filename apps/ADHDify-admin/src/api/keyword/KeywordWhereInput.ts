import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type KeywordWhereInput = {
  category?: StringNullableFilter;
  description?: StringNullableFilter;
  detectionId?: StringNullableFilter;
  id?: StringFilter;
  text?: StringNullableFilter;
};
