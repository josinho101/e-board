import { makeStyles } from "@material-ui/core/styles";

const style = makeStyles((theme) => ({
  iconHolder: {
    position: "absolute",
    right: ".5vw",
    top: ".5vh",
  },
  drawer: {
    margin: theme.spacing(2),
  },
}));

export default style;
