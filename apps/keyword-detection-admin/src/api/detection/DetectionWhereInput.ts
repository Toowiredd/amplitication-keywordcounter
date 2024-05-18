import { StringFilter } from "../../util/StringFilter";
import { KeywordListRelationFilter } from "../keyword/KeywordListRelationFilter";
import { OccurrenceListRelationFilter } from "../occurrence/OccurrenceListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type DetectionWhereInput = {
  id?: StringFilter;
  keywords?: KeywordListRelationFilter;
  occurrences?: OccurrenceListRelationFilter;
  state?: StringNullableFilter;
};
