import styles from "./styles.module.scss";
import Screenshots from "./screenshots";

import Image from "next/image";

const CellPhone = () => {

  return (
    <div className={ styles.cellphone_container }>
      <Image
        alt="Cellphone"
        height={ 600 }
        src="/images/cellphone.png"
        width={ 500 }
      />
      <Screenshots/>
    </div>
  );
};

export default CellPhone;