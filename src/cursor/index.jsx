import useStyles from "./style";
import { useEffect, useState } from "react";

const Cursor = (props) => {
  const classes = useStyles();
  const { onCursorMove, onCursorMouseUp, onCursorMouseDown } = props;
  const [position, setPosition] = useState({ x: -50, y: -50 });

  useEffect(() => {
    document.addEventListener("mouseup", onMouseUp, false);
    document.addEventListener("mousemove", onMouseMove, false);
    document.addEventListener("mousedown", onMouseDown, false);
    return () => {
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
    };
  }, []);

  const onMouseDown = (e) => {
    onCursorMouseDown(e);
  };

  const onMouseUp = (e) => {
    onCursorMouseUp(e);
  };

  const onMouseMove = (e) => {
    const { clientX, clientY } = e;
    setPosition({ x: clientX, y: clientY });
    onCursorMove(clientX, clientY);
  };

  return (
    <svg
      viewBox="0 0 16 16"
      className={classes.root}
      style={{ left: position.x, top: position.y }}
    >
      <use href="#brush" />
    </svg>
  );
};

export default Cursor;
