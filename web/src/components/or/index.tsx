import styles from "./styles.module.scss";

interface props {
  margin?:string;
}

const Or = (props:props) => {
  const customStyle = { margin:props.margin };
  return <div className={ styles.or } style={ customStyle }>OR</div>;
};

export default Or;