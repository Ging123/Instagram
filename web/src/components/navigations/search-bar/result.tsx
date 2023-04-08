import styles from "./styles.module.scss";
import { RxCross2 } from "react-icons/rx";

import { SearchResult } from ".";
import Image from "next/image";

import Link from "next/link";

const Result = (props:SearchResult) => {
  return (
    <Link 
      className={ styles.search_result_contantainer }
      href={ `/profile/${ props.username }` }
    >
      <Image
        alt={ `${props.name} perfil picture` }
        height={ 50 }
        src={ props.image }
        width={ 50 }
      />

      <div className={ styles.result_info_container }>
        <strong className={ styles.username }>
          { props.username }
        </strong>
        <p className={ styles.name }>
          { props.name }
        </p>
      </div>

      <RxCross2 className={ styles.cross_icon }/>
    </Link>
  );
};

export default Result;