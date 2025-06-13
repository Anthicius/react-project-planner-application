import CreateTask from "./CreateTask";

const Projects = ({ project, onAddTask, onClearTask, onProjectDelete }) => {


  return (
        <div id={project.id} class="w-5/6 ml-9 mt-20 p-3 ">
          <div class="flex flex-row justify-between  border-b-4 border-[#CDCDCA] rounded pb-4">
            <div class="flex flex-col gap-4">
              <h1 class="font-bold text-xl">{project.title}</h1>
              <p class="text-[#939492]">{project.dueDate}</p>
              <p class="whitespace-pre-wrap">{project.description}</p>
            </div>
            <div>
              <button class="text-[#4D4D4B]" onClick={()=> onProjectDelete(project.id)}>Delete</button>
            </div>
          </div>
            <CreateTask onAddTask={onAddTask} onClearTask={onClearTask} projectId={project.id} tasks={project.tasks}/>
        </div>
      )}

export default Projects;
