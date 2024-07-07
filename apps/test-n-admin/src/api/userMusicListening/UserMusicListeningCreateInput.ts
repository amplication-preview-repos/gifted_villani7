import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { MusicTrackWhereUniqueInput } from "../musicTrack/MusicTrackWhereUniqueInput";

export type UserMusicListeningCreateInput = {
  isListening?: boolean | null;
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
  musicTrack?: MusicTrackWhereUniqueInput | null;
};
