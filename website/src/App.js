import React from "react";
import Navbar from "./components/Navbar";
import HeadingSection from "./components/HeadingSection";
import ProjectSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillsSection";

function App() {
  return (
    <div className="font-montserrat text-zinc-900 font-medium">
      <Navbar />
      <HeadingSection />
      <SkillsSection />
      <ProjectSection />
    </div>
  );
}

export default App;
