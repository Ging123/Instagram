import Heart from "../../../../public/images/icons/heart";
import SecundaryInput from "../../inputs/secundary_input";

import styles from "./styles.module.scss";
import { useState } from "react";

import Link from "next/link";
import Logo from "./logo";

const Header = () => {
  const [ search, setSearch ] = useState("");

  return (
    <header className={ styles.header }>
      <Logo/>
      
      <nav className={ styles.nav_container }>

        <SecundaryInput 
          className={ styles.search_input }
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          type="search"
          value={ search }
        />

        <Link href="/notification">
          <Heart/>
        </Link>

      </nav>
    </header>
  );
};

export default Header;