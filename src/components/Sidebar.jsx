const Sidebar = ({ projectList, onSelectedProject, onStartCreate }) => {
  return (
    <div className="bg-[#100E0C] text-[#E1DFDE] rounded-tr-xl h-svh p-10">
      <h1 className="font-bold text-3xl mb-4">YOUR PROJECTS</h1>
      <button onClick={onStartCreate} class = "bg-[#322E2B] p-3 pl-8 pr-8 rounded-xl text-[#807B78] hover:text-white  ">+ Add Project</button>
      <ul className="mt-4">
        {projectList?.length === 0 && <li>No projects yet</li>}
        {projectList.map((project) => (
          <li key={project.id}>
            <button onClick={() => onSelectedProject(project.id)} class="focus:bg-[#1C1816]">{project.title}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Sidebar;
