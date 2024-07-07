import { SortOrder } from "../../util/SortOrder";

export type UserMusicListeningOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  isListening?: SortOrder;
  timestamp?: SortOrder;
  userId?: SortOrder;
  musicTrackId?: SortOrder;
};
