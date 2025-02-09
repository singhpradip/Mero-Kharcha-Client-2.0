import { FC } from "react";
import { Button as MuiButton, ButtonProps } from "@mui/material";

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <MuiButton {...props}>{children}</MuiButton>;
};
