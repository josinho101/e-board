import Cursor from "../cursor";
import useStyles from "./style";
import Paper from "@material-ui/core/Paper";
import { useEffect, useRef, useState } from "react";

const Board = (props) => {
  const classes = useStyles();
  const { options, lastCleared } = props;

  const canvas = useRef();
  const context = useRef();
  const mouse = useRef({ x: 0, y: 0 });
  const doDraw = useRef(false);
  const [showCursor, setShowCursor] = useState(true);

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
        context.current.lineTo(mouse.current.x, mouse.current.y);
        context.current.stroke();
      }
    }
  };

  const onCursorMove = (x, y) => {
    mouse.current = { x, y };
    if (doDraw.current) {
      if (options.eraserSelected) {
        const size = options.eraserSize;
        context.current.clearRect(mouse.current.x, mouse.current.y, size, size);
      } else {
        context.current.lineTo(mouse.current.x, mouse.current.y);
        context.current.stroke();
      }
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
    <Paper classes={{ root: classes.wrapper }}>
      {/* <Cursor
        color={options.color}
        onCursorMove={onCursorMove}
        onCursorMouseUp={onMouseUp}
        onCursorMouseDown={onMouseDown}
      /> */}
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
