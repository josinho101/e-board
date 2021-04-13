import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  iconHolder: {
    position: "absolute",
    right: ".5vw",
    top: ".5vh",
  },
  drawer: {
    margin: theme.spacing(3),
    minWidth: "10vw",
  },
  colorPaletteHolder: {
    width: "12vw",
  },
  colorPalette: {
    width: "4vh",
    height: "4vh",
  },
  colorPaletteSelected: {
    boxShadow: "0 0 3pt 2pt black",
  },
  circle: {
    borderRadius: "50%",
    display: "inline-block",
  },
  selectedCircle: {
    boxShadow: "0 0 3pt 2pt black",
    borderRadius: "50%",
  },
  diaSmall: {
    height: "1vh",
    width: "1vh",
  },
  diaMedium: {
    height: "2vh",
    width: "2vh",
  },
  diaLarge: {
    height: "3vh",
    width: "3vh",
  },
  diaXLarge: {
    height: "4vh",
    width: "4vh",
  },
}));

export default useStyles;
