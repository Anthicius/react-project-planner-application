const Sidebar = ({
  projectList,
  onSelectedProject,
  onStartCreate,
  selectedProjectId,
}) => {
  return (
    <div className="bg-[#100E0D] text-[#969492] rounded-tr-xl h-svh min-h-full p-10">
      <button className="font-bold text-3xl mb-4 text-left text-white" onClick={() => onSelectedProject(null)}>YOUR PROJECTS</button>
      <button
        onClick={onStartCreate}
        class="bg-[#57534E] p-2 pl-8 pr-8 rounded-lg text-stone-400 hover:bg-stone-600 hover:text-stone-100  "
      >
        + Add Project
      </button>
      <ul className="mt-4">
        {projectList?.length === 0 && <li>No projects yet</li>}
        {projectList.map((project) => (
          <li key={project.id}>
            <button
              onClick={() => onSelectedProject(project.id)}
              class={`w-full text-left pl-4 pb-1 pt-1 mb-1 rounded-md
        ${
          project.id === selectedProjectId
            ? "bg-[#1C1816] text-white"
            : "hover:text-white hover:bg-[#1C1816] text-[#969492]"
        }`}
            >
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Sidebar;
