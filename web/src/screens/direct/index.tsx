import ChatSection from "./components/chat-section";
import Messages from "./components/messages";

import styles from "./styles.module.scss";
import { useState } from "react";

const DirectScreen = () => {
  const [ chatIsOpen, setChatIsOpen ] = useState(true);

  return (
    <main className={ styles.main_container }>
      <section className={ styles.direct_container }>
        <Messages/>
        <ChatSection 
          user={{ image:"/images/screenshots/chad.png", username:"chad" }} 
          chatIsOpen={ chatIsOpen }
        />
      </section>
    </main>
  );
};

export default DirectScreen;