import React, { useContext, useState } from "react";
import { data } from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [projects, setProjects] = useState(data);
  const [seeProject, setSeeProject] = useState(null);

  const openProjectModal = (id) => {
    let project;
    project = projects.find((project) => project.id === id);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <AppContext.Provider
      value={{
        showModal,
        closeModal,
        openProjectModal,
        seeProject,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
