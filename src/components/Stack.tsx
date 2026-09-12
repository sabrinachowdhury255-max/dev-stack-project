import type { Technology } from "../types";

type StackProps = {
  selectedTechnologies: Technology[];
};

function Stack({ selectedTechnologies }: StackProps) {
  return (
    <aside className="stack">
      <h2>Your Stack</h2>

      <p className="stack-subtitle">
        {selectedTechnologies.length} technologies selected.
      </p>

      {selectedTechnologies.length === 0 ? (
        <div className="empty-stack">
          <p>Your stack is empty.</p>
        </div>
      ) : (
        <div className="stack-items">
          {selectedTechnologies.map((technology) => (
            <div className="stack-item" key={technology.id}>
              <span className="stack-item-icon">
                {technology.icon}
              </span>

              <div className="stack-item-info">
                <strong>{technology.name}</strong>
                <span>{technology.category}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
}

export default Stack;