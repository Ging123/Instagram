import HaveAnAccount from "../../components/have-an-account";
import GetTheApp from "../../components/get-the-app";

import SignupForm from "./components/sign-up-form";
import styles from "./styles.module.scss";

const SignupScreen = () => {
  return (
    <main className={ styles.singup_page_wrapper }>
      <SignupForm/>
      <HaveAnAccount/>
      <GetTheApp/>
    </main>
  );
};

export default SignupScreen;