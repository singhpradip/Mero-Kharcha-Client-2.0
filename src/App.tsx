import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { theme } from "./theme";
import { Test } from "pages/Test";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Test />
    </ThemeProvider>
  );
};
