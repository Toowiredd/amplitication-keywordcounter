import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type KeywordWhereInput = {
  detectionId?: StringNullableFilter;
  id?: StringFilter;
  text?: StringNullableFilter;
};
