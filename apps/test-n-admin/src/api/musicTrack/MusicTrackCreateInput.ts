import { UserMusicListeningCreateNestedManyWithoutMusicTracksInput } from "./UserMusicListeningCreateNestedManyWithoutMusicTracksInput";

export type MusicTrackCreateInput = {
  title?: string | null;
  artist?: string | null;
  album?: string | null;
  duration?: number | null;
  spotifyUri?: string | null;
  appleMusicUri?: string | null;
  userMusicListenings?: UserMusicListeningCreateNestedManyWithoutMusicTracksInput;
};
