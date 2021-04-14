import useStyles from "./style";
import Paper from "@material-ui/core/Paper";
import { useEffect, useRef } from "react";

const Board = (props) => {
  const classes = useStyles();
  const { options } = props;

  const canvas = useRef();
  const context = useRef();
  const mouse = useRef({ x: 0, y: 0 });
  const doDraw = useRef(false);

  useEffect(() => {
    canvas.current.width = window.innerWidth;
    canvas.current.height = window.innerHeight;
    context.current = canvas.current.getContext("2d");
    context.current.lineJoin = "round";
    context.current.lineCap = "round";
  }, []);

  useEffect(() => {
    if (options) {
      context.current.strokeStyle = options.color;
      context.current.lineWidth = options.brushSize;
    }
  }, [options]);

  const onMouseMove = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    mouse.current = { x: offsetX, y: offsetY };
    if (doDraw.current) {
      context.current.lineTo(mouse.current.x, mouse.current.y);
      context.current.stroke();
    }
  };

  const onMouseDown = () => {
    context.current.beginPath();
    context.current.moveTo(mouse.current.x, mouse.current.y);
    doDraw.current = true;
  };

  const onMouseUp = () => {
    doDraw.current = false;
  };

  return (
    <Paper className={classes.wrapper}>
      <canvas
        ref={canvas}
        onMouseUp={onMouseUp}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
      />
    </Paper>
  );
};

export default Board;
