import { FC } from "react";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";

type CustomDatePickerProps = Omit<DatePickerProps<Dayjs>, "renderInput">;

export const DatePicker: FC<CustomDatePickerProps> = (props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MuiDatePicker {...props} defaultValue={props.defaultValue || dayjs()} />
    </LocalizationProvider>
  );
};
