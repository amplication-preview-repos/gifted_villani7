import { SortOrder } from "../../util/SortOrder";

export type MusicTrackOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  artist?: SortOrder;
  album?: SortOrder;
  duration?: SortOrder;
  spotifyUri?: SortOrder;
  appleMusicUri?: SortOrder;
};
