import styles from "./styles.module.scss";
import Image from "next/image";

export type ChatProps = {
  image:string;
  lastMessage?:string;
  name:string;
  timeOfMessage?:string;
  username:string;
}

const Chat = (props:ChatProps) => {
  
  function combineLastMessageWithTime() {
    let { timeOfMessage, lastMessage } = props;
    if(!lastMessage) return "";

    if(!timeOfMessage) return lastMessage;
    const messageWithTime = `${lastMessage} · ${timeOfMessage}`;
    
    return messageWithTime;
  }

  const lastMessageWithTime = combineLastMessageWithTime();
  
  return (
    <div 
      className={ styles.single_chat_container }
    >

      <div className={ styles.chat_image }>
        <Image
          alt={ `${ props.name }'s perfil photo` }
          fill
          src={ props.image }
        />
      </div>

      <div className={ styles.chat_info }>
        <p className={ styles.chat_name }>
          { props.name }
        </p>

        <p className={ styles.chat_last_message }>
          { lastMessageWithTime }
        </p>
      </div>

    </div>
  );
};

export default Chat;