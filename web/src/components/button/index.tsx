import joinTwoStringsWithSpace from "../../utils/joinTwoStringsWithSpace";
import { buttonType } from "../../../src/types/input";

import styles from "./styles.module.scss";

interface props {
  className?:string;
  content?:string;
  onClick?:() => void;
  type:buttonType;
}

const Button = (props:props) => {
  const className = joinTwoStringsWithSpace(styles.button, props.className);

  return (
    <button
      className={ className }
      type={ props.type }
      onClick={ props.onClick }
    >
      { props.content }
    </button>
  );
};

export default Button;