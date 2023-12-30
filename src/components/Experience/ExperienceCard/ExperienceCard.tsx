import { Experience } from "../../../sections/experience/experience";

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <div className="experience-card">
      <time>{experience.date}</time>
      <div className="project">
        <div className="position">
          <div>
            {experience.position.title}
            <span>• {experience.position.type}</span>
          </div>
          <div className="company">
            {experience.project.title} via {experience.project.company}
          </div>
        </div>
        <div className="info">{experience.summary}</div>
        <div className="stack">
          {experience.stack.map((item) => (
            <span key={`${experience.id}-${item}`}>{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
