import BirthdayForm from "../components/pages/birthday/birthday-form";
import HaveAnAccount from "../components/have-an-account";

import styles from "../pages-styles/birthday.module.scss";
import GetTheApp from "../components/getTheApp";

import Head from "next/head";

const Birthday = () => {
  return (
    <>
      <Head>
        <title>Sign up • Instagram</title>
      </Head>

      <main className={ styles.birthday_page_wrapper }>
        <BirthdayForm/>
        <HaveAnAccount/>
        <GetTheApp/>
      </main>
    </>
  );
};

export default Birthday;