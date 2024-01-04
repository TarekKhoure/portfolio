import Social from "../Social";
import BioCard from "../BioCard";
import TimeLine from "../TimeLine";
import { forwardRef } from "react";
import ThemeToggle from "../ThemeToggle";
import ContactForm from "./ContactForm/ContactForm";

interface SidebarProps {
  setSideBarShow: (sideBarshown: boolean) => void;
}

const Sidebar = forwardRef<HTMLDivElement, SidebarProps>(
  ({ setSideBarShow }, ref) => {
    return (
      <aside ref={ref}>
        <ThemeToggle />
        <BioCard />
        <TimeLine setSideBarShow={setSideBarShow} />
        <Social />
        <ContactForm />
      </aside>
    );
  }
);

export default Sidebar;
