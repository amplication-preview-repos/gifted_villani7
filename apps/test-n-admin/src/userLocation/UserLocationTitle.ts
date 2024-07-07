import { UserLocation as TUserLocation } from "../api/userLocation/UserLocation";

export const USERLOCATION_TITLE_FIELD = "id";

export const UserLocationTitle = (record: TUserLocation): string => {
  return record.id?.toString() || String(record.id);
};
