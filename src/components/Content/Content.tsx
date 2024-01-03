import ThemeToggle from "../ThemeToggle";
import AboutSection from "../../sections/about";
import ExperienceSection from "../../sections/experience";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Content = () => {
  const { ref: aboutRef, inView: aboutVisible } = useInView();
  const { ref: experienceRef, inView: experienceVisible } = useInView();

  useEffect(() => {
    if ((experienceVisible && aboutVisible) || aboutVisible) {
      document.documentElement.classList.add("about-visible");
      document.documentElement.classList.remove("experience-visible");
    } else if (experienceVisible) {
      document.documentElement.classList.remove("about-visible");
      document.documentElement.classList.add("experience-visible");
    }
  }, [experienceVisible, aboutVisible]);

  return (
    <div className="content">
      <ThemeToggle />
      <AboutSection ref={aboutRef} />
      <ExperienceSection ref={experienceRef} />
    </div>
  );
};

export default Content;
