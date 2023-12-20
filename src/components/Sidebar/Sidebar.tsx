import Social from "../Social";
import BioCard from "../BioCard";
import TimeLine from "../TimeLine";
import { forwardRef } from "react";
import ThemeToggle from "../ThemeToggle";
import ContactForm from "./ContactForm/ContactForm";

interface SidebarProps {}

const Sidebar = forwardRef<HTMLDivElement, SidebarProps>((_, ref) => {
  return (
    <aside ref={ref}>
      <ThemeToggle />
      <BioCard />
      <TimeLine />
      <Social />
      <ContactForm />
    </aside>
  );
});

export default Sidebar;
