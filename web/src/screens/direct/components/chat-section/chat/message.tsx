import { compareDifference, minutesToMilliseconds } from "../../../../../utils/date";
import ImageModal from "../../../../../components/modals/image-modal";

import { MessageTypes } from "src/shared/types/chat";
import styles from "./styles.module.scss";

import { useState } from "react";
import Image from "next/image";

type Props = {
  message:string;
  type:MessageTypes;
  friendMessage:boolean;
}

const Message = ({ type, message, friendMessage }:Props) => {
  const messageType = friendMessage ? "friend" : "user";
  const [ imageOpen, setImageOpen ] = useState(false);

  return (
    <>
      {type === "text" &&
        <p className={ `${ styles.message } ${ styles[messageType] }` }>
          { message }
        </p>
      }

      {type === "image" &&
        <div className={ `${styles.image_message} ${ styles[messageType] }` }>
          <Image
            alt="Image"
            height={ 150 }
            onClick={() => setImageOpen(true) }
            src={ message }
            width={ 220 }
          />
          { imageOpen && 
            <ImageModal 
              close={ () => setImageOpen(false) }
              src={ message }
            /> 
          }
        </div>
      }
    </>
  );
};

export default Message;