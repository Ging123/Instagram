import SmallLogo from "../../../../public/images/small-logo";
import { MdKeyboardArrowDown } from "react-icons/md";

import styles from "./styles.module.scss";

const Logo = () => {
  return (
    <h1 className={ styles.logo_container }>
      <SmallLogo/>
      <MdKeyboardArrowDown
        className={ styles.logo_arrow_down }
      />
    </h1>
  );
};

export default Logo;