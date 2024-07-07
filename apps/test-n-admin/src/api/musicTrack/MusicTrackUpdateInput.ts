import { UserMusicListeningUpdateManyWithoutMusicTracksInput } from "./UserMusicListeningUpdateManyWithoutMusicTracksInput";

export type MusicTrackUpdateInput = {
  title?: string | null;
  artist?: string | null;
  album?: string | null;
  duration?: number | null;
  spotifyUri?: string | null;
  appleMusicUri?: string | null;
  userMusicListenings?: UserMusicListeningUpdateManyWithoutMusicTracksInput;
};
