const Pronounciation = ({ word }: any) => {
  return <div className="text-3xl flex items-center">{word[0].phonetic}</div>;
};

export default Pronounciation;
