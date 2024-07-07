import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { MusicTrackWhereUniqueInput } from "../musicTrack/MusicTrackWhereUniqueInput";

export type UserMusicListeningWhereInput = {
  id?: StringFilter;
  isListening?: BooleanNullableFilter;
  timestamp?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
  musicTrack?: MusicTrackWhereUniqueInput;
};
