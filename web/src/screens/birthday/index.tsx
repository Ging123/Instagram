import HaveAnAccount from "../../components/navigations/have-an-account";
import BirthdayForm from "./components/birthday-form";

import GetTheApp from "../../components/navigations/get-the-app";
import styles from "./styles.module.scss";

const BirthdayScreen = () => {
  return (
    <main className={ styles.birthday_page_wrapper }>
      <BirthdayForm/>
      <HaveAnAccount/>
      <GetTheApp/>
    </main>
  );
};

export default BirthdayScreen;