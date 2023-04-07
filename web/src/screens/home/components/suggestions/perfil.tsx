import Button from "../../../../components/buttons/button";
import styles from "./styles.module.scss";

import Image from "next/image";
import { user } from ".";

type props = {
  data:user;
}

const Perfil = ({ data }:props) => {
  const quantityOfFollowersToBePopular = process.env.QUANTITY_OF_FOLLOWERS_TO_BE_POPULAR;
  const isPopular = data.followers > parseInt(quantityOfFollowersToBePopular || "100000");

  return (
    <div className={ styles.perfil_container }>

      <div className={ styles.perfil_image }>
        <Image
          alt={ `${ data.username }'s perfil photo` }
          fill
          src={ data.image }
        />
      </div>

      <div className={ styles.perfil_description }>
        <strong>
          { data.username }
        </strong>
        <p>{ data.fullname }</p>
        { isPopular && <small>Popular</small> }
      </div>

      <Button 
        className={ styles.follows_button }
        content="Follow"
        type="button"
      />

    </div>
  );
};

export default Perfil;