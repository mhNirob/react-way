import { useEffect, useState } from "react";

function LayoutComponent() {
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
    <div> you are browsing on a {smallDevice ? "small" : "large"} device </div>
  );
}

export default LayoutComponent;
