import React, { useState } from "react";
import noProjectImage from "../assets/no-projects.png";
import CreateProject from "./CreateProject";
import Projects from "./Projects";

const Content = () => {
  const [createNewProject, setCreateNewProject] = useState(false);
  const [projectList, setProjectList] = useState([]);

const handleCreateProject = (newProject) => {
  setProjectList((prev) => [...prev, newProject]);
  setCreateNewProject(false);
};

  if (projectList.length > 0) {
    return <Projects projectList={projectList} />;
  }

  if (createNewProject) {
    return <CreateProject onCreate={handleCreateProject} />;
  }

  return (
    <div class="flex flex-col justify-center items-center w-dvw pb-40">
          <img
            src={noProjectImage}
            alt="No projects clipboard image"
            width="80"
          />
          <h1 class="font-bold text-xl text-[#625E5B]">No Project Selected</h1>
          <p class="text-[#9D9D9D]">
            Select a project or get started with a new one
          </p>
          <button onClick={() => setCreateNewProject(true)}>
            Create new project
          </button>
    </div>
  );
};

export default Content;
