import { UserMusicListeningWhereInput } from "./UserMusicListeningWhereInput";
import { UserMusicListeningOrderByInput } from "./UserMusicListeningOrderByInput";

export type UserMusicListeningFindManyArgs = {
  where?: UserMusicListeningWhereInput;
  orderBy?: Array<UserMusicListeningOrderByInput>;
  skip?: number;
  take?: number;
};
