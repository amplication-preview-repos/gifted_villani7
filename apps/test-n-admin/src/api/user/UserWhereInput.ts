import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserLocationListRelationFilter } from "../userLocation/UserLocationListRelationFilter";
import { UserMusicListeningListRelationFilter } from "../userMusicListening/UserMusicListeningListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  userLocations?: UserLocationListRelationFilter;
  userMusicListenings?: UserMusicListeningListRelationFilter;
};
