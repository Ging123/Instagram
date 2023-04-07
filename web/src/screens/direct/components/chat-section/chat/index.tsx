import ChatInput from "../../../../../components/inputs/chat-input";
import { MessageTypes } from "../../../../../shared/types/chat";

import styles from "./styles.module.scss";
import ChatContent from "./chat-content";

import ChatHeader from "./chat-header";
import mock from "./mock/chat-content";

import { useState } from "react";
import { UserProps } from "..";

type Props = {
  user:UserProps;
}

export type ChatMessageProps = {
  friendMessage:boolean;
  type:MessageTypes;
  message:string;
  date:Date;
}

const Chat = ({ user }:Props) => {
  const [ message, setMessage ] = useState("");

  return (
    <div className={ styles.chat_container }>

      <ChatHeader user={ user }/>
      <ChatContent contents={ mock }/>

      <ChatInput
        id="Send a message"
        onChange={ (e) => setMessage(e.target.value) }
        placeholder="Message..."
        value={ message }
      />
    </div>
  );
};

export default Chat;