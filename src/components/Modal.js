import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ project, closeModal }) => {
  if (!project) {
    return null;
  }

  const { id, image, name, source, demo, descr } = project;

  const modalVariants = {
    hidden: {
      y: "-100%",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: {
      y: "100%",
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <AnimatePresence>
      <motion.aside
        className="modal-overlay"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={modalVariants}
        onClick={closeModal}
      >
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
      </motion.aside>
    </AnimatePresence>
  );
};

export default Modal;
