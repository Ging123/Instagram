import DontHaveAccount from "../components/pages/login/dont-have-account";
import LoginForm from "../components/pages/login/login-form";

import GetTheApp from "../components/pages/login/getTheApp";
import CellPhone from "../components/pages/login/cellphone";

import styles from "../pages-styles/login.module.scss";
import useMediaQuery from "../hooks/useMediaQuery";

import Head from "next/head";

export default function Login() {
  const screenHaveSizeToCellphone = useMediaQuery("62.5rem");

  return (
    <>
      <Head>
        <title>Instagram</title>
      </Head>

      <main className={ styles.login_page_wrapper }>

        { screenHaveSizeToCellphone && <CellPhone/> }

        <section>
          <LoginForm/>
          <DontHaveAccount/>
          <GetTheApp/>
        </section>

      </main>
    </>
  );
}