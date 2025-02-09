import { FC } from "react";
import {
  Radio as MuiRadio,
  RadioProps,
  FormControlLabel,
  FormControlLabelProps,
  TypographyProps,
} from "@mui/material";
import { Typography } from "../Typography";

interface CustomRadioProps extends Omit<FormControlLabelProps, "control"> {
  radioProps?: RadioProps;
  radioLabelProps?: TypographyProps;
}

export const Radio: FC<CustomRadioProps> = ({
  radioProps,
  label,
  radioLabelProps,
  ...props
}) => {
  return (
    <FormControlLabel
      control={<MuiRadio {...radioProps} />}
      label={<Typography {...radioLabelProps}>{label}</Typography>}
      {...props}
    />
  );
};
