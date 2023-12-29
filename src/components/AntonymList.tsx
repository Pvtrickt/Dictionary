import { useContext } from "react";
import { InputContext } from "../App";
import { CursorState } from "../App";
const Antonymlist = ({ antonyms }: any) => {
  const { setInputValue }: any = useContext(InputContext);
  const { isHovered, setIsHovered }: any = useContext(CursorState);

  const handleAntonymClick = (antonyms: any) => {
    setInputValue(antonyms);
  };

  const handleMouseOver = () => {
    setIsHovered(true);
  };
  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <div className="columns-2">
      <ul className="">
        {antonyms.map((antonym: string, index: number) => (
          <li
            key={`${antonym}-${index}`}
            className="text-[#4355ab]  pb-2"
            onClick={() => handleAntonymClick(antonym)}
            style={{ cursor: isHovered ? "pointer" : "default" }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            {antonym}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Antonymlist;
