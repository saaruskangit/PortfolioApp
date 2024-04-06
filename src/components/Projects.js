import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import canvasAppVideo from "../assets/videos/MatunMaalit.mp4"; // Tuodaan video
import vanillaCodeVideo from "../assets/videos/RescueCats.mp4";

const Projects = () => {
  return (
    <div className="projects container mt-5">
      <h2
        className="mb-4"
        style={{
          backgroundColor: "white",
          padding: "10px",
          textAlign: "center",
        }}
      >
        Projects
      </h2>
      <p
        style={{
          backgroundColor: "white",
          padding: "10px",
          textAlign: "center",
        }}
      >
        {" "}
        I dont have many projects yet, but here are two of those.
      </p>
      <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
        <Tab eventKey="home" title="Canvas app">
          <div>
            <h1>Canvas app</h1>
            <p style={{ fontWeight: "bold" }}>
              This is Canvas app made in Power platform. It was ordered by my
              son. :)
            </p>
            <video autoPlay controls style={{ width: "50%", height: "50%" }}>
              <source src={canvasAppVideo} type="video/mp4" />{" "}
            </video>
          </div>
        </Tab>
        <Tab eventKey="profile" title="Fullstack website">
          <div>
            <h1>Fullstack website</h1>
            <p style={{ fontWeight: "bold" }}>
              This was a project made in AW Academy training, we made a website
              with both frontend and backend.
            </p>
            <video autoPlay controls style={{ width: "100%", height: "100%" }}>
              <source src={vanillaCodeVideo} type="video/mp4" />{" "}
            </video>
          </div>
        </Tab>
      </Tabs>
      <br></br>
      <br></br>
    </div>
  );
};

export default Projects;
