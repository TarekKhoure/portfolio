import { useState } from "react";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import MenuIcon from "../public/assets/svgs/menu-icon";

function App() {
  const [sideBarShown, setSideBarShown] = useState<boolean>(false);

  const handleClick = () => setSideBarShown((prevState) => !prevState);

  return (
    <div className={`app ${sideBarShown ? "shown" : ""}`}>
      <MenuIcon onClick={handleClick} />
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
