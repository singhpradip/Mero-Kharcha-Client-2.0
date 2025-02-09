import { Dayjs } from "dayjs";

export const formatDate = (
  date: Dayjs | null,
  format: string = "YYYY-MM-DD"
): string => {
  if (!date) return "";
  return date.format(format);
};
