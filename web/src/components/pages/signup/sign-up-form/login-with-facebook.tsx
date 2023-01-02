import Button from "../../../../components/button";
import styles from "./styles.module.scss";

const LoginWithFacebook = () => {
  return (
    <Button
      className={ styles.login_with_facebook } 
      type="button"
    >
      <span className={ styles.facebook_icon }/>
      Login with facebook
    </Button>
  );
};

export default LoginWithFacebook;