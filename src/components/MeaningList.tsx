const MeaningList = ({ mean }: any) => {
  return (
    <div>
      {mean.map((val: any, index: number) =>
        val.meanings.map((means: any) => (
          <div className="pb-5" key={`${means.partOfSpeech}-${index}`}>
            <h4 className="text-xl font-bold">{means.partOfSpeech}</h4>
            {means.definitions.map((def: any) => (
              <li className="pb-2" key={def.definition}>
                {def.definition}
              </li>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default MeaningList;
