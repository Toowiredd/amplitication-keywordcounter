import { OccurrenceWhereInput } from "./OccurrenceWhereInput";
import { OccurrenceOrderByInput } from "./OccurrenceOrderByInput";

export type OccurrenceFindManyArgs = {
  where?: OccurrenceWhereInput;
  orderBy?: Array<OccurrenceOrderByInput>;
  skip?: number;
  take?: number;
};
