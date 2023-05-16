import React from "react";
import { useGlobalContext } from "../context";

const Modal = () => {
  const { seeProject, closeModal } = useGlobalContext();

  const { image, title, name, desc } = seeProject;

  return (
    <aside className="modal-overlay">
      <div className="modal-container">
        <img src={image} alt={title} />
        <div className="modal-content">
          <h4>{title}</h4>
          <p>Project description: {desc}</p>
          <p>{name}</p>
          <a href="#" target="_blank" rel="noreferrer noopener">
            See Live:
          </a>
          <a href="#" target="_blank" rel="noreferrer noopener">
            See Source:
          </a>
          <button onClick={closeModal}></button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
