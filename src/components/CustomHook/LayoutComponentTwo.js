import { useEffect, useState } from "react";

function LayoutComponentTwo() {
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

  return (
    <div class={smallDevice ? "small" : "large"}>
      This is a Layout component
    </div>
  );
}

export default LayoutComponentTwo;
