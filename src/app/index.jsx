import Menu from "../menu";
import Board from "../board";
import { useState } from "react";

const App = () => {
  const [drawOptions, setDrawOptions] = useState({});

  const onOptionChange = (options) => {
    if (
      drawOptions.color !== options.color ||
      drawOptions.brushSize !== options.brushSize
    ) {
      setDrawOptions(options);
    }
  };

  return (
    <div>
      <Menu onOptionChange={onOptionChange} />
      <Board options={drawOptions} />
    </div>
  );
};

export default App;
