import BallomWithExclamation from "../../../../public/images/icons/ballom-with-exclamation";
import Configuration from "../../../../public/images/icons/configuration";

import ThreeBars from "../../../../public/images/icons/three-bars";
import {useClickOutside} from "src/shared/hooks/useClickOutside";

import Flag from "../../../../public/images/icons/flag";
import Moom from "../../../../public/images/icons/moon";

import styles from "./styles.module.scss";
import { useRef, useState } from "react";

import { v4 as uuidv4 } from "uuid";
import dynamic from "next/dynamic";

import Link from "next/link";

const BoldThreeBars = dynamic(() => import("../../../../public/images/icons/bold-three-bars"));

const options = [
  {
    title:"Configurations",
    link:"configurations",
    icon:Configuration
  },
  {
    title:"Saved",
    link:"#",
    icon:Flag
  },
  {
    title:"Change mode",
    link:"#",
    icon:Moom
  },
  {
    title:"Report a problem",
    link:"#",
    icon:BallomWithExclamation
  },
  {
    title:"Switch account",
    link:"#",
    style:{ marginTop:"5px" }
  },
  {
    title:"Logout",
    link:"#"
  },
];

const MoreOptions = () => {
  const [ open, setOpen ] = useState(false);
  const className = `${ styles.nav_link } ${ styles.more }`;

  const ref = useRef<any>(null);
  const active = open ? styles.active : false;

  useClickOutside(ref, () => setOpen(false));

  return (
    <div className={ styles.more_container } ref={ ref }>
      <Link
        className={ `${ className } ` } 
        href="#"
        onClick={ () => setOpen(!open) }
      >
        { open ? <BoldThreeBars/> : <ThreeBars/> }
        <p className={`${ active }`}>More</p>
      </Link>

      {
        open && 
        <ul className={ styles.more_options_container }>
          { options.map((option) => (
            <li key={ uuidv4() } style={ option.style || {} }>
              { option.title }
            </li>
          ))}
        </ul>
      }

    </div>
  );
};

export default MoreOptions;