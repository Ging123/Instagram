import Sugestions from "../../screens/home/components/suggestions";
import useMediaQuery from "../../shared/hooks/useMediaQuery";

import dynamic from "next/dynamic";
import Head from "next/head";

const Header = dynamic(import("../../components/header"), { ssr:false });

const NavigationBar = dynamic(() => import("../../components/navigation-bar"));

const Home = () => {
  const isMobile = !useMediaQuery("45rem");

  return (
    <>

      <Head>
        <title>Instagram</title>
      </Head>

      
      <NavigationBar username="test123"/>
      { isMobile && <Header/> }
      
      
      <Sugestions
        users={[
          { 
            image:"/images/screenshots/chad.png",
            username:"Chad",
            fullname:"Just a test",
            followers:10000000,
            verified:true,
            isFollowing:false
          },
          { 
            image:"/images/screenshots/chad.png",
            username:"Chad",
            fullname:"Just a test",
            followers:10000000,
            verified:true,
            isFollowing:false
          },
          { 
            image:"/images/screenshots/chad.png",
            username:"Chad",
            fullname:"Just a test",
            followers:10000000,
            verified:true,
            isFollowing:false
          },
          { 
            image:"/images/screenshots/chad.png",
            username:"Chad",
            fullname:"Just a test",
            followers:10000000,
            verified:true,
            isFollowing:false
          },
        ]}
      />
      
    </>
  );
};

export default Home;