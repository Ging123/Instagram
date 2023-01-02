import useInterval from "../../../../hooks/useInterval";
import styles from "./styles.module.scss";

import { useState } from "react";
import Image from "next/image";

const Screenshots = () => {
  const screenshots = [ "bully-maguire", "chad", "sonic", "computer-nerd-meme" ];
  const [ visible, setVisibility ] = useState(0);

  const [ delay ] = useState(5000);
  useInterval(changeImage, delay);

  const goToNextImg = () => setVisibility(visible + 1);
  const goToFirstImg = () => setVisibility(0);

  function changeImage() {
    const isNotInTheLastImage = visible < screenshots.length - 1;
    if(isNotInTheLastImage) return goToNextImg();
    return goToFirstImg();
  }

  function getClassName(screenshotIndex:number) {
    if(screenshotIndex !== visible) return styles.screenshot;
    return `${styles.screenshot} ${styles.visible}`;
  }

  return (
    <div>
      {screenshots.map((screenshot, index) => (
        <div className={ getClassName(index) } key={ index }>
          <Image
            alt="Some screenshot"
            fill
            src={ `/images/screenshots/${screenshot}.png` }
            style={{ objectFit:"cover" }}
          />
        </div>
      ))}
    </div>
  );
};

export default Screenshots;