import dayjs, { Dayjs } from "dayjs";

export const parseDate = (date: string): Dayjs => {
  return dayjs(date);
};
