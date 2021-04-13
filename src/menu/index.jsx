import clsx from "clsx";
import useStyles from "./style";
import { useState, useEffect } from "react";
import { SETTINGS } from "../appsettings";
import { Menu as MuiMenu } from "@material-ui/icons";
import { IconButton, Drawer, Switch } from "@material-ui/core";

const Menu = (props) => {
  const classes = useStyles();
  const { onOptionChange } = props;

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(SETTINGS.COLORS[0]);
  const [selectedBrushSize, setSelectedBrushSize] = useState(
    SETTINGS.BRUSHES[0]
  );

  useEffect(() => {
    if (selectedColor && selectedBrushSize) {
      onOptionChange({ color: selectedColor, brushSize: selectedBrushSize });
    }
  }, [selectedColor, selectedBrushSize, onOptionChange]);

  const toggleDrawer = () => {
    setIsDrawerOpen((s) => !s);
  };

  const onColorClick = (color) => {
    setSelectedColor(color);
  };

  const onBrushClick = (size) => {
    setSelectedBrushSize(size);
  };

  const renderBrush = (cssClass, brushSize) => {
    return (
      <IconButton onClick={() => onBrushClick(brushSize)}>
        <span
          style={{ backgroundColor: selectedColor }}
          className={clsx(
            cssClass,
            classes.circle,
            selectedBrushSize === brushSize ? classes.selectedCircle : undefined
          )}
        />
      </IconButton>
    );
  };

  return (
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
              {SETTINGS.COLORS.map((color) => {
                return (
                  <IconButton
                    key={`color-key-${color}`}
                    onClick={() => onColorClick(color)}
                  >
                    <span
                      className={clsx(
                        classes.colorPalette,
                        selectedColor === color && classes.colorPaletteSelected
                      )}
                      style={{ backgroundColor: color }}
                    />
                  </IconButton>
                );
              })}
            </div>
          </div>
          <div>
            <span>Brush size</span>
            <div className={classes.brushHolder}>
              {renderBrush(classes.diaSmall, SETTINGS.BRUSHES[0])}
              {renderBrush(classes.diaMedium, SETTINGS.BRUSHES[1])}
              {renderBrush(classes.diaLarge, SETTINGS.BRUSHES[2])}
              {renderBrush(classes.diaXLarge, SETTINGS.BRUSHES[3])}
            </div>
          </div>
        </div>
      </Drawer>
      <IconButton aria-label="menu" onClick={toggleDrawer}>
        <MuiMenu />
      </IconButton>
    </div>
  );
};

export default Menu;
