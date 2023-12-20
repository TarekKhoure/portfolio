import ThemeToggle from "../ThemeToggle";
import AboutSection from "../../sections/about";
// import ExperienceSection from "../../sections/experience";

const Content = () => {
  return (
    <div className="content">
      <ThemeToggle />
      <AboutSection />
      {/* <ExperienceSection /> */}
    </div>
  );
};

export default Content;
