import { User } from "../user/User";
import { MusicTrack } from "../musicTrack/MusicTrack";

export type UserMusicListening = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  isListening: boolean | null;
  timestamp: Date | null;
  user?: User | null;
  musicTrack?: MusicTrack | null;
};
