import styles from "./styles.module.scss";

interface props {
  margin?:string;
}

const Logo = (props:props) => {
  return (
    <h1 style={{ margin:props.margin }}>
      <div className={ styles.logo }/>
    </h1>
  );
};

export default Logo;