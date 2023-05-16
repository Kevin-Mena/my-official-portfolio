import React from "react";

const Modal = ({ project, closeModal }) => {
  if (!project) {
    return null;
  }

  const { id, image, name, source, demo, descr } = project;

  return (
    <aside className="modal-overlay" onClick={closeModal}>
      <div className="modal-container">
        <button type="button" className="close-button" onClick={closeModal}>
          &times;
        </button>
        <img src={image} alt={name} className="modal-image" />
        <div className="modal-content" key={id}>
          <h4>{name}</h4>
          <p className="project-desc">{descr}</p>
          <div className="modal-buttons">
            <a
              href={demo}
              target="_blank"
              rel="noreferrer noopener"
              className="modal-button"
            >
              See Live
            </a>
            <a
              href={source}
              target="_blank"
              rel="noreferrer noopener"
              className="modal-button"
            >
              See Source
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
