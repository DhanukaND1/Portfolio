import { motion } from "framer-motion";
import "./Hero.css";
import profile from "../../assets/profile.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="hero-title"
          >
            Hello, I'm <span className="highlight">Dhanuka Nadiranga</span>
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hero-subtitle"
          >
            I’m an aspiring <span className="accent">game developer</span>, passionate about programming, 
            creative design, and building immersive gameplay experiences.
          </motion.p>

          <div className="hero-buttons">
            <motion.a
              href="#projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="hero-button"
            >
              <p>View My Work</p>
            </motion.a>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="hero-button hero-contact"
            >
              <p>Get in Touch</p>
            </motion.a>
          </div>

          <div className="hero-social">
            <a href="https://github.com/DhanukaND1" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/dhanuka-nadiranga-a7b490356/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Image placeholder */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="image-placeholder">
            <img src={profile} alt="Dhanuka Nadiranga" className="profile-photo" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
