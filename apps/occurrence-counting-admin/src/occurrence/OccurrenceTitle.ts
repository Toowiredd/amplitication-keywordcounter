import { Occurrence as TOccurrence } from "../api/occurrence/Occurrence";

export const OCCURRENCE_TITLE_FIELD = "category";

export const OccurrenceTitle = (record: TOccurrence): string => {
  return record.category?.toString() || String(record.id);
};
