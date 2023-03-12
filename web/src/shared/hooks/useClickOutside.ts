import { useEffect, useRef } from "react";

type ClickOutsideHook = (ref: React.RefObject<HTMLElement>, handler: (event: MouseEvent) => void) => void;

export const useClickOutside: ClickOutsideHook = (ref, handler) => {
  const listener:any = useRef<(event: MouseEvent) => void>();

  useEffect(() => {
    listener.current = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener.current);

    return () => {
      document.removeEventListener("mousedown", listener.current);
    };
  }, [ref, handler]);
};
