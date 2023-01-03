import joinTwoStringsWithSpace from "../../utils/joinTwoStringsWithSpace";
import styles from "./styles.module.scss";

import Options from "./options";

type changeEvent = React.ChangeEvent<HTMLSelectElement>;

interface props {
  className?:string;
  onChange:(e:changeEvent) => void;
  options:string[]|number[];
  optionsValuesIsNotIndex?:boolean;
  value:number|string;
}

const Select = (props:props) => {
  const className = joinTwoStringsWithSpace(styles.select, props.className);
  
  return (
    <select 
      className={ className }
      onChange={ props.onChange } 
      value={ props.value }
    >
      <Options
        options={ props.options }
        optionsValuesIsNotIndex={ props.optionsValuesIsNotIndex }
      />
    </select>
  );
};

export default Select;