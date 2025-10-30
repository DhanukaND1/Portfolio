import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {

  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) { // show after 500px scroll
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://github.com/DhanukaND1" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <FaGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/dhanuka-nadiranga-a7b490356/" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <FaLinkedin size={24} />
        </a>
      </div>

      <p className="footer-text">&copy; {new Date().getFullYear()} Dhanuka Nadiranga. All rights reserved.</p>

      {showButton && (
        <button className="back-to-top" onClick={scrollToTop}>
          ↑ Back to Top
        </button>
      )}
    </footer>
  );
};

export default Footer;
