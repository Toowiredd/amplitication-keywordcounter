import { SortOrder } from "../../util/SortOrder";

export type DetectionOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  state?: SortOrder;
  updatedAt?: SortOrder;
};
