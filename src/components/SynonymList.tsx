import { useContext } from "react";
import { InputContext } from "../App";
import { CursorState } from "../App";
const SynoymList = ({ synonyms }: any) => {
  const { setInputValue }: any = useContext(InputContext);
  const { isHovered, setIsHovered }: any = useContext(CursorState);

  const handleSynonymClick = (synonym: any) => {
    setInputValue(synonym);
  };

  const handleMouseOver = () => {
    setIsHovered(true);
  };
  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <div className="columns-2">
      <ul>
        {synonyms.map((synonym: string, index: number) => (
          <li
            className="text-[#4355ab] pb-2"
            key={index}
            onClick={() => handleSynonymClick(synonym)}
            style={{ cursor: isHovered ? "pointer" : "default" }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            {synonym}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SynoymList;
