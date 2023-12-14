import Social from "../Social";
import BioCard from "../BioCard";
import TimeLine from "../TimeLine";
import { forwardRef } from "react";
import ThemeToggle from "../ThemeToggle";

interface SidebarProps {}

const Sidebar = forwardRef<HTMLDivElement, SidebarProps>((props, ref) => {
  return (
    <aside ref={ref}>
      <ThemeToggle />
      <BioCard />
      <TimeLine />
      <Social />
    </aside>
  );
});

export default Sidebar;
