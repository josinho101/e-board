import useStyles from "./style";
import Paper from "@material-ui/core/Paper";

const Board = () => {
  const classes = useStyles();

  return <Paper className={classes.wrapper}></Paper>;
};

export default Board;
