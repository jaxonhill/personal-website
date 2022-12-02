import React from "react";
import Navbar from "./components/Navbar";
import HeadingSection from "./components/HeadingSection";
import ProjectSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillsSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-montserrat text-zinc-900 font-medium box-border">
      <Navbar />
      <div className="px-4 md:px-16 lg:px-32 2xl:px-48">
        <HeadingSection />
        <SkillsSection />
        <ProjectSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
