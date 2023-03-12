import styles from "./styles.module.scss";
import Image from "next/image";

import Link from "next/link";

type props = {
  onClick:() => void;
  url:string;
  username:string;
}

const UserImage = (props:props) => {

  return (
    <Link
      className={ styles.nav_link } 
      href="/profile"  
      onClick={ props.onClick }
    >
      <Image
        alt="User image"
        className={ styles.user_image }
        src={ props.url }
        height={ 24 }
        width={ 24 }
      />
      <p>{ props.username }</p>
    </Link>
  );
};

export default UserImage;