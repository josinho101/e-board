import Menu from "../menu";
import Board from "../board";
import { theme } from "../theme";
import { useState } from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const App = () => {
  const [drawOptions, setDrawOptions] = useState({});
  const [appTheme, setAppTheme] = useState(theme);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const onOptionChange = (options) => {
    if (
      drawOptions.color !== options.color ||
      drawOptions.brushSize !== options.brushSize
    ) {
      setDrawOptions(options);
    }
  };

  const onThemeToggle = (e, darkMode) => {
    const darkTheme = createMuiTheme({
      ...appTheme,
      palette: {
        type: darkMode ? "dark" : "light",
      },
    });
    setIsDarkMode(darkMode);
    setAppTheme(darkTheme);
  };

  return (
    <ThemeProvider theme={appTheme}>
      <Menu
        isDarkMode={isDarkMode}
        onThemeToggle={onThemeToggle}
        onOptionChange={onOptionChange}
      />
      <Board options={drawOptions} />
    </ThemeProvider>
  );
};

export default App;
