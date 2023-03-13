import styles from "./styles.module.scss";
import { v4 as uuidv4 } from "uuid";

import { chats } from "./mock";
import Title from "./title";

import Chat from "./chat";

const Messages = () => {
  return (
    <nav className={ styles.container }>
      
      <Title/>

      <div className={ styles.chat_container }>
        { chats.map(chat => (
          <Chat
            {...chat}
            key={ uuidv4() }
          />
        ))}
      </div>

    </nav>
  );
};

export default Messages;