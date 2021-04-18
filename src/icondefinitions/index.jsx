import useStyle from "./style";
import definitions from "./definitions.json";

const IconDefinitions = () => {
  const classes = useStyle();

  const renderSymbols = () => {
    return definitions.map((item) => {
      return (
        <symbol id={item.id} key={`icon-def-${item.id}`}>
          <g dangerouslySetInnerHTML={{ __html: item.data }} />
        </symbol>
      );
    });
  };

  return <svg className={classes.root}>{renderSymbols()}</svg>;
};

export default IconDefinitions;
