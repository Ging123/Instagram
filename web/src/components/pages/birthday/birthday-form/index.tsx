import Button from "../../../../components/button";
import Box from "../../../../components/box";

import styles from "./styles.module.scss";
import Selects from "./selects";

import Link from "next/link";

const BirthdayForm = () => {

  return (
    <Box className={ styles.birthday_form_container }>
      <form>
        <div className={ styles.cake_icon }/>
        
        <h1>Add your date of birth</h1>

        <p className={ styles.sub_title }>
          This will not be part of your public profile.
        </p>

        <button className={ styles.why_do_you_need }>
          Why do I need to provide my date of birth?
        </button>

        <Selects/>

        <p className={ styles.you_need_to_enter_your_birth_day }>
          You need to enter your date of birth
        </p>
        
        <p className={ styles.use_your_own_birth_day }>
          Use your own date of birth, whether that 
          account is for a business, a pet, or something else
        </p>

        <Button
          className={ styles.next_button }
          content="Next"
          type="button"
        />

        <Link className={ styles.back } href="/signup">
          Back
        </Link>
      </form>
    </Box>
  );
};

export default BirthdayForm;