import clsx from "clsx";
import useStyles from "./style";
import Board from "../board";
import { useState } from "react";
import { Menu } from "@material-ui/icons";
import { IconButton, Drawer, Switch } from "@material-ui/core";

const App = () => {
  const classes = useStyles();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((s) => !s);
  };

  return (
    <div className="App">
      <div className={classes.iconHolder}>
        <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
          <div className={classes.drawer}>
            <div>
              Dark mode
              <Switch defaultChecked color="primary" />
            </div>
            <div>
              <span>Colors</span>
              <div className={classes.colorPaletteHolder}>
                <IconButton>
                  <span
                    className={classes.colorPalette}
                    style={{ backgroundColor: "#FF355E" }}
                  />
                </IconButton>
                <IconButton>
                  <span
                    className={classes.colorPalette}
                    style={{ backgroundColor: "#FFCC33" }}
                  />
                </IconButton>
                <IconButton>
                  <span
                    className={classes.colorPalette}
                    style={{ backgroundColor: "#CCFF00" }}
                  />
                </IconButton>
                <IconButton>
                  <span
                    className={classes.colorPalette}
                    style={{ backgroundColor: "#66FF66" }}
                  />
                </IconButton>
                <IconButton>
                  <span
                    className={classes.colorPalette}
                    style={{ backgroundColor: "#50BFE6" }}
                  />
                </IconButton>
                <IconButton>
                  <span
                    className={classes.colorPalette}
                    style={{ backgroundColor: "white" }}
                  />
                </IconButton>
              </div>
            </div>
            <div>
              <span>Brush size</span>
              <div className={classes.brushHolder}>
                <IconButton>
                  <span
                    style={{ backgroundColor: "#FF355E" }}
                    className={clsx(classes.circle, classes.diaSmall)}
                  />
                </IconButton>
                <IconButton>
                  <span
                    style={{ backgroundColor: "#FF355E" }}
                    className={clsx(classes.circle, classes.diaMedium)}
                  />
                </IconButton>
                <IconButton>
                  <span
                    style={{ backgroundColor: "#FF355E" }}
                    className={clsx(classes.circle, classes.diaLarge)}
                  />
                </IconButton>
                <IconButton>
                  <span
                    style={{ backgroundColor: "#FF355E" }}
                    className={clsx(classes.circle, classes.diaXLarge)}
                  />
                </IconButton>
              </div>
            </div>
          </div>
        </Drawer>
        <IconButton aria-label="menu" onClick={toggleDrawer}>
          <Menu />
        </IconButton>
      </div>
      <Board />
    </div>
  );
};

export default App;
