import SendMessages from "./components/send-messages";
import Messages from "./components/messages";

import styles from "./styles.module.scss";

const DirectScreen = () => {
  return (
    <main className={ styles.main_container }>
      <section className={ styles.direct_container }>
        <Messages/>
        <SendMessages/>
      </section>
    </main>
  );
};

export default DirectScreen;