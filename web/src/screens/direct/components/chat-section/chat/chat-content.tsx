import { compareDifference, minutesToMilliseconds } from "@/utils/date";
import styles from "./styles.module.scss";

import { ChatMessageProps } from ".";
import { v4 as uuidv4 } from "uuid";

import Message from "./message";

type Props = {
  contents:ChatMessageProps[];
}

const ChatContent = ({ contents }:Props) => {

  function getPreviousMessageDate(index:number) {
    const prevMessage = index - 1;
    const thereIsAPrevMessage = contents[prevMessage];
    if(thereIsAPrevMessage) return contents[prevMessage].date;
  }

  function formatDateToChat(date:Date) {
    return date.toLocaleString(undefined, { timeZone: "UTC", hour12: false });
  }

  return (
    <div className={ styles.chat_content }>
      
      {
        contents.map((content, index) => {
          const message = content.friendMessage ? "friend" : "user";
          const previousMessageDate = getPreviousMessageDate(index);
          
          let hasMoreThanOneMinuteSinceTheLastMessage = false;

          if(previousMessageDate) {
            const oneMinute = minutesToMilliseconds(1);
            hasMoreThanOneMinuteSinceTheLastMessage = compareDifference(content.date, previousMessageDate, oneMinute);
          }

          return (
            <>
              { hasMoreThanOneMinuteSinceTheLastMessage &&
                <p className={ styles.message_date }>
                  { formatDateToChat(content.date) }
                </p>
              }

              <div 
                className={ `${styles.message_container} ${styles[message]}` } 
                key={ uuidv4() }
              > 
                <Message { ...content } />
              </div>
            </>
          );
        })
      }

    </div>
  );
};

export default ChatContent;