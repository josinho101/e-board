import Menu from "../menu";
import Board from "../board";
import { useState } from "react";
import { darkTheme, lightTheme } from "../theme";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const App = () => {
  const [drawOptions, setDrawOptions] = useState({});
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [boardLastCleared, setBoardLastCleared] = useState(Date.now());

  const onClearClick = () => {
    setBoardLastCleared(Date.now());
  };

  const onOptionChange = (options) => {
    if (
      drawOptions.color !== options.color ||
      drawOptions.brushSize !== options.brushSize
    ) {
      setDrawOptions(options);
    }
  };

  const onThemeToggle = (e, darkMode) => {
    setIsDarkMode(darkMode);
  };

  let theme = isDarkMode ? darkTheme : lightTheme;
  theme = createMuiTheme(theme);

  return (
    <ThemeProvider theme={theme}>
      <Menu
        isDarkMode={isDarkMode}
        onThemeToggle={onThemeToggle}
        onOptionChange={onOptionChange}
        onClearClick={onClearClick}
      />
      <Board options={drawOptions} lastCleared={boardLastCleared} />
    </ThemeProvider>
  );
};

export default App;
