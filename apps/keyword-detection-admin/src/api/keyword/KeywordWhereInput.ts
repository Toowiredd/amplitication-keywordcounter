import { DetectionWhereUniqueInput } from "../detection/DetectionWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type KeywordWhereInput = {
  detection?: DetectionWhereUniqueInput;
  id?: StringFilter;
  text?: StringNullableFilter;
};
