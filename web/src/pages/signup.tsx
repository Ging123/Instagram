import SignupForm from "../components/pages/signup/sign-up-form";
import HaveAnAccount from "../components/have-an-account";

import styles from "../pages-styles/signup.module.scss";
import GetTheApp from "../components/getTheApp";

import Head from "next/head";
import React from "react";

const SignUpPage = () => {
  return (
    <>
      <Head>
        <title>Sign up • Instagram</title>
      </Head>

      <main className={ styles.singup_page_wrapper }>
        <SignupForm/>
        <HaveAnAccount/>
        <GetTheApp/>
      </main>
    </>
  );
};

export default SignUpPage;