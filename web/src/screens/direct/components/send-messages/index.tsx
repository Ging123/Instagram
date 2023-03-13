import MessageSendCircle from "../../../../../public/images/icons/message-send-circle";
import Button from "../../../../components/button";

import styles from "./styles.module.scss";

const SendMessages = () => {
  return (
    <section className={ styles.container }>

      <MessageSendCircle/>
      
      <h3 className={ styles.title }>
        Your messages
      </h3>

      <p className={ styles.subtitle }>
        Send photos and private messages to a friend or group.
      </p>

      <Button
        content="Send a message"
        className={ styles.button }
        type="button"
      />
    </section>
  );
};

export default SendMessages;