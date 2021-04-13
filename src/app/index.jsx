import style from "./style";
import Board from "../board";
import { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton, Drawer } from "@material-ui/core";

const App = () => {
  const classes = style();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((s) => !s);
  };

  return (
    <div className="App">
      <div className={classes.iconHolder}>
        <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
          <div className={classes.drawer}>{"Drawer items goes here!"}</div>
        </Drawer>
        <IconButton aria-label="menu" onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton>
      </div>
      <Board />
    </div>
  );
};

export default App;
