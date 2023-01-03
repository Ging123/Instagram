import joinTwoStringsWithSpace from "../../utils/joinTwoStringsWithSpace";
import { inputType } from "../../../src/types/input";

import styles from "./styles.module.scss";

type changeEvent = React.ChangeEvent<HTMLInputElement>;

interface props {
  className?:string;
  id:string;
  maxLength?:number;
  onChange:(e:changeEvent) => void;
  placeholder?:string;
  required?:boolean;
  type?:inputType;
  value:string;
}

const SecundaryInput = (props:props) => {
  const className = joinTwoStringsWithSpace(styles.input, props.className);
  
  return (
    <input
      autoComplete="off"
      className={ className }
      id={ props.id }
      maxLength={ props.maxLength }
      onChange={ props.onChange }
      placeholder={ props.placeholder }
      required={ props.required }
      type={ props.type }
      value={ props.value }
    />
  );
};

export default SecundaryInput;