import { useState, useEffect } from "react";

function useWindowWidth() {
  const [smallDevice, setSmallDevice] = useState(false);

  const resizeWindow = () => {
    setSmallDevice(window.innerWidth < 760);
  };

  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);

    return () => {
      window.removeEventListener("resize", resizeWindow);
    };
  });

  return smallDevice;
}

export default useWindowWidth;
