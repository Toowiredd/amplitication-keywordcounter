import { Keyword as TKeyword } from "../api/keyword/Keyword";

export const KEYWORD_TITLE_FIELD = "detectionId";

export const KeywordTitle = (record: TKeyword): string => {
  return record.detectionId?.toString() || String(record.id);
};
