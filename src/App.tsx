import { throttle } from "lodash";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import { useEffect, useRef, useState } from "react";
import MenuIcon from "../public/assets/svgs/menu-icon";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  const [sideBarShown, setSideBarShown] = useState<boolean>(false);

  const sidebarRef: React.RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        sidebarRef.current &&
        !event.target.closest("#menu-icon") &&
        !sidebarRef.current.contains(event.target)
      ) {
        setSideBarShown(false);
      } else {
        setSideBarShown(true);
      }
    };

    const throttledHandleClickOutside = throttle(handleClickOutside, 300);

    document.addEventListener("click", throttledHandleClickOutside);

    return () => {
      document.removeEventListener("click", throttledHandleClickOutside);
    };
  }, []);

  return (
    <div className={`app ${sideBarShown ? "shown" : ""}`}>
      <MenuIcon onClick={() => setSideBarShown(true)} />
      <Sidebar ref={sidebarRef} />
      <Content />
      <SpeedInsights />
    </div>
  );
}

export default App;
