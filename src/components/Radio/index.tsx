import {
  Radio as MuiRadio,
  RadioProps,
  FormControlLabel,
  FormControlLabelProps,
  TypographyProps,
} from "@mui/material";
import { Typography } from "../atoms/Typography";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface CustomRadioProps<T extends FieldValues>
  extends Omit<FormControlLabelProps, "control" | "onChange" | "value"> {
  name: Path<T>;
  control: Control<T>;
  radioProps?: RadioProps;
  radioLabelProps?: TypographyProps;
}

export const Radio = <T extends FieldValues>({
  name,
  control,
  radioProps,
  label,
  radioLabelProps,
  ...props
}: CustomRadioProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange } }) => (
        <FormControlLabel
          control={
            <MuiRadio
              {...radioProps}
              checked={!!value}
              onChange={(_, checked) => onChange(checked)}
            />
          }
          label={<Typography {...radioLabelProps}>{label}</Typography>}
          {...props}
        />
      )}
    />
  );
};
