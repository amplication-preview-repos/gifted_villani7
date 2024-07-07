import { UserMusicListening } from "../userMusicListening/UserMusicListening";

export type MusicTrack = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  artist: string | null;
  album: string | null;
  duration: number | null;
  spotifyUri: string | null;
  appleMusicUri: string | null;
  userMusicListenings?: Array<UserMusicListening>;
};
