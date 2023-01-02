import joinTwoStringsWithSpace from "../../utils/joinTwoStringsWithSpace";
import styles from "./styles.module.scss";

interface props {
  className?:string;
  id:string;
  label:string;
  onChange:() => void;
  value:boolean;
}

const Checkbox = (props:props) => {
  const className = joinTwoStringsWithSpace(styles.checkbox_container, props.className);
  
  function getCheckboxClassName() {
    if(props.value) return `${ styles.checkbox } ${ styles.checked }`;
    return styles.checkbox;
  }
  
  return (
    <div 
      className={ className } 
      onClick={ props.onChange }
      role="presentation"
    >
      <input 
        id={ props.id }
        type="checkbox"
        value={ `${props.value}` }
      />
      <span className={ getCheckboxClassName() }/>
      <label htmlFor={ props.id }>{ props.label }</label>
    </div>
  );
};

export default Checkbox;