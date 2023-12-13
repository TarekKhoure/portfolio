import Social from "../Social";
import BioCard from "../BioCard";
import TimeLine from "../TimeLine";
import ThemeToggle from "../ThemeToggle";

const Sidebar = () => {
  return (
    <aside>
      <ThemeToggle />
      <BioCard />
      <TimeLine />
      <Social />
    </aside>
  );
};

export default Sidebar;
