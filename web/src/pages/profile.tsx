import useMediaQuery from "../shared/hooks/useMediaQuery";

import dynamic from "next/dynamic";
import Head from "next/head";

const NavigationBar = dynamic(() => import("../components/navigations/navigation-bar"));
const Header = dynamic(import("../components/navigations/header"), { ssr:false });

export default function Login() {
  const isMobile = !useMediaQuery("45rem");

  return (
    <>
      <Head>
        <title>Test (@test123) | Instagram</title>
      </Head>

      <NavigationBar username="test123"/>
      { isMobile && <Header/> }

    </>
  );
}