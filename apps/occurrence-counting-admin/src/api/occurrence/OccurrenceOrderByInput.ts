import { SortOrder } from "../../util/SortOrder";

export type OccurrenceOrderByInput = {
  category?: SortOrder;
  count?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  detectionId?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
