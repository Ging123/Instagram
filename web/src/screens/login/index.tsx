import DontHaveAccount from "./components/dont-have-account";
import useMediaQuery from "../../shared/hooks/useMediaQuery";

import GetTheApp from "../../components/navigations/get-the-app";
import LoginForm from "./components/login-form";

import CellPhone from "./components/cellphone";
import styles from "./styles.module.scss";

const LoginScreen = () => {
  const screenHaveSizeToCellphone = useMediaQuery("62.5rem");
  
  return (
    <main className={ styles.login_page_wrapper }>

      { screenHaveSizeToCellphone && <CellPhone/> }

      <section>
        <LoginForm/>
        <DontHaveAccount/>
        <GetTheApp/>
      </section>

    </main>
  );
};

export default LoginScreen;