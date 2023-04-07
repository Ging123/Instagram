import Mensager from "../../../../public/images/icons/mensager";
import Compass from "../../../../public/images/icons/compass";

import Search from "../../../../public/images/icons/search";
import Create from "../../../../public/images/icons/create";

import Video from "../../../../public/images/icons/video";
import Heart from "../../../../public/images/icons/heart";

import House from "../../../../public/images/icons/house";
import styles from "./styles.module.scss";

import { navigationType } from ".";
import dynamic from "next/dynamic";

const BoldMensager = dynamic(import("../../../../public/images/icons/bold-mensager"));
const BoldCompass = dynamic(import("../../../../public/images/icons/bold-compass"));

const BoldSearch = dynamic(import("../../../../public/images/icons/bold-search"));
const BoldCreate = dynamic(import("../../../../public/images/icons/bold-create"));

const BoldVideo = dynamic(import("../../../../public/images/icons/bold-video"));
const BoldHeart = dynamic(import("../../../../public/images/icons/bold-heart"));

const BoldHouse = dynamic(import("../../../../public/images/icons/bold-house"));

type sectionProps = {
  className:string;
  text:string;
  enabledIcon:React.ComponentType;
  disabledIcon:React.ComponentType;
  link:string;
  name:navigationType;
}

const sections:sectionProps[] = [
  {
    text:"Home page",
    enabledIcon:BoldHouse,
    disabledIcon:House,
    className:"",
    link:"/home",
    name:"home"
  },
  {
    text:"Search",
    enabledIcon:BoldSearch,
    className:styles.desktop_icon_only,
    disabledIcon:Search,
    link:"#",
    name:"search"
  },
  {
    text:"Explore",
    enabledIcon:BoldCompass,
    className:"",
    disabledIcon:Compass,
    link:"/explore",
    name:"explore"
  },
  {
    text:"Reels",
    enabledIcon:BoldVideo,
    className:"",
    disabledIcon:Video,
    link:"/reels",
    name:"reels"
  },
  {
    text:"Messages",
    enabledIcon:BoldMensager,
    className:"",
    disabledIcon:Mensager,
    link:"/direct",
    name:"mensage"
  },
  {
    text:"Notification",
    enabledIcon:BoldHeart,
    className:styles.desktop_icon_only,
    disabledIcon:Heart,
    link:"#",
    name:"notification"
  },
  {
    text:"Create",
    enabledIcon:BoldCreate,
    className:"",
    disabledIcon:Create,
    link:"#",
    name:"create"
  }
];

export default sections;