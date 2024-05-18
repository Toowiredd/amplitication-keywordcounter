import { Keyword as TKeyword } from "../api/keyword/Keyword";

export const KEYWORD_TITLE_FIELD = "text";

export const KeywordTitle = (record: TKeyword): string => {
  return record.text?.toString() || String(record.id);
};
