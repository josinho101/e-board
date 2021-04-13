import Board from "../board";
import Menu from "../menu";

const App = () => {
  const onOptionChange = (options) => {
    console.log(options);
  };

  return (
    <div>
      <Menu onOptionChange={onOptionChange} />
      <Board />
    </div>
  );
};

export default App;
