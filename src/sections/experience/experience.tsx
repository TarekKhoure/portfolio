import { forwardRef } from "react";
import { experiences } from "../../../public/assets/data/experiences.json";
import ExperienceCard from "../../components/Experience/ExperienceCard";

export type Experience = {
  id: string;
  date: string;
  position: {
    title: string;
    type: string;
  };
  project: {
    title: string;
    company: string;
  };
  summary: string;
  stack: string[];
};

interface ExperienceSectionProps {}

const ExperienceSection = forwardRef<HTMLDivElement, ExperienceSectionProps>(
  (_, ref) => {
    return (
      <section id="experience" ref={ref}>
        <ul>
          {experiences.map((experience: Experience) => (
            <li key={experience.id}>
              <ExperienceCard experience={experience} />
            </li>
          ))}
        </ul>
      </section>
    );
  }
);

export default ExperienceSection;
