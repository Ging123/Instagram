import Button from "../../../../components/button";
import Input from "../../../../components/input";

import styles from "./styles.module.scss";
import Checkbox from "../../../checkbox";

import { useState } from "react";
import Box from "../box";

const LoginForm = () => {
  const [ login, setLogin ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ saveLoginInfo, setSaveLoginInfo ] = useState(false);

  return (
    <Box className={ styles.main_container }>
      <div className={ styles.logo }/>
      
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

        <div className={ styles.or }>OR</div>
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