import { SortOrder } from "../../util/SortOrder";

export type UserLocationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  longitude?: SortOrder;
  latitude?: SortOrder;
  userId?: SortOrder;
};
