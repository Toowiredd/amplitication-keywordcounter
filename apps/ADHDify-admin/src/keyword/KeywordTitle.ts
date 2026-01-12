import { Keyword as TKeyword } from "../api/keyword/Keyword";

export const KEYWORD_TITLE_FIELD = "category";

export const KeywordTitle = (record: TKeyword): string => {
  return record.category?.toString() || String(record.id);
};
