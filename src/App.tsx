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
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<any>("");
  const [loading, setLoading] = useState(false);

  return (
    <InputContext.Provider
      value={{
        inputValue,
        setInputValue,
        onScreenContent,
        setOnScreenContent,
        response,
        setResponse,
        error,
        setError,
        loading,
        setLoading,
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
