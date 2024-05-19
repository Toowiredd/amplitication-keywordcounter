import { SortOrder } from "../../util/SortOrder";

export type KeywordOrderByInput = {
  category?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  detectionId?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
};
