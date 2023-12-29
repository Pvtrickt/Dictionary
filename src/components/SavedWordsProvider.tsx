import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

export const SavedWordsInfo = createContext<any>(null);

const SavedWordsProvider = ({ children }: any) => {
  const [wordList, setWordList] = useState<string[]>([]);

  //   This is to prevent duplicates by checking if it exist in array alr
  const addToWordList = (value: string) => {
    setWordList((prevList) => {
      if (!prevList.includes(value)) {
        return [...prevList, value];
      } else {
        return prevList;
      }
    });
    // the spread operator ... makes it push the prevList into the array (wordList)
  };

  const removeFromWordList = (value: string) => {
    setWordList((prevList) => prevList.filter((word) => word !== value));
  };

  useEffect(() => {
    const storedArray = localStorage.getItem("savedItem");

    if (storedArray) {
      try {
        const parsedArray = JSON.parse(storedArray);
        if (Array.isArray(parsedArray) && parsedArray.length > 0) {
          setWordList(parsedArray);
        }
      } catch (error) {
        console.error("error parsing local storage", error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("savedItem", JSON.stringify(wordList));
  }, [wordList]);
  //   this function will act when theres a change in the wordlist and save wordlist into the local storage

  return (
    <SavedWordsInfo.Provider
      value={{ wordList, addToWordList, removeFromWordList }}
    >
      {children}
    </SavedWordsInfo.Provider>
  );
};

export const useSavedWordsInfo = () => {
  return useContext(SavedWordsInfo);
};

export default SavedWordsProvider;
