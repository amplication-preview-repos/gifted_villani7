import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserMusicListeningListRelationFilter } from "../userMusicListening/UserMusicListeningListRelationFilter";

export type MusicTrackWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  artist?: StringNullableFilter;
  album?: StringNullableFilter;
  duration?: IntNullableFilter;
  spotifyUri?: StringNullableFilter;
  appleMusicUri?: StringNullableFilter;
  userMusicListenings?: UserMusicListeningListRelationFilter;
};
