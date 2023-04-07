import SecundaryInput from "../../../../components/inputs/secundary_input";
import Button from "../../../../components/buttons/button";

import Box from "../../../../components/containers/box";
import styles from "./styles.module.scss";

import { useState } from "react";
import Link from "next/link";

const ConfirmationCodeForm = () => {
  const [ confirmationCode, setConfirmationCode ] = useState("");
  
  return (
    <Box className={ styles.confirmation_code_form_container }>
      <div className={ styles.message_icon }/>
      <h1>Enter confirmation code</h1>
      
      <p className={ styles.sub_title }>
        Enter the confirmation code that we sent to your email.
        <button className={ styles.re_send_code }>
          Resend code
        </button>
      </p>

      <form>
        <SecundaryInput
          className={ styles.input }
          onChange={ (e) => setConfirmationCode(e.currentTarget.value) }
          placeholder="Confirmation code"
          value={ confirmationCode }
        />
        <Button
          className={ styles.button }
          content="Next"
          type="submit"
        />
        <Link className={ styles.back } href="/birthday">
          Back
        </Link>
      </form>
      
    </Box>
  );
};

export default ConfirmationCodeForm;