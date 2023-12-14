import AboutSection from "../../sections/about";
import ContactSection from "../../sections/contact";
import ExperienceSection from "../../sections/experience";
import ThemeToggle from "../ThemeToggle";

const Content = () => {
  return (
    <div className="content">
      <ThemeToggle />
      <AboutSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
};

export default Content;
