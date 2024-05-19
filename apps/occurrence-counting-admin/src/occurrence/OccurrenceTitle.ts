import { Occurrence as TOccurrence } from "../api/occurrence/Occurrence";

export const OCCURRENCE_TITLE_FIELD = "detectionId";

export const OccurrenceTitle = (record: TOccurrence): string => {
  return record.detectionId?.toString() || String(record.id);
};
