import dayjs from "dayjs";

export const parseDate = (isoString: string): string => {
  if (!isoString) return "";
  const parsed = dayjs(isoString);
  return parsed.isValid() ? parsed.format("MMMM D, YYYY h:mm A") : "";
};
