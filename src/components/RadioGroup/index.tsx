import {
  RadioGroup as MuiRadioGroup,
  FormControl,
  RadioProps,
  FormLabelProps,
  TypographyProps,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { Typography } from "../atoms/Typography";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface RadioGroupProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label?: string;
  options: Array<{ label: string; value: string }>;
  radioProps?: RadioProps;
  labelProps?: FormLabelProps;
  radioLabelProps?: TypographyProps;
  "aria-labelledby"?: string;
}

export const RadioGroup = <T extends FieldValues>({
  name,
  control,
  label,
  options,
  labelProps,
  radioProps,
  radioLabelProps,
  "aria-labelledby": ariaLabelledby,
  ...props
}: RadioGroupProps<T>) => {
  const labelId = ariaLabelledby || "radio-buttons-group-label";

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <FormControl error={!!error}>
          {label && (
            <Typography id={labelId} {...labelProps}>
              {label}
            </Typography>
          )}
          <MuiRadioGroup
            aria-labelledby={labelId}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            {...props}
          >
            {options.map((option) => (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={<Radio {...radioProps} />}
                label={
                  <Typography {...radioLabelProps}>{option.label}</Typography>
                }
                sx={{ margin: 0 }}
              />
            ))}
          </MuiRadioGroup>
          {error && (
            <Typography color="error" variant="caption">
              {error.message}
            </Typography>
          )}
        </FormControl>
      )}
    />
  );
};
