import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { MusicTrackWhereUniqueInput } from "../musicTrack/MusicTrackWhereUniqueInput";

export type UserMusicListeningUpdateInput = {
  isListening?: boolean | null;
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
  musicTrack?: MusicTrackWhereUniqueInput | null;
};
