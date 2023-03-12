import LoginWithFacebook from "./login-with-facebook";
import Button from "../../../../components/button";

import Input from "../../../../components/input";
import Logo from "../../../../components/logo";

import Box from "../../../../components/box";
import Or from "../../../../components/or";

import styles from "./styles.module.scss";
import { useState } from "react";

import Link from "next/link";

const SignupForm = () => {
  const [ emailOrNumber, setEmailOrNumber ] = useState("");
  const [ name, setName ] = useState("");

  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");

  return (
    <Box className={ styles.sign_up_box_form_container }>
      <Logo margin="60px 0px 20px 0px"/>

      <p className={ styles.sub_title }>
        Sign up to see your friends&#39; photos and videos.
      </p>

      <form className={ styles.signup_form }>
        <LoginWithFacebook/>
        <Or margin="20px 0px 15px 0px"/>

        <Input
          id="phone-number-or-email"
          onChange={ (e) => setEmailOrNumber(e.currentTarget.value) }
          placeholder="Phone number or email"
          value={ emailOrNumber }
        />
        <Input
          className={ styles.input }
          id="name"
          onChange={ (e) => setName(e.currentTarget.value) }
          placeholder="Full name"
          value={ name }
        />
        <Input
          className={ styles.input }
          id="username"
          onChange={ (e) => setUsername(e.currentTarget.value) }
          placeholder="Username"
          value={ username }
        />
        <Input
          className={ styles.input }
          id="password"
          onChange={ (e) => setPassword(e.currentTarget.value) }
          placeholder="Password"
          type="password"
          value={ password }
        />

        <p>
          People using our service may have uploaded their contact 
          information to Instagram.&nbsp;
          <Link 
            href="https://www.facebook.com/help/instagram/261704639352628"
            target="_blank"
          >
            Know more
          </Link>
        </p>

        <p>
          By registering, you agree to&nbsp; 
          <Link href="https://help.instagram.com/581066165581870/?locale=pt_BR" target="_blank">
            our Terms,&nbsp;
          </Link>
          <Link href="https://www.facebook.com/privacy/policy" target="_blank">
            Privacy Policy 
          </Link>
          <Link href="https://help.instagram.com/1896641480634370/" target="_blank">
            and Cookie Policy.
          </Link>
        </p>

        <Button
          content="Sign up"
          className={ styles.sign_up_button }
          type="submit"
        />
      </form>
      
    </Box>
  );
};


export default SignupForm;