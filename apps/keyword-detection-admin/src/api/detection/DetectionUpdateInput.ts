import { KeywordUpdateManyWithoutDetectionsInput } from "./KeywordUpdateManyWithoutDetectionsInput";
import { OccurrenceUpdateManyWithoutDetectionsInput } from "./OccurrenceUpdateManyWithoutDetectionsInput";

export type DetectionUpdateInput = {
  keywords?: KeywordUpdateManyWithoutDetectionsInput;
  occurrences?: OccurrenceUpdateManyWithoutDetectionsInput;
  state?: string | null;
};
