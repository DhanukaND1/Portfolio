import { useParams, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { motion } from "framer-motion";
import './ProjectDetails.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import fruitflipVideo from "../../assets/fruit flip.mp4"

import gemhunterVideo from "../../assets/gem hunter.mp4"
import gemhunter1 from "../../assets/gemhunter1.png"
import gemhunter2 from "../../assets/gemhunter2.png"
import gemhunter3 from "../../assets/gemhunter3.png"

import clickycratesVideo from "../../assets/clicky crates.mp4"
import clickcrates1 from "../../assets/project2.png"
import clickcrates2 from "../../assets/clickycrates1.png"
import clickcrates3 from "../../assets/clickycrates2.png"

const projectList = [
  {
    id: 1,
    title: "Gem Hunter",
    type: "3D",
    media: [
      gemhunterVideo,
      gemhunter1,
      gemhunter2,
      gemhunter3,
    ],
    description: `My first 3D game project, built as a simple yet enjoyable exploration challenge. 
                  The player moves through a small 3D environment, collecting scattered gems across the ground. 
                  The goal is to gather every gem to complete the level. This project helped me learn the 
                  fundamentals of 3D game development, including object interaction, collision detection, 
                  lighting, and camera control. It was a great starting point for understanding Unity’s 
                  3D workflow and gameplay mechanics.`,
    link: "https://play.unity.com/en/games/86bfdaf6-7561-4cd9-b7ac-aab9e753384a/clicky-crates"
  },
  {
    id: 2,
    title: "Clicky Crates",
    type: "2D",
    media: [
      clickycratesVideo,
      clickcrates1,
      clickcrates2,
      clickcrates3,
    ],
    description: `A fast-paced 2D clicking game where crates appear randomly on the screen, 
                  and the player must click them to earn points before they disappear. Each level increases 
                  in speed and difficulty, challenging the player’s reflexes and timing. The game features 
                  simple, responsive controls, colorful visuals, and immediate feedback for each interaction. 
                  This project helped me practice Unity’s 2D mechanics, event handling, and scoring systems 
                  while creating an engaging and interactive gameplay experience.`,
    link: "https://play.unity.com/en/games/86bfdaf6-7561-4cd9-b7ac-aab9e753384a/clicky-crates"
  },
  {
    id: 3,
    title: "Fruit Flip",
    type: "2D",
    media: [
      fruitflipVideo,
      "/projects/adventure1.png",
      "/projects/adventure2.png",
      "/projects/adventure2.png",
    ],
    description: `A simple and colorful 2D memory-matching game designed to test focus and recall. 
                  The player flips cards on the board to uncover fruits, trying to find matching pairs within the 
                  fewest moves possible. Each successful match remains visible, while unmatched cards flip back. 
                  The game features smooth animations, light sound feedback, and an intuitive interface for a 
                  relaxing yet engaging experience.
                  This project strengthened my understanding of Unity’s 2D tools, sprite management, and C# scripting 
                  for game logic and UI interactions.`,
    link: "https://play.unity.com/en/games/a83c257f-f2f7-4761-a386-41373630cb47/fruit-flip",
  },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectList.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="not-found-container">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← Back
        </button>
        <p className="not-found">Project not found</p>
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
  };

  return (
    <motion.section
      className="project-details"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <motion.h2
        className="project-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {project.title}
      </motion.h2>

      <p className="project-type"><strong>Type:</strong> {project.type}</p>

      <motion.div
        className="project-carousel carousel"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Slider {...settings}>
          {project.media.map((item, index) =>
            item.endsWith(".mp4") ? (
              <video
                key={index}
                controls
                className="carousel-media"
                preload="metadata"
              >
                <source src={item} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                key={index}
                src={item}
                alt={`${project.title} screenshot ${index + 1}`}
                className="carousel-media"
              />
            )
          )}
        </Slider>
      </motion.div>

      <div className="project-description">{project.description}</div>
      <a href= {project.link} target="_blank" class="project-link">
        🎮 Play on Unity Play
      </a>
    </motion.section>
  );
};

export default ProjectDetails;
