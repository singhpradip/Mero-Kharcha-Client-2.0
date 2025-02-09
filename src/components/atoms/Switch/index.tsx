import {
  Switch as MuiSwitch,
  SwitchProps,
  FormControlLabel,
} from "@mui/material";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface SwitchFieldProps<T extends FieldValues>
  extends Omit<SwitchProps, "name"> {
  name: Path<T>;
  control: Control<T>;
  label?: React.ReactNode;
}

export const Switch = <T extends FieldValues>({
  control,
  name,
  label,
  ...rest
}: SwitchFieldProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControlLabel
          control={<MuiSwitch {...field} checked={field.value} {...rest} />}
          label={label || ""}
        />
      )}
    />
  );
};
