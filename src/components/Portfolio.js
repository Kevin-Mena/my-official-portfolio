import React, { useState, useEffect } from "react";
import AnimatedLetters from "./AnimatedLetters";
import { data } from "../data";
import Modal from "./Modal";
import { useGlobalContext } from "../context";

const Portfolio = () => {
  const [projects, setProjects] = useState(data);
  const { openProjectModal, showModal } = useGlobalContext();

  return (
    <div className="portfolio">
      {showModal && <Modal />}
      <h2 className="contact-me">PORTFOLIO</h2>
      <h3>Check Out Some of My Works.</h3>
      <p className="contact-info">
        <AnimatedLetters text=" If you like what you see and have a project you need coded, don’t hesitate to contact me." />
      </p>
      <div className="projects">
        {projects.map((project) => {
          const { id, image, name, title, descr } = project;

          return (
            <div className="project-container" key={id}>
              <img src={image} alt={name} className="project-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{descr}</p>
              <button onClick={() => openProjectModal(id)}>See Project</button>
              <Modal />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
