import useStyles from "./style";
import Paper from "@material-ui/core/Paper";
import { useEffect, useRef } from "react";

const Board = (props) => {
  const classes = useStyles();
  const { options, lastCleared } = props;

  const canvas = useRef();
  const rootRef = useRef();
  const context = useRef();
  const doDraw = useRef(false);
  const mouse = useRef({ x: 0, y: 0 });
  const drawStart = useRef({ x: 0, y: 0 });

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

  useEffect(() => {
    const { width, height } = canvas.current;
    context.current.clearRect(0, 0, width, height);
  }, [lastCleared]);

  const onMouseMove = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    mouse.current = { x: offsetX, y: offsetY };
    if (doDraw.current) {
      if (options.eraserSelected) {
        const size = options.eraserSize;
        context.current.clearRect(mouse.current.x, mouse.current.y, size, size);
      } else {
        context.current.lineTo(offsetX, offsetY);
        context.current.stroke();
      }
    }
  };

  const onMouseDown = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    drawStart.current = { x: offsetX, y: offsetY };
    context.current.beginPath();
    context.current.moveTo(mouse.current.x, mouse.current.y);
    doDraw.current = true;
  };

  const onMouseUp = () => {
    doDraw.current = false;
    mouse.current = {};
    drawStart.current = {};
  };

  return (
    <Paper ref={rootRef} classes={{ root: classes.wrapper }}>
      <canvas
        ref={canvas}
        onMouseOut={onMouseUp}
        onMouseUp={onMouseUp}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
      />
    </Paper>
  );
};

export default Board;
