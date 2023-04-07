import useMediaQuery from "../../shared/hooks/useMediaQuery";
import DirectScreen from "../../screens/direct";

import dynamic from "next/dynamic";
import Head from "next/head";

const NavigationBar = dynamic(() => import("../../components/navigations/navigation-bar"));
const Header = dynamic(import("../../components/navigations/header"), { ssr:false });

const DirectPage = () => {
  const isMobile = !useMediaQuery("45rem");
  
  return (
    <>

      <Head>
        <title>Inbox • Chat</title>
      </Head>

      <NavigationBar username="test123"/>
      { isMobile && <Header/> }
      <DirectScreen/>
      
    </>
  );
};

export default DirectPage;