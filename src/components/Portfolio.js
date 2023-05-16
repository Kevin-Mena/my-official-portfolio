import React, { useState, useEffect } from "react";
import AnimatedLetters from "./AnimatedLetters";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";

const Portfolio = () => {
  const [projects, setProjects] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = projects.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, projects]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <div className="portfolio">
      {" "}
      <h2 className="contact-me">PORTFOLIO</h2>
      <h3>Check Out Some of My Works.</h3>
      <p className="contact-info">
        <AnimatedLetters text=" If you like what you see and have a project you need coded, don’t hesitate to contact me." />
      </p>
      <div className="projects">
        {projects.map((project, projectIndex) => {
          const { id, image, name, title, descr } = project;

          let position = "nextSlide";
          if (projectIndex === index) {
            position = "activeSlide";
          }
          if (
            projectIndex === index - 1 ||
            (index === 0 && projectIndex === projects.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="project-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{descr}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
