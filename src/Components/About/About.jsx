import { motion } from "framer-motion";
import "./About.css";
import cvFile from "../../assets/Dhanuka Nadiranga.pdf";

const About = () => {
  return (
    <section id="about" className="about-section">
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
          I am a passionate aspiring <span className="highlight">game developer</span>, focused on
          crafting interactive and immersive experiences through thoughtful programming and design.
          I love building engaging mechanics, experimenting with new technologies, and turning
          creative concepts into playable worlds. My goal is to grow as a developer who blends logic,
          artistry, and innovation to make meaningful games.
        </p>
        <a 
          href={cvFile} 
          download="Dhanuka Nadiranga.pdf"
          className="download-btn"
        >
          Download CV
        </a>
      </motion.div>

      <motion.div
        className="about-glow"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      ></motion.div>
    </section>
  );
};

export default About;
