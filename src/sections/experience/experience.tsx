import { useMemo } from "react";
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

const ExperienceSection = () => {
  const experinces: Experience[] = useMemo(
    () => [
      {
        id: "1",
        date: "JAN 2023 — PRESENT",
        position: {
          title: "Frontend Developer",
          type: "Full Time",
        },
        project: {
          title: "Nokia",
          company: "Exalt Technologies",
        },
        summary:
          "Successfully translated design mockups into pixel-perfect, responsive\
        user interfaces ,ensured robustness through automated testing and\
        achieved a 2x improvement website performance",
        stack: [
          "HTML",
          "Javascript",
          "Module Stylus",
          "React",
          "Cypress",
          "Restfull API",
          "Git",
        ],
      },
      {
        id: "2",

        date: "JUL 2022 — JAN 2023",
        position: {
          title: "Frontend and Mobile Developer",
          type: "Full Time",
        },
        project: {
          title: "Turqat",
          company: "Exalt Technologies",
        },
        summary:
          "Successfully developed an admin panel website to manage employees with varying roles, \
          Consistently enhanced website performance, Actively engaged in collaborative discussions \
          with both the manager and the client, contributing valuable insights and shaping project \
          direction and achieved proficiency in mobile application development",
        stack: [
          "HTML",
          "Javascript",
          "CSS3",
          "React",
          "React Native",
          "Restfull API",
          "Git",
          "Firebase",
          "Service Workers",
        ],
      },
      {
        id: "3",

        date: "APR 2022 — JUL 2022",
        position: {
          title: "Frontend Developer",
          type: "Full Time",
        },
        project: {
          title: "Alfa Omega",
          company: "Exalt Technologies",
        },
        summary:
          "Drove feature innovation and bug resolution and Optimized website performance consistent",
        stack: ["HTML", "Javascript", "CSS3", "React", "Restfull API", "Git"],
      },
      {
        id: "4",

        date: "AUG 2021 — APR 2022",
        position: {
          title: "Fullstack Developer",
          type: "Part Time",
        },
        project: {
          title: "Vinsent",
          company: "Exalt Technologies",
        },
        summary:
          "Designed and developed high volume features for the mobile application and the store page, \
          facilitated productive discussions with clients on features and requirements, ensuring alignment\
          between project deliverables and client expectations, ensured product reliability by unit testing \
          and end to end testing and successfully overhauled legacy feature codes, significantly boosting \
          performance and efficiency",
        stack: [
          "HTML",
          "Javascript",
          "CSS3",
          "React",
          "React Native",
          "Node JS",
          "Restfull API",
          "Git",
        ],
      },
    ],
    []
  );

  return (
    <section id="experience">
      {experinces.map((experience) => (
        <ExperienceCard experience={experience} key={experience.id} />
      ))}
    </section>
  );
};

export default ExperienceSection;
