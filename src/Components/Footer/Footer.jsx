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
      // Show earlier on mobile (300px), 500px on larger screens
      const threshold =
        window.matchMedia("(max-width: 768px)").matches ? 300 : 500;
      setShowButton(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <footer className="footer">
        <div className="footer-icons">
          <a
            href="https://github.com/DhanukaND1"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/dhanuka-nadiranga-a7b490356/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        <p className="footer-text">
          &copy; {new Date().getFullYear()} Dhanuka Nadiranga. All rights
          reserved.
        </p>
      </footer>

      {showButton && (
        <button className="back-to-top" onClick={scrollToTop}>
          ↑ Back to Top
        </button>
      )}
    </>
  );
};

export default Footer;
