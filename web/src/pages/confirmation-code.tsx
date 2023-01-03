import ConfirmationCodeForm from "../components/pages/confirmation-code/confirmation-code-form";
import styles from "../pages-styles/confirmation-code.module.scss";

import HaveAnAccount from "../components/have-an-account";
import GetTheApp from "../components/getTheApp";

import Head from "next/head";

const Birthday = () => {
  return (
    <>
      <Head>
        <title>Sign up • Instagram</title>
      </Head>

      <main className={ styles.confirmation_code_page_wrapper }>
        <ConfirmationCodeForm/>
        <HaveAnAccount/>
        <GetTheApp/>
      </main>
    </>
  );
};

export default Birthday;