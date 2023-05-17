import React, { useState } from "react";
import AnimatedLetters from "./AnimatedLetters";
import { data } from "../data";
import Modal from "./Modal";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (id) => {
    setSelectedProject(data.find((project) => project.id === id));
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="portfolio">
      <h2 className="contact-me">PORTFOLIO</h2>
      <h3>Check Out Some of My Works.</h3>
      <p className="contact-info">
        <AnimatedLetters text=" If you like what you see and have a project you need coded, don’t hesitate to contact me." />
      </p>
      <div className="projects">
        {data.map((project) => {
          const { id, image, name } = project;
          return (
            <div className="project-container" key={id}>
              <div className="image-container">
                {" "}
                <img src={image} alt={name} className="project-img" />
              </div>
              <h4>{name}</h4>
              <button
                type="button"
                className="see-project"
                onClick={() => handleProjectClick(id)}
              >
                See Project
              </button>
            </div>
          );
        })}
      </div>

      {selectedProject && (
        <Modal project={selectedProject} closeModal={closeModal} />
      )}
    </div>
  );
};

export default Portfolio;
