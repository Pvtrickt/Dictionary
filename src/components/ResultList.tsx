import { useContext, useEffect, useState } from "react";
import { InputContext } from "../App";
import axios from "axios";
import MeaningList from "./MeaningList";
import SynonymList from "./SynonymList";
import Antonymlist from "./AntonymList";
import Pronounciation from "./Pronounciation";
import SaveWordsBtn from "./SaveWordBtn";

axios.defaults.baseURL = "https://api.dictionaryapi.dev/api/v2/entries/en";

const ResultList = () => {
  const { inputValue, onScreenContent, setOnScreenContent }: any =
    useContext(InputContext);
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<any>("");
  const [loading, setLoading] = useState(false);

  const fetchData = async (param: any) => {
    try {
      setLoading(true);
      const res = await axios(`/${param}`);
      setOnScreenContent("minimiseSearchBar");
      setResponse(res.data);
      setError(null);
    } catch (err) {
      setError(err);
      setOnScreenContent("maximiseSearchBar");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (inputValue.length) {
      fetchData(inputValue);
    }
  }, [inputValue]);

  if (loading) {
    return <h1>loading...</h1>;
  }

  if (error) {
    return <h3>Your word does not exist 😢</h3>;
    // change this so sending them to an invalid word page
  }

  // function to turn their input into lowercase
  const lowerCase = inputValue.toLowerCase();

  if (response)
    return (
      <div>
        {response && onScreenContent !== "savedWords" && (
          <div className=" h-screen w-screen flex bg-[#FBEAEB]">
            <div className="text-[#4355ab] w-2/3 p-20">
              <div className="text-6xl border-b-2 border-b-[#4355ab] pb-5 flex flex-row gap-5">
                <h3>{lowerCase}</h3>
                <Pronounciation word={response} />
                <div>
                  <SaveWordsBtn savedWord={lowerCase} />
                </div>
              </div>

              <h4 className="text-2xl pb-3">Definitions</h4>
              <MeaningList mean={response} />
            </div>

            <div className=" border-l-[#4355ab] w-1/3 border-l-2 p-20 flex  flex-col space-y-5">
              <div>
                <h4 className="text-[#4355ab] text-3xl underline">Synonyms:</h4>
                <SynonymList synonyms={getSynonyms(response)} />
              </div>
              <div>
                <h4 className="text-[#4355ab] text-3xl underline">Antonyms:</h4>
                <Antonymlist antonyms={getAntonyms(response)} />
              </div>
            </div>
          </div>
        )}
      </div>
    );
};

const getSynonyms = (response: any) => {
  return response[0]?.meanings.reduce((acc: string[], meaning: any) => {
    acc.push(...meaning.synonyms);
    return acc;
  }, []);
};

const getAntonyms = (response: any) => {
  return response[0]?.meanings.reduce((acc: string[], meaning: any) => {
    acc.push(...meaning.antonyms);
    return acc;
  }, []);
};
export default ResultList;
