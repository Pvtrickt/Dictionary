import { useSavedWordsInfo } from "./SavedWordsProvider";
import { InputContext } from "../App";
import DeleteSavedWord from "./DeleteSavedWord";
import { useContext } from "react";
import { CursorState } from "../App";

const SavedWords = () => {
  const { wordList, removeFromWordList } = useSavedWordsInfo();
  const { setInputValue }: any = useContext(InputContext);
  const { isHovered, setIsHovered }: any = useContext(CursorState);

  // const handleDelete = (savedItem: string) => {
  // removeFromWordList(savedItem);
  // };

  const handleSavedWordClick = (savedItem: any) => {
    setInputValue(savedItem);
  };

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const handleDeleteClick = (event: React.MouseEvent, savedItem: any) => {
    event.stopPropagation();

    removeFromWordList(savedItem);
  };

  return (
    <div>
      <div>
        <span className="text-2xl mt-3 underline">Your Saved Words:</span>
      </div>
      <ul>
        {wordList.map((savedItem: any, index: number) => (
          <li
            key={`${savedItem}-${index}`}
            className="flex flex-row w-full justify-between text-xl"
            onClick={() => handleSavedWordClick(savedItem)}
            style={{ cursor: isHovered ? "pointer" : "default" }}
            onMouseOut={handleMouseOut}
            onMouseOver={handleMouseOver}
          >
            <div></div>
            {savedItem}
            <DeleteSavedWord
              onDelete={(event: any) => handleDeleteClick(event, savedItem)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavedWords;
