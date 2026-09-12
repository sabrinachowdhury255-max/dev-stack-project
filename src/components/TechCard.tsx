import type { Technology } from "../types";

type TechCardProps = {
  technology: Technology;
  onAdd: (technology: Technology) => void;
  isAdded: boolean;
};

function TechCard({
  technology,
  onAdd,
  isAdded,
}: TechCardProps) {
  return (
    <article className="tech-card">
      <div className="tech-card-header">
        <div className="tech-logo">
          {technology.icon}
        </div>

        {technology.badge && (
          <span className="tech-badge">
            {technology.badge}
          </span>
        )}
      </div>

      <h3>{technology.name}</h3>

      <p className="tech-description">
        {technology.description}
      </p>

      <div className="tech-details">
        <span>{technology.category}</span>

        <span>{technology.difficulty}</span>

        <div className="tech-rating">
          <span className="stars">★</span>
          <span>{technology.rating}</span>
        </div>
      </div>

      <button
        className={`add-stack-button ${
          isAdded ? "added" : ""
        }`}
        onClick={() => onAdd(technology)}
        disabled={isAdded}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </article>
  );
}

export default TechCard;