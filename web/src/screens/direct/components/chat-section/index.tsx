import SendMessage from "./SendMessage"; 
import dynamic from "next/dynamic";

const Chat = dynamic(() => import("./chat"));

export type UserProps = {
  image:string;
  username:string;
}

type Props = {
  chatIsOpen:boolean;
  user?:UserProps;
}

const ChatSection = ({ chatIsOpen, user }:Props) => {
  const friendChatIsOpen = chatIsOpen && user;

  return (
    <>
      { !chatIsOpen && <SendMessage/> }
      { friendChatIsOpen && <Chat user={ user }/> }
    </>
  );
};

export default ChatSection;