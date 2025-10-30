// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import About from "./Components/About/About.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import ProjectDetails from "./Components/ProjectsDetails/ProjectDetails.jsx"; // new page
import Skills from "./Components/Skills/Skills.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop.jsx";

function App() {
  return (
    <Router>
      <ScrollToTop />
      
      <Routes>
        
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <About />
              <Projects />
              <Skills />
              <Contact />
            </>
          }
        />

        {/* Project details page */}
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
