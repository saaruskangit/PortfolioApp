import React from "react";
import PersonalInfo from "./components/PersonalInfo";
import EducationalBackground from "./components/EducationalBackground";
import Projects from "./components/Projects";
import WorkExperience from "./components/WorkExperience";

function App() {
  return (
    <div>
      <PersonalInfo />
      <EducationalBackground />
      <WorkExperience />
      <Projects />
    </div>
  );
}

export default App;
