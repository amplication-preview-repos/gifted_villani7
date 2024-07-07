import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserLocationUpdateInput = {
  longitude?: number | null;
  latitude?: number | null;
  user?: UserWhereUniqueInput | null;
};
