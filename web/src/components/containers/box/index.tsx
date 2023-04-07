import joinTwoStringsWithSpace from "../../../utils/joinTwoStringsWithSpace";
import styles from "./styles.module.scss";

interface props {
  className?:string;
  children:React.ReactNode;
  testId?:string;
}

const Box = (props:props) => {
  const className = joinTwoStringsWithSpace(styles.white_box, props.className);
  
  return (
    <section className={ className } data-testid={ props.testId }>
      { props.children }
    </section>
  );
};

export default Box;