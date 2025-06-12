import React, { useRef } from "react";

const CreateTask = ({ onAddTask, projectId, tasks, onClearTask }) => {
  const taskRef = useRef();

  return (
    <div class="flex flex-col gap-4 ">
      <h2 class="font-bold text-lg mt-3">Tasks</h2>
      <label>
        <textarea
          ref={taskRef}
          class="rounded bg-[#E1DFDE] p-1 mr-4 w-[40%]"
          type="text"
          minLength={1}
        />
        <button onClick={() => taskRef.current.value.length > 0 ? onAddTask(taskRef.current.value, projectId): null}>
          Add Task
        </button>
      </label>
      {tasks.length === 0 ? (
        <p> This project does not have any tasks yet </p>
      ) : (
        <ol>
          {tasks.map((task, index) => {
            return (
              <div class="flex flex-row justify-between bg-[#F2F2F2] pl-8 pr-8 pt-10 pb-10 mt-5 rounded-xl" key={index}>
                <li class="break-words w-[80%] ">{task}</li>
                <button onClick={()=> onClearTask(index, projectId)}>Clear</button>
              </div>
            );
          })}
        </ol>
      )}
    </div>
  );
};

export default CreateTask;
