import { useEffect, useState } from "react";
import type { Technology } from "../types";
import TechCard from "../components/TechCard";
import Stack from "../components/Stack";

function TechnologySection() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState<
    Technology[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/technologies.json")
      .then((response) => response.json())
      .then((data: Technology[]) => {
        setTechnologies(data);
        setLoading(false);
      });
  }, []);

  function handleAdd(technology: Technology) {
    const alreadyAdded = selectedTechnologies.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      return;
    }

    setSelectedTechnologies([
      ...selectedTechnologies,
      technology,
    ]);
  }

  return (
    <section className="technology-section" id="technologies">
      <div className="section-heading">
        <h2>Explore Technologies</h2>

        <p>
          Choose the technologies you want to include in your
          developer stack.
        </p>
      </div>

      {loading ? (
        <p className="loading-message">
          Loading technologies...
        </p>
      ) : (
        <div className="technology-layout">
          <div className="technology-grid">
            {technologies.map((technology) => (
              <TechCard
                key={technology.id}
                technology={technology}
                onAdd={handleAdd}
                isAdded={selectedTechnologies.some(
                  (item) => item.id === technology.id
                )}
              />
            ))}
          </div>

          <Stack selectedTechnologies={selectedTechnologies} />
        </div>
      )}
    </section>
  );
}

export default TechnologySection;