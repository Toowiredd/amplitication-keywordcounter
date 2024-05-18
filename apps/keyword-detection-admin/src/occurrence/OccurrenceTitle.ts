import { Occurrence as TOccurrence } from "../api/occurrence/Occurrence";

export const OCCURRENCE_TITLE_FIELD = "id";

export const OccurrenceTitle = (record: TOccurrence): string => {
  return record.id?.toString() || String(record.id);
};
