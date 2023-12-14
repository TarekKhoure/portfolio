import { useEffect, useRef, useState } from "react";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import { throttle } from "lodash";
import MenuIcon from "../public/assets/svgs/menu-icon";

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
    </div>
  );
}

export default App;
