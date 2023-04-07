import Box from "../../containers/box";
import styles from "./styles.module.scss";

import Link from "next/link";

const HaveAnAccount = () => {
  return (
    <Box className={ styles.have_an_account }>
      Have an account?&nbsp;
      <Link href="/">
        Login
      </Link>
    </Box>
  );
};

export default HaveAnAccount;