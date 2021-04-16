import { createMuiTheme } from "@material-ui/core";

export const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#FF9800",
    },
  },
  typography: {
    fontSize: 10,
  },
});

export const lightTheme = createMuiTheme({
  palette: {
    type: "light",
  },
  typography: {
    fontSize: 10,
  },
});
