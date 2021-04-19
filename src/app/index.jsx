import Menu from "../menu";
import Board from "../board";
import { useState, useCallback } from "react";
import IconDefinitions from "../icondefinitions";
import { darkTheme, lightTheme } from "../theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const App = () => {
  const [drawOptions, setDrawOptions] = useState({});
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [boardLastCleared, setBoardLastCleared] = useState(Date.now());

  const onClearClick = () => {
    setBoardLastCleared(Date.now());
  };

  const onOptionChange = useCallback((options) => {
    if (
      drawOptions.color !== options.color ||
      drawOptions.brushSize !== options.brushSize ||
      drawOptions.eraserSelected !== options.eraserSelected
    ) {
      setDrawOptions(options);
    }
  }, []);

  const onThemeToggle = (e, darkMode) => {
    setIsDarkMode(darkMode);
  };

  let theme = isDarkMode ? darkTheme : lightTheme;
  theme = createMuiTheme(theme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <IconDefinitions />
      <Menu
        isDarkMode={isDarkMode}
        onClearClick={onClearClick}
        onThemeToggle={onThemeToggle}
        onOptionChange={onOptionChange}
      />
      <Board options={drawOptions} lastCleared={boardLastCleared} />
    </ThemeProvider>
  );
};

export default App;
