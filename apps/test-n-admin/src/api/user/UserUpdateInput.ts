import { InputJsonValue } from "../../types";
import { UserLocationUpdateManyWithoutUsersInput } from "./UserLocationUpdateManyWithoutUsersInput";
import { UserMusicListeningUpdateManyWithoutUsersInput } from "./UserMusicListeningUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  userLocations?: UserLocationUpdateManyWithoutUsersInput;
  userMusicListenings?: UserMusicListeningUpdateManyWithoutUsersInput;
};
