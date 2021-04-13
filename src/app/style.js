import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  iconHolder: {
    position: "absolute",
    right: ".5vw",
    top: ".5vh",
  },
  drawer: {
    margin: theme.spacing(2),
    minWidth: "15vw",
  },
  colorPaletteHolder: {
    width: 170,
  },
  colorPalette: {
    width: "5vh",
    height: "5vh",
  },
  circle: {
    borderRadius: "50%",
    display: "inline-block",
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
