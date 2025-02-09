import { FC } from "react";
import {
  RadioGroup as MuiRadioGroup,
  FormControl,
  RadioProps,
  FormLabelProps,
  TypographyProps,
} from "@mui/material";
import { Radio } from "../Radio";
import { Typography } from "../Typography";

interface RadioGroupProps {
  label?: string;
  name?: string;
  defaultValue?: string;
  value?: string;
  options: Array<{ label: string; value: string }>;
  onChange: (value: string) => void;
  radioProps?: RadioProps;
  labelProps?: FormLabelProps;
  radioLabelProps?: TypographyProps;
  "aria-labelledby"?: string;
}

export const RadioGroup: FC<RadioGroupProps> = ({
  label,
  name,
  defaultValue,
  value,
  onChange,
  options,
  radioProps,
  labelProps,
  radioLabelProps,
  "aria-labelledby": ariaLabelledby,
  ...props
}) => {
  const labelId = ariaLabelledby || "radio-buttons-group-label";

  return (
    <FormControl>
      {label && (
        <Typography id={labelId} {...labelProps}>
          {label}
        </Typography>
      )}
      <MuiRadioGroup
        aria-labelledby={labelId}
        name={name}
        defaultValue={defaultValue}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        {...props}
      >
        {options.map((option) => (
          <Radio
            key={option.value}
            value={option.value}
            label={option.label}
            radioProps={radioProps}
            radioLabelProps={radioLabelProps}
          />
        ))}
      </MuiRadioGroup>
    </FormControl>
  );
};
