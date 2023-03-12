import joinTwoStringsWithSpace from "../../utils/joinTwoStringsWithSpace";
import SearchIcon from "../../../public/images/icons/search-icon";

import { AiFillCloseCircle } from "react-icons/ai";

import styles from "./styles.module.scss";
import { useState } from "react";

type changeEvent = React.ChangeEvent<HTMLInputElement>;

interface props {
  className?:string;
  maxLength?:number;
  onChange:(e:changeEvent) => void;
  placeholder?:string;
  required?:boolean;
  type?:"text"|"search";
  value:string;
}

const SecundaryInput = (props:props) => {
  const className = joinTwoStringsWithSpace(styles.input_container, props.className);
  const [ focus, setFocus ] = useState(false);

  return (
    <div className={ className }>
      <input
        autoComplete="off"
        className={ styles.input }
        maxLength={ props.maxLength }
        onBlur={ () => setFocus(false) }
        onChange={ props.onChange }
        onFocus={ () => setFocus(true) }
        placeholder={ props.placeholder }
        style={ props.type === "search" && !focus ? { paddingLeft:"40px" } : {}}
        required={ props.required }
        type={ props.type }
        value={ props.value }
      />
      
      { props.type === "search" && !focus && 
        <div className={ styles.search_icon }>
          <SearchIcon/> 
        </div>
      }

      { props.type === "search" && focus && 
        <AiFillCloseCircle 
          className={ styles.close_icon }
        />
      }

    </div>
  );
};

export default SecundaryInput;