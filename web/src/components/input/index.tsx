import joinTwoStringsWithSpace from "../../utils/joinTwoStringsWithSpace";
import PasswordVisibility from "./password-visibility";

import { inputType } from "../../../src/types/input";
import styles from "./styles.module.scss";

import { useState } from "react";

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

const Input = (props:props) => {
  const className = joinTwoStringsWithSpace(styles.container, props.className);
  const [ type, setType ] = useState(props.type || "text");

  const [ inputIsEmpty, setInputIsEmpty ] = useState(true);
  const isPasswordType = props.type === "password";

  function onChange(e:changeEvent) {
    props.onChange(e);
    const userWroteSomething = e.target.value;

    if(userWroteSomething) return setInputIsEmpty(false);
    setInputIsEmpty(true);
  }


  function addFocusIfSomethingWasWritten(className:string) {
    if(!inputIsEmpty) return `${ className } ${ styles.focus }`;
    return className;
  }


  return (
    <div className={ className }>
      <label 
        className={ addFocusIfSomethingWasWritten(styles.label) } 
        htmlFor={ props.id }
      >
        { props.placeholder }
      </label>

      <input
        autoComplete="off"
        className={ addFocusIfSomethingWasWritten(styles.input) }
        id={ props.id }
        maxLength={ props.maxLength }
        onChange={ onChange }
        required={ props.required }
        type={ type }
        value={ props.value }
      />

      { isPasswordType && !inputIsEmpty && 
        <PasswordVisibility 
          setType={ setType }
          type={ type }
        /> 
      }
    </div>
  );
};

export default Input;