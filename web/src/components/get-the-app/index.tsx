import styles from "./styles.module.scss";
import Image from "next/image";

import Link from "next/link";


const GetTheApp = () => {
  return (
    <section className={ styles.get_the_app }>
      <p>Get the app.</p>

      <Link target="_blank" href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D6DDB7A74-068F-4476-8689-8933DE01831F%26utm_content%3Dlo%26utm_medium%3Dbadge">
        <Image
          alt="Download instagram in the google play"
          src="/images/google-play-app.png"
          height={ 40 }
          width={ 125 }
        />
      </Link>
      
      <Link target="_blank" href="ms-windows-store://pdp/?productid=9nblggh5l9xt&referrer=appbadge&source=www.instagram.com&mode=mini&pos=0%2C0%2C1366%2C728">
        <Image
          alt="Download instagram in the windows store"
          src="/images/windows-app.png"
          height={ 40 }
          style={{ marginLeft:"7px" }}
          width={ 125 }
        />
      </Link>
    </section>
  );
};

export default GetTheApp;