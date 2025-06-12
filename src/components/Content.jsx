import noProjectImage from "../assets/no-projects.png";
import CreateProject from "./CreateProject";
import Projects from "./Projects";

const Content = ({
  projectList,
  selectedProjectId,
  isCreating,
  onCreateProject,
  onStartCreateProject,
  onAddTask,
  onClearTask,
  onProjectDelete
}) => {
  if (isCreating) {
    return <CreateProject onCreate={onCreateProject} />;
  }

  const selectedProject = projectList.find((p) => p.id === selectedProjectId);

  if (selectedProject) {
    return (
      <Projects
        project={selectedProject}
        onAddTask={onAddTask}
        onClearTask={onClearTask}
        onProjectDelete={onProjectDelete}
      />
    );
  }
  return (
    <div className="flex flex-col justify-center items-center h-dvh pb-40">
      <img src={noProjectImage} alt="No projects clipboard image" width="80" />
      <h1 className="font-bold text-xl text-[#625E5B]">No Project Selected</h1>
      <p className="text-[#9D9D9D]">Select a project or create a new one</p>
      <button onClick={onStartCreateProject}>Create new project</button>
    </div>
  );
};
export default Content;
