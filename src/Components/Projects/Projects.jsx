import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import "./Projects.css";

const projectList = [
  { id: 1, title: "Gem Hunter", type: "3D", image: project1 },
  { id: 2, title: "Clicky Crates", type: "2D", image: project2 },
  { id: 3, title: "Fruit Flip", type: "2D", image: project3 },
];

const categories = ["All", "2D", "3D"];

const Projects = () => {
  const [selected, setSelected] = useState("All");
  const navigate = useNavigate();

  const filtered =
    selected === "All"
      ? projectList
      : projectList.filter((p) => p.type === selected);

  const handleCardClick = (id) => {
    navigate(`/project/${id}`);
  };

  return (
    <section id="projects" className="projects-section">
      <motion.h2
        className="projects-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <div className="project-categories">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`category-btn ${selected === cat ? "active" : ""}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      <div className="project-grid">
        {filtered.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onClick={() => handleCardClick(project.id)}
          >
            <div className="project-image-wrapper">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <span>{project.type}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
