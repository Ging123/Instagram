interface props {
  options:string[]|number[];
  optionsValuesIsNotIndex?:boolean;
}

const Options = ({ options, optionsValuesIsNotIndex }:props) => {
  return (
    <>
      { options.map((data, index) => (
        <option 
          key={ index }
          value={ optionsValuesIsNotIndex ? data : index } 
        >
          { data }
        </option>
    ))}
    </>
  );
};

export default Options;