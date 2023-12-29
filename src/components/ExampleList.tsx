const ExampleList = ({ mean }: any) => {
  return (
    <div>
      {mean.map((val: any) =>
        val.meanings.map((means: any) =>
          means.definitions.map((def: any) => (
            <div key={def.example}>
              <li>{def.example}</li>
            </div>
          ))
        )
      )}
    </div>
  );
};

export default ExampleList;
