import { useEffect, useState } from "react";

function usePageWidth() {
  const [ width, setWidth ] = useState(0);

  const updateWidth = () => setWidth(window.innerWidth);

  useEffect(() => {
    if(window) {
      window.addEventListener("resize", updateWidth);
      setWidth(window.innerWidth);
    }
  }, []);

  return width;
}

export default usePageWidth;