import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { formatDate } from "utils/formatDate";

interface CustomDatePickerProps<T extends FieldValues>
  extends Omit<DatePickerProps<Dayjs>, "renderInput" | "onChange" | "value"> {
  name: Path<T>;
  control: Control<T>;
  label?: string;
}

export const DatePicker = <T extends FieldValues>({
  name,
  control,
  label,
  ...props
}: CustomDatePickerProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { value, onChange, ...field },
        fieldState: { error },
      }) => (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MuiDatePicker
            {...props}
            {...field}
            label={label}
            value={value ? dayjs(value) : null}
            onChange={(newValue) => {
              onChange(formatDate(newValue));
            }}
            slotProps={{
              textField: {
                error: !!error,
                helperText: error?.message,
              },
            }}
          />
        </LocalizationProvider>
      )}
    />
  );
};
