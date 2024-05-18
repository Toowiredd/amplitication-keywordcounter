import { KeywordCreateNestedManyWithoutDetectionsInput } from "./KeywordCreateNestedManyWithoutDetectionsInput";
import { OccurrenceCreateNestedManyWithoutDetectionsInput } from "./OccurrenceCreateNestedManyWithoutDetectionsInput";

export type DetectionCreateInput = {
  keywords?: KeywordCreateNestedManyWithoutDetectionsInput;
  occurrences?: OccurrenceCreateNestedManyWithoutDetectionsInput;
  state?: string | null;
};
