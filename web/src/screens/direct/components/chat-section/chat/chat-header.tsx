import { AiOutlineExclamationCircle } from "react-icons/ai";
import styles from "./styles.module.scss";

import Image from "next/image";
import { UserProps } from "..";

type Props = {
  user:UserProps;
}

const ChatHeader = ({ user }:Props) => {
  return (
    <div className={ styles.chat_header }>
      <div className={ styles.chat_header_info }>
        <div className={ styles.perfil_image }>
          <Image
            alt={ `Your friend ${user.username}` }
            src={ user.image }
            fill
          />
        </div>
        <strong>{ user.username }</strong>
      </div>

      <AiOutlineExclamationCircle
        className={ styles.exclamation }
        fontSize={ 25 }
      />
    </div>
  );
};

export default ChatHeader;