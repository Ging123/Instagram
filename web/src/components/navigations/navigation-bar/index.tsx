import useMediaQuery from "src/shared/hooks/useMediaQuery";
import styles from "./styles.module.scss";

import navSections from "./nav-sections";
import MoreOptions from "./more-options";

import UserImage from "./user-image";
import { v4 as uuidv4 } from "uuid";

import dynamic from "next/dynamic";
import { useState } from "react";

import Link from "next/link";

const InstagramLogo = dynamic(import("./instagram-logo"));
const SearchBar = dynamic(import("../search-bar"));

export type navigationType = "home" | "search" | "explore" | "reels" | "mensage" | "notification" | "create" | "profile";

type Props = {
  username:string;
}

const NavigationBar = (props:Props) => {
  const hasLogo = useMediaQuery("45rem");
  const [ selectedSection, setSelectedSection ] = useState<navigationType>("home"); 

  const [ searchBarIsOpen, setSearchBarIsOpen ] = useState(false);

  function onClickLink(sectionName:navigationType) {
    setSelectedSection(sectionName);
    if(sectionName === "search") return setSearchBarIsOpen(true);
  }
  
  return (
    <nav className={ styles.nav_bar_container }>

      <main className={ styles.main_nav_container }>
        { hasLogo && <InstagramLogo/> }
        
        {
          navSections.map((section) => (
            <Link
              className={ `${ styles.nav_link } ${ section.className }` } 
              href={ section.link } 
              key={ uuidv4() }
              onClick={ () => onClickLink(section.name) }
            >
              <section.disabledIcon/>
              <p>{ section.text }</p>
            </Link>
          ))
        }

        <UserImage 
          onClick={ () => onClickLink("profile") }
          url="/images/user.jpg"
          username={ props.username }
        />
      </main>

      <MoreOptions/>

      { searchBarIsOpen && <SearchBar/> }
    </nav>
  );
};

export default NavigationBar;