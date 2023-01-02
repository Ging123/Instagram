import HaveAnAccount from "../components/pages/signup/have-an-account";
import SignupForm from "../components/pages/signup/sign-up-form";

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

      <section className={ styles.singup_page_wrapper }>
        <SignupForm/>
        <HaveAnAccount/>
        <GetTheApp/>
      </section>
    </>
  );
};

export default SignUpPage;