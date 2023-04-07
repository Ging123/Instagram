import BigBox from "../../../../components/containers/big-box";
import Perfil from "./perfil";
import styles from "./styles.module.scss";

export interface user {
  image:string;
  username:string;
  fullname:string;
  followers:number;
  verified:boolean;
  isFollowing:boolean;
}
 
interface props {
  users:user[];
}

const Sugestions = ({ users }:props) => {

  return (
    <main className={ styles.home_suggestions_wrapper }>
      
      <h2 className={ styles.title }>
        Suggestions for you
      </h2>
      
      <BigBox className={ styles.box }>
        {
          users.map((data, index) => (
            <Perfil 
              data={ data }
              key={ index }
            />
          ))
        }
      </BigBox>
    </main>
  );
};

export default Sugestions;