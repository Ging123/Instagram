import { ChatMessageProps } from "..";

const mock:ChatMessageProps[] = [
  {
    friendMessage: true,
    type: "text",
    message: "Hi there!",
    date: new Date("2022-01-01T12:00:00.000Z"),
  },
  {
    friendMessage: false,
    type: "text",
    message: "Hello! How are you?",
    date: new Date("2022-01-01T12:01:00.000Z"),
  },
  {
    friendMessage: true,
    type: "text",
    message: "I'm doing well, thanks. How about you?",
    date: new Date("2022-01-01T12:02:00.000Z"),
  },
  {
    friendMessage: false,
    type: "text",
    message: "I'm good too. Thanks for asking!",
    date: new Date("2022-02-01T12:03:00.000Z"),
  },
  {
    friendMessage: true,
    type: "text",
    message: "Great! Have a nice day!",
    date: new Date("2022-03-01T12:04:00.000Z"),
  },
  {
    friendMessage:true,
    type:"image",
    message: "/images/screenshots/chad.png",
    date: new Date("2022-04-01T12:04:00.000Z"),
  }
];

export default mock;