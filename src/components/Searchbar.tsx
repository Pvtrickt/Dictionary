import { useContext, useState } from "react";
import { InputContext } from "../App";
import SavedWords from "./SavedWords";

const Searchbar = () => {
  const { setInputValue, onScreenContent, setOnScreenContent, response }: any =
    useContext(InputContext);

  const [value, setValue] = useState("");

  const handleInputChange = (e: any) => {
    setValue(e.target.value);
  };

  const handleInputKeyDown = (event: any) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setInputValue(value);
      setValue("");
    }
  };
  let display;

  const AccessSavedWords = () => {
    setOnScreenContent("savedWords");
  };

  const BackToSearch = () => {
    if (response) {
      setOnScreenContent("minimiseSearchBar");
    } else {
      setOnScreenContent("maximiseSearchBar");
    }
  };

  if (onScreenContent === "minimiseSearchBar") {
    // this will display the minimised version of the searchbar
    display = (
      <div className="mt-24">
        <div className="flex flex-row items-center">
          <div className="flex items-center justify-center p-10">
            <h3 className="text-xl">Okay, but what does&nbsp;</h3>
            <input
              type="text"
              placeholder="your word"
              value={value}
              className="w-50 text-center text-xl px-1 rounded"
              onChange={handleInputChange}
              onKeyDown={handleInputKeyDown}
            />
            <h3 className="text-xl">&nbsp;mean?</h3>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="border-2 border-[#4355ab] rounded-md p-2"
              onClick={AccessSavedWords}
            >
              <span>Your Saved Words</span>
            </button>
          </div>
        </div>
      </div>
    );
  } else if (onScreenContent === "maximiseSearchBar") {
    // this will display the "home screen" searchbar
    display = (
      <div className="text-[#4355ab] flex flex-col items-center justify-center gap-9 text-center">
        <div>
          <h1 className="text-6xl">Welcome.</h1>
          <h2 className="text-2xl mt-3">Looking for the meaning of a word?</h2>
        </div>
        <div className="flex">
          <h3 className="text-xl">What does&nbsp;</h3>
          <input
            type="text"
            placeholder="your word"
            value={value}
            className="w-50 text-center text-xl px-1 rounded"
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
          />
          <h3 className="text-xl">&nbsp;mean?</h3>
        </div>
        <div>
          <button
            className="border-2 border-[#4355ab] rounded-md p-2"
            onClick={AccessSavedWords}
          >
            <span>Your Saved Words</span>
          </button>
        </div>
      </div>
    );
  } else if (onScreenContent === "savedWords") {
    // this will display the saved list
    display = (
      <div>
        <SavedWords />
        <div className="mt-9 flex justify-center">
          <button
            className="border-2 border-[#4355ab] rounded-md p-2"
            onClick={BackToSearch}
          >
            <span>Back to search</span>
          </button>
        </div>
      </div>
    );
  }

  return <div className="text-[#4355ab] flex ">{display}</div>;
};

export default Searchbar;
