import clsx from "clsx";
import useStyles from "./style";
import { useState, useEffect } from "react";
import { SETTINGS } from "../appsettings";
import { Menu as MuiMenu } from "@material-ui/icons";
import SvgIcon from "@material-ui/core/SvgIcon";
import {
  IconButton,
  Drawer,
  Switch,
  Slider,
  Button,
  Typography,
} from "@material-ui/core";

const Menu = (props) => {
  const classes = useStyles();
  const { onOptionChange, onThemeToggle, isDarkMode, onClearClick } = props;
  const eraserDefaultSize = 5;
  const colors = isDarkMode ? SETTINGS.COLORS.DARK : SETTINGS.COLORS.LIGHT;

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [eraserSelected, setEraserSelected] = useState(false);
  const [eraserSize, setEraserSize] = useState(eraserDefaultSize);
  const [selectedBrushSize, setSelectedBrushSize] = useState(
    SETTINGS.BRUSHES[0]
  );

  useEffect(() => {
    if (colors.indexOf(selectedColor) === -1) {
      setSelectedColor(colors[0]);
    }
    // eslint-disable-next-line
  }, [isDarkMode]);

  useEffect(() => {
    if (selectedColor && selectedBrushSize) {
      onOptionChange({
        color: selectedColor,
        brushSize: selectedBrushSize,
        eraserSize: eraserSize,
        eraserSelected: eraserSelected,
      });
    }
  }, [
    selectedColor,
    selectedBrushSize,
    onOptionChange,
    eraserSize,
    eraserSelected,
  ]);

  const toggleDrawer = () => {
    setIsDrawerOpen((s) => !s);
  };

  const onColorClick = (color) => {
    setSelectedColor(color);
  };

  const onBrushClick = (size) => {
    setSelectedBrushSize(size);
  };

  const onEraserClick = () => {
    setEraserSelected((s) => !s);
  };

  const EraserIcon = () => {
    return (
      <SvgIcon>
        <path d="M5.662 23l-5.369-5.365c-.195-.195-.293-.45-.293-.707 0-.256.098-.512.293-.707l14.929-14.928c.195-.194.451-.293.707-.293.255 0 .512.099.707.293l7.071 7.073c.196.195.293.451.293.708 0 .256-.097.511-.293.707l-11.216 11.219h5.514v2h-12.343zm3.657-2l-5.486-5.486-1.419 1.414 4.076 4.072h2.829zm6.605-17.581l-10.677 10.68 5.658 5.659 10.676-10.682-5.657-5.657z" />
      </SvgIcon>
    );
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
          <div className={classes.themeToggleWrapper}>
            <Typography className={classes.themeToggleLabel}>
              Dark mode
            </Typography>
            <Switch
              color="primary"
              checked={isDarkMode}
              onChange={onThemeToggle}
            />
          </div>
          <div>
            <Typography>Colors</Typography>
            <div className={classes.colorPaletteHolder}>
              {colors.map((color) => {
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
            <Typography>Brush size</Typography>
            <div className={classes.brushHolder}>
              {renderBrush(classes.diaSmall, SETTINGS.BRUSHES[0])}
              {renderBrush(classes.diaMedium, SETTINGS.BRUSHES[1])}
              {renderBrush(classes.diaLarge, SETTINGS.BRUSHES[2])}
              {renderBrush(classes.diaXLarge, SETTINGS.BRUSHES[3])}
            </div>
          </div>
          <div>
            <Typography>Eraser</Typography>
            <div className={classes.eraserWrapper}>
              <IconButton
                aria-label="menu"
                onClick={onEraserClick}
                className={eraserSelected && classes.eraserSelected}
              >
                <EraserIcon fontSize="sm" />
              </IconButton>
              <Slider
                min={1}
                max={10}
                step={1}
                defaultValue={eraserDefaultSize}
                valueLabelDisplay="auto"
                aria-labelledby="eraser-slider"
                className={classes.eraserSlider}
              />
            </div>
            <Button
              size="small"
              color="primary"
              variant="outlined"
              onClick={onClearClick}
              className={classes.clearBoard}
            >
              Clear Board
            </Button>
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
