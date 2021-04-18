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
  selection: {
    iconButton: "#FF98005C",
  },
});

export const lightTheme = createMuiTheme({
  palette: {
    type: "light",
  },
  typography: {
    fontSize: 10,
  },
  selection: {
    iconButton: "#3F51B55C",
  },
});
