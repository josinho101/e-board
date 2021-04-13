import style from "./style";
import Paper from "@material-ui/core/Paper";

const Board = () => {
  const classes = style();

  return <Paper className={classes.wrapper}></Paper>;
};

export default Board;
