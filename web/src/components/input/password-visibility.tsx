import { Dispatch, SetStateAction } from "react";
import { inputType } from "src/types/input";

import styles from "./styles.module.scss";

interface props {
  type:inputType;
  setType:Dispatch<SetStateAction<inputType>>
}

const PasswordVisibility = ({ type, setType }:props) => {  
  const text = type === "password" ? "Show" : "Hide";
  
  function setPasswordVisibility() {
    setType(t => t === "password" ? "text" : "password");
  }

  return (
    <button 
      className={ styles.password_visibility_button }
      onClick={ setPasswordVisibility } 
      type="button"
    >
      { text }
    </button>
  );
};

export default PasswordVisibility;