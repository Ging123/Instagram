import joinTwoStringsWithSpace from "../../../utils/joinTwoStringsWithSpace";
import { buttonType } from "../../../shared/types/input";

import styles from "./styles.module.scss";

interface Props {
  children?:React.ReactNode;
  className?:string;
  content?:string;
  onClick?:() => void;
  type:buttonType;
}

const Button = (props:Props) => {
  const className = joinTwoStringsWithSpace(styles.button, props.className);

  return (
    <button
      className={ className }
      type={ props.type }
      onClick={ props.onClick }
    >
      { props.children }
      { props.content }
    </button>
  );
};

export default Button;