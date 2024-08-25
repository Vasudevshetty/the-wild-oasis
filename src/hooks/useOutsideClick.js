import { useEffect, useRef } from "react";

function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) handler();
      }
      function handleKeyDown(e) {
        if (e.key === "Escape") handler();
      }

      document.addEventListener("click", handleClick, listenCapturing);
      document.addEventListener("keydown", handleKeyDown, listenCapturing);

      return () => {
        document.removeEventListener("click", handleClick);
        document.removeEventListener("keydown", handleKeyDown);
      };
    },
    [handler, listenCapturing]
  );

  return ref;
}

export default useOutsideClick;
