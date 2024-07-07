import { User } from "../user/User";

export type UserLocation = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  longitude: number | null;
  latitude: number | null;
  user?: User | null;
};
