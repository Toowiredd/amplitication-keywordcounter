import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type KeywordWhereInput = {
  count?: IntNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
