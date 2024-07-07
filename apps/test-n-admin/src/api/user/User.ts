import { JsonValue } from "type-fest";
import { UserLocation } from "../userLocation/UserLocation";
import { UserMusicListening } from "../userMusicListening/UserMusicListening";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  userLocations?: Array<UserLocation>;
  userMusicListenings?: Array<UserMusicListening>;
};
