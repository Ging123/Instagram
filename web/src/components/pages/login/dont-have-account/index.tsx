import styles from "./styles.module.scss";
import Link from "next/link";

import Box from "../box";

const DontHaveAccount = () => {
  return (
    <Box className={ styles.dont_have_an_account }>
      <p>
        Don&#39;t have an account?
        <strong>
          <Link href="/signup">
            Sign in
          </Link>
        </strong>
      </p>
    </Box>
  );
};

export default DontHaveAccount;