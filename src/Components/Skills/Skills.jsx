import { motion } from "framer-motion";
import {
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGamepad,
} from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { DiDotnet } from "react-icons/di";
import "./Skills.css";
import CSharp from "../../assets/CSharp_icon.png"

const skills = [
  { name: "C#", level: 95, icon: <img src={CSharp} alt="C#" className="skill-icon" />, color: "#68217A" },
  { name: "Game Development", level: 90, icon: <FaGamepad color="#00BFA6" />, color: "#00BFA6" },
  { name: "Java", level: 85, icon: <FaJava color="#E76F00" />, color: "#E76F00" },
  { name: "JavaScript", level: 80, icon: <SiJavascript color="#F7DF1E" />, color: "#F7DF1E" },
  { name: "Python", level: 70, icon: <FaPython color="#3776AB" />, color: "#3776AB" },
  { name: "React.js", level: 65, icon: <FaReact color="#61DAFB" />, color: "#61DAFB" },
  { name: "HTML", level: 60, icon: <FaHtml5 color="#E34F26" />, color: "#E34F26" },
  { name: "CSS / Tailwind", level: 55, icon: <FaCss3Alt color="#1572B6" />, color: "#1572B6" },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <motion.h2
        className="skills-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Technical Skills
      </motion.h2>

      <motion.p
        className="skills-intro"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        My main expertise lies in <strong>C#</strong> and <strong>game development</strong>, 
        supported by experience in software and web technologies.
      </motion.p>

      <div className="skills-list">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="skill-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            <div className="skill-header">
              <span className="skill-icon">{skill.icon}</span>
              <h4 className="skill-name">{skill.name}</h4>
              <span className="skill-level">{skill.level}%</span>
            </div>
            <div className="skill-bar-bg">
              <motion.div
                className="skill-bar-fill"
                style={{
                  background: skill.color,
                  boxShadow: `0 0 12px ${skill.color}`,
                }}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
