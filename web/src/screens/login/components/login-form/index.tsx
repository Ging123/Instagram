import Button from "../../../../components/button";
import Input from "../../../../components/input";

import Logo from "../../../../components/logo";
import Or from "../../../../components/or";

import styles from "./styles.module.scss";
import Checkbox from "../../../../components/checkbox";

import { useState } from "react";
import Box from "../../../../components/box";

const LoginForm = () => {
  const [ login, setLogin ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ saveLoginInfo, setSaveLoginInfo ] = useState(false);

  return (
    <Box className={ styles.main_container }>
      <Logo margin="60px 0px 40px 0px"/>
      
      <form className={ styles.form }>
        <Input
          className={ styles.input }
          id="login"
          onChange={ (e) => setLogin(e.target.value) }
          placeholder="Phone number, username or email"
          value={ login }
        />
        <Input
          className={ styles.input }
          id="password"
          onChange={ (e) => setPassword(e.target.value) }
          placeholder="Password"
          type="password"
          value={ password }
        />
        <Checkbox
          className={ styles.checkbox }
          id="login-info-checkbox"
          label="Save login info"
          onChange={() => setSaveLoginInfo(!saveLoginInfo)}
          value={ saveLoginInfo }
        />
        <Button
          className={ styles.button }
          content="Login"
          type="submit"
        />

        <Or margin="20px 0px 15px 0px"/>
      </form>

      <strong className={ styles.login_with_facebook }>
        <span className={ styles.facebook_icon }/>
        Login with facebook
      </strong>

      <small className={ styles.forgot_your_password }>
        Forgot your password?
      </small>
    </Box>
  );
};

export default LoginForm;