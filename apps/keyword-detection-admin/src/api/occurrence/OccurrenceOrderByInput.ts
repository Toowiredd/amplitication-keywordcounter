import { SortOrder } from "../../util/SortOrder";

export type OccurrenceOrderByInput = {
  count?: SortOrder;
  createdAt?: SortOrder;
  detectionId?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
