import Cursor from "../cursor";
import useStyles from "./style";
import Paper from "@material-ui/core/Paper";
import { useEffect, useRef, useState } from "react";
import { SETTINGS } from "../appsettings";

const Board = (props) => {
  const classes = useStyles();
  const { options, lastCleared } = props;
  const { SHAPES } = SETTINGS;

  const canvas = useRef();
  const rootRef = useRef();
  const context = useRef();
  const mouse = useRef({ x: 0, y: 0 });
  const drawStart = useRef({ x: 0, y: 0 });
  const doDraw = useRef(false);
  const [showCursor, setShowCursor] = useState(true);
  const [shapes, setShapes] = useState([]);

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
        drawShape(options.selectedShape, offsetX, offsetY);
      }
    }
  };

  const drawShape = (shape, lastX, lastY) => {
    switch (shape) {
      case SHAPES.RANDOM_DRAW:
        context.current.lineTo(lastX, lastY);
        context.current.stroke();
        break;
      case SHAPES.RECT_OUTLINE:
        const width = lastX - drawStart.current.x;
        const height = lastY - drawStart.current.y;
        const rect = renderRect();
        setShapes(rect);
        break;
      case SHAPES.CIRCLE_OUTLINE:
        break;
    }
  };

  const renderRect = () => {
    return (
      <div
        style={{
          width: 20,
          height: 20,
          left: 50,
          top: 50,
          position: "absolute",
          border: "1px solid white",
        }}
      ></div>
    );
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
      {/* <Cursor
        color={options.color}
        onCursorMove={onCursorMove}
        onCursorMouseUp={onMouseUp}
        onCursorMouseDown={onMouseDown}
      /> */}
      {shapes}
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
