import { InputJsonValue } from "../../types";
import { UserLocationCreateNestedManyWithoutUsersInput } from "./UserLocationCreateNestedManyWithoutUsersInput";
import { UserMusicListeningCreateNestedManyWithoutUsersInput } from "./UserMusicListeningCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  userLocations?: UserLocationCreateNestedManyWithoutUsersInput;
  userMusicListenings?: UserMusicListeningCreateNestedManyWithoutUsersInput;
};
