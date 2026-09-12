import { useEffect, useState } from "react";
import type { Technology } from "../types";

function TechnologySection() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/technologies.json")
      .then((response) => response.json())
      .then((data: Technology[]) => {
        setTechnologies(data);
        setLoading(false);
      });
  }, []);

  return (
    <section id="technologies">
      <h2>Technologies</h2>

      {loading ? (
        <p>Loading technologies...</p>
      ) : (
        <div>
          {technologies.map((technology) => (
            <p key={technology.id}>
              {technology.name} - {technology.category}
            </p>
          ))}
        </div>
      )}
    </section>
  );
}

export default TechnologySection;