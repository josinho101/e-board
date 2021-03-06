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
  eraserWrapper: {
    display: "flex",
  },
  eraserSlider: {
    marginTop: "4%",
    marginLeft: "3%",
  },
  clearBoard: {
    width: "100%",
    fontSize: 10,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  themeToggleWrapper: {
    display: "flex",
  },
  themeToggleLabel: {
    marginTop: "6%",
  },
  eraserSelected: {
    backgroundColor: theme.selection.iconButton,
  },
  shapeButton: {
    padding: 4,
  },
  shapeWrapper: {
    height: 30,
    width: 40,
    display: "flex",
    alignItems: "center",
    placeContent: "center",
    cursor: "pointer",
    marginRight: 4,
    "&:hover": {
      backgroundColor: theme.selection.hover,
    },
  },
  shapeSelected: {
    backgroundColor: theme.selection.hover,
  },
  rectangleShape: {
    height: 20,
    width: 30,
  },
  circleShape: {
    height: 20,
    width: 20,
    borderRadius: "50%",
  },
  shapeRoot: {
    display: "flex",
    marginTop: theme.spacing(1),
  },
}));

export default useStyles;
