import { UserMusicListening as TUserMusicListening } from "../api/userMusicListening/UserMusicListening";

export const USERMUSICLISTENING_TITLE_FIELD = "id";

export const UserMusicListeningTitle = (
  record: TUserMusicListening
): string => {
  return record.id?.toString() || String(record.id);
};
