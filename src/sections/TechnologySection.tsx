import { useEffect, useState } from "react";
import { toast } from "react-toastify";

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
      })
      .catch(() => {
        setLoading(false);
        toast.error("Failed to load technologies.");
      });
  }, []);

  function handleAdd(technology: Technology) {
    const alreadyAdded = selectedTechnologies.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    setSelectedTechnologies([
      ...selectedTechnologies,
      technology,
    ]);

    toast.success(`${technology.name} added to your stack.`);
  }

  function handleRemove(id: number) {
    const technology = selectedTechnologies.find(
      (item) => item.id === id
    );

    setSelectedTechnologies(
      selectedTechnologies.filter(
        (item) => item.id !== id
      )
    );

    if (technology) {
      toast.info(`${technology.name} removed from your stack.`);
    }
  }

  function handleRemoveAll() {
    setSelectedTechnologies([]);

    toast.info("All technologies removed from your stack.");
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
        <div className="loading-message">
          <div className="loading-spinner"></div>
          <p>Loading technologies...</p>
        </div>
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

          <Stack
            selectedTechnologies={selectedTechnologies}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      )}
    </section>
  );
}

export default TechnologySection;