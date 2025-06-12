import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

function App() {
  const [projectList, setProjectList] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [isCreatingNewProject, setIsCreatingNewProject] = useState(false);

  const handleAddProject = (project) => {
    setProjectList((prev) => [...prev, project]);
    setIsCreatingNewProject(false);
    setSelectedProjectId(project.id);
  };

  const handleAddTask = (taskRef, projectId) => {
    setProjectList((prev) => {
      return prev.map((project) => {
        if (project.id === projectId) {
          return {
            ...project,
            tasks: [...project.tasks, taskRef],
          };
        } else {
          return project;
        }
      });
    });
  };

  const handleProjectDelete = (projectId) => {
    setProjectList((prev)=>prev.filter((project) => project.id !== projectId))
    setSelectedProjectId(null)
  }

  const handleSelectProject = (id) => {
    setSelectedProjectId(id);
    setIsCreatingNewProject(false);
  };

  const handleStartCreating = () => {
    setSelectedProjectId(null);
    setIsCreatingNewProject(true);
  };

  const handleClearTask = (index, projectId) => {
    setProjectList((prev) => {
      return prev.map((project) => {
        if (project.id === projectId) {
          return {
            ...project,
            tasks: project.tasks.filter((_, i) => i !== index),
          };
        } else {
          return project;
        }
      });
    });
  };

  return (
    <div className="flex mt-10 ">
      <div class="w-3/12">
        <Sidebar
          projectList={projectList}
          onSelectedProject={handleSelectProject}
          onStartCreate={handleStartCreating}
        />
      </div>
      <div class="w-4/5">
        <Content
          projectList={projectList}
          selectedProjectId={selectedProjectId}
          isCreating={isCreatingNewProject}
          onCreateProject={handleAddProject}
          onStartCreateProject={handleStartCreating}
          onAddTask={handleAddTask}
          onClearTask={handleClearTask}
          onProjectDelete={handleProjectDelete}
        />
      </div>
    </div>
  );
}

export default App;
