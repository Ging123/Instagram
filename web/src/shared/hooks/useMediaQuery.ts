import { useEffect, useState } from "react";

function useMediaQuery(minWidht:string) {
  const [ matchMediaQuery, setMatchMediaQuery ] = useState(false);
  const query = `(min-width:${minWidht})`;

  const updateMediaQuery = () => setMatchMediaQuery(window.matchMedia(query).matches);

  useEffect(() => {
    if(window) {
      window.addEventListener("resize", updateMediaQuery);
      setMatchMediaQuery(window.matchMedia(query).matches);
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return matchMediaQuery;
}

export default useMediaQuery;