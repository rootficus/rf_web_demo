import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const colors = {
  primary: "#3a3a3a",
  secondary: "#f00",
  error: red.A400,
};

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    error: {
      main: colors.error,
    },
  },
});

export default theme;
