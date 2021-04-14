import Menu from "../menu";
import Board from "../board";
import { theme } from "../theme";
import { useState } from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const App = () => {
  const [drawOptions, setDrawOptions] = useState({});
  const [appTheme, setAppTheme] = useState(theme);

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
    setAppTheme(darkTheme);
  };

  return (
    <ThemeProvider theme={appTheme}>
      <Menu onOptionChange={onOptionChange} onThemeToggle={onThemeToggle} />
      <Board options={drawOptions} />
    </ThemeProvider>
  );
};

export default App;
