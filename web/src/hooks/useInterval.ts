import { useEffect, useRef } from "react";

function useInterval(callback:() => void, delay:number | null) {
  const intervalRef = useRef<any>();
  const callbackRef = useRef(callback);

  useEffect(() => {
    if(delay !== null) callbackRef.current = callback;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[callback]);

  useEffect(() => {
    if(typeof delay === "number") {
      intervalRef.current = window.setInterval(() => callbackRef.current(), delay);
    }
    
    return () => clearInterval(intervalRef.current);
  }, [delay]);
  
  return intervalRef;
}

export default useInterval;