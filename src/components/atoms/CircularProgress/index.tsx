import { FC } from "react";
import {
  CircularProgress as MuiCircularProgress,
  CircularProgressProps,
} from "@mui/material";

export const CircularProgress: FC<CircularProgressProps> = (props) => {
  return <MuiCircularProgress {...props} />;
};
