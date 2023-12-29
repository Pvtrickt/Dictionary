import { createContext, useState } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";
import ResultList from "./components/ResultList";
import SavedWordsProvider from "./components/SavedWordsProvider";

export const InputContext = createContext({});
export const CursorState = createContext({});

function App() {
  const [inputValue, setInputValue] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [onScreenContent, setOnScreenContent] = useState("maximiseSearchBar");

  return (
    <InputContext.Provider
      value={{
        inputValue,
        setInputValue,
        onScreenContent,
        setOnScreenContent,
      }}
    >
      <CursorState.Provider value={{ isHovered, setIsHovered }}>
        <SavedWordsProvider>
          <div className="bg-[#FBEAEB] font-PlexMono">
            <div className="h-screen overflow-auto w-screen flex flex-col justify-center items-center">
              <Searchbar />
              <ResultList />
            </div>
          </div>
        </SavedWordsProvider>
      </CursorState.Provider>
    </InputContext.Provider>
  );
}
export default App;
