import { IoIosArrowDown } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";

import styles from "./styles.module.scss";

const Title = () => {
  return (
    <div className={ styles.info_container }>
      <strong>test</strong>

      <IoIosArrowDown 
        color="#262626" 
        size={ 22 } 
      />

      <FaRegEdit 
        className={ styles.edit_icon }
        color="#262626" 
        size={ 22 } 
      />
    </div>
  );
};

export default Title;