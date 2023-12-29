import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useEffect, useState } from "react";
import { useSavedWordsInfo } from "./SavedWordsProvider";

const SaveWordsBtn = ({ savedWord }: any) => {
  const [toggleSaveIcon, setToggleSaveIcon] = useState(false);
  const { wordList, addToWordList, removeFromWordList } = useSavedWordsInfo();

  const handleToggle = () => {
    setToggleSaveIcon((prevToggled) => !prevToggled);
  };

  const handleAddToList = (savedWord: any) => {
    addToWordList(savedWord);
  };

  let saveIcon: any;

  if (toggleSaveIcon) {
    saveIcon = <BookmarkIcon fontSize="large" />;
  } else {
    saveIcon = <BookmarkBorderIcon fontSize="large" />;
  }

  //   this function is to check if it exist in local storage
  const isWordInLocalStorage = (savedWord: any) => {
    const storedArrayTwo = localStorage.getItem("savedItem");

    if (storedArrayTwo) {
      try {
        const parsedArrayTwo = JSON.parse(storedArrayTwo);
        // this line below returns a boonlean
        return parsedArrayTwo.includes(savedWord);
      } catch (error) {
        console.error("error pasring local stroage array", error);
        return false;
      }
    }
    return false;
  };

  useEffect(() => {
    localStorage.setItem("savedItem", JSON.stringify(wordList));
  }, [wordList]);

  useEffect(() => {
    if (toggleSaveIcon) {
      handleAddToList(savedWord);
    } else {
      removeFromWordList(savedWord);
    }
  }, [toggleSaveIcon]);

  //   this useEffect is mounted once and calls the isWordInLocalStorage function aboves is true or false
  useEffect(() => {
    isWordInLocalStorage(savedWord);
    if (isWordInLocalStorage(savedWord)) {
      setToggleSaveIcon(true);
    }
  }, []);

  return (
    <div>
      <button onClick={handleToggle}>{saveIcon}</button>
    </div>
  );
};

export default SaveWordsBtn;
