import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserLocationWhereInput = {
  id?: StringFilter;
  longitude?: FloatNullableFilter;
  latitude?: FloatNullableFilter;
  user?: UserWhereUniqueInput;
};
