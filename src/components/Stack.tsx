import type { Technology } from "../types";

type StackProps = {
  selectedTechnologies: Technology[];
  onRemove: (id: number) => void;
  onRemoveAll: () => void;
};

function Stack({
  selectedTechnologies,
  onRemove,
  onRemoveAll,
}: StackProps) {
  return (
    <aside className="stack" id="stack">
      <div className="stack-header">
        <div>
          <h2>Your Stack</h2>
          <p className="stack-subtitle">
            {selectedTechnologies.length} technologies selected.
          </p>
        </div>

        {selectedTechnologies.length > 0 && (
          <button
            className="remove-all-button"
            onClick={onRemoveAll}
          >
            Remove All
          </button>
        )}
      </div>

      {selectedTechnologies.length === 0 ? (
        <div className="empty-stack">
          <p>Your stack is empty.</p>
        </div>
      ) : (
        <div className="stack-items">
          {selectedTechnologies.map((technology) => (
            <div className="stack-item" key={technology.id}>
              <span className="stack-item-icon">
                <img
                  src={technology.icon}
                  alt={`${technology.name} logo`}
                />
              </span>

              <div className="stack-item-info">
                <strong>{technology.name}</strong>
                <span>{technology.category}</span>
              </div>

              <button
                className="remove-button"
                onClick={() => onRemove(technology.id)}
                aria-label={`Remove ${technology.name}`}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
}

export default Stack;