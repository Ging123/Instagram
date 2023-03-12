import ConfirmationCodeForm from "./components/confirmation-code-form";
import HaveAnAccount from "../../components/have-an-account";

import GetTheApp from "../../components/get-the-app";
import styles from "./styles.module.scss";

const ConfirmationCodeScreen = () => {
  return (
    <main className={ styles.confirmation_code_page_wrapper }>
      <ConfirmationCodeForm/>
      <HaveAnAccount/>
      <GetTheApp/>
    </main>
  );
};

export default ConfirmationCodeScreen;