import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserLocationCreateInput = {
  longitude?: number | null;
  latitude?: number | null;
  user?: UserWhereUniqueInput | null;
};
