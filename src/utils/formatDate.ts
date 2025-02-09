import { Dayjs } from "dayjs";

export const formatDate = (date: Dayjs | null): string => {
  if (!date || !date.isValid()) return "";
  return date.toISOString();
};
