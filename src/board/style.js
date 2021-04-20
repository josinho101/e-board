import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: "100vh",
    width: "100vw",
    borderRadius: 0,
    cursor: "crosshair",
  },
  pointer: {
    cursor: "pointer",
  },
}));

export default useStyles;
