import { Keyword } from "../keyword/Keyword";
import { Occurrence } from "../occurrence/Occurrence";

export type Detection = {
  createdAt: Date;
  id: string;
  keywords?: Array<Keyword>;
  occurrences?: Array<Occurrence>;
  state: string | null;
  updatedAt: Date;
};
