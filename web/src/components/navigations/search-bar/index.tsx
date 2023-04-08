import SecundaryInput from "@/components/inputs/secundary_input";
import styles from "./styles.module.scss";

import recents from "./mock/recents";
import { v4 as uuidv4 } from "uuid";

import { useState } from "react";
import Result from "./result";

export type SearchResult = {
  image:string;
  username:string;
  name:string;
  following:boolean;
}

const SearchBar = () => {
  const [ search, setSearch ] = useState("");

  return (
    <div className={ styles.search_bar_container }>
      
      <div className={ styles.search_container }>
        <h2>Search</h2>
        
        <SecundaryInput
          onChange={(e) => setSearch(e.target.value) }
          placeholder="Search"
          searchInputClass={ styles.search_icon }
          type="search"
          value={ search }
        />
      </div>

      <div className={ styles.results_container }>

        <div className={ styles.recents_action_container }>
          <strong className={ styles.recents_title }>
            Recents
          </strong>
          <button className={ styles.clean_all }>
            Clean all
          </button>
        </div>

        { recents.map(recent => (
          <Result { ...recent } key={ uuidv4() } />
        )) }
      </div>

    </div>
  );
};

export default SearchBar;