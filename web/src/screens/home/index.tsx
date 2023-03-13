import useMediaQuery from "../../shared/hooks/useMediaQuery";
import Sugestions from "./components/suggestions";

import dynamic from "next/dynamic";

const NavigationBar = dynamic(() => import("../../components/navigation-bar"));
const Header = dynamic(import("../../components/header"), { ssr:false });

const HomeScreen = () => {
  const isMobile = !useMediaQuery("45rem");

  return (
    <>

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

export default HomeScreen;