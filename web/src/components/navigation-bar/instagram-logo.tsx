import useMediaQuery from "src/shared/hooks/useMediaQuery";
import styles from "./styles.module.scss";

import dynamic from "next/dynamic";

const Instagram = dynamic(() => import("../../../public/images/icons/instagram"));
const SmallLogo = dynamic(() => import("../../../public/images/small-logo"));

const Link = dynamic(() => import("next/link"));

const InstagramLogo = () => {
  const isDesktop = useMediaQuery("76.875rem");
  const Logo = isDesktop ? SmallLogo : Instagram;

  return (
    <h1 className={ styles.logo }>
      { isDesktop ? 
        <Logo/>
        : 
        <Link className={ styles.icon } href="/home">
          <Logo/>
        </Link>
      }
    </h1>
  );
};

export default InstagramLogo;