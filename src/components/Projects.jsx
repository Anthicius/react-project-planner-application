import React, { useEffect, useState } from "react";

const Projects = ({ projectList }) => {
  return (
    <>
      {projectList.map((project) => (
        <div id={project.id} class="w-3/6 mt-20 p-3 ">
          <div class="flex flex-row justify-between  border-b-4 border-[#CDCDCA] rounded pb-4">
            <div class="flex flex-col gap-4">
              <h1 class="font-bold text-xl">{project.title}</h1>
              <p class="text-[#939492]">{project.dueDate}</p>
              <p>{project.description}</p>
            </div>
            <div>
              <button class="text-[#4D4D4B]">Delete</button>
            </div>
          </div>
          <div class="flex flex-col gap-4 ">
            <h2 class="font-bold text-lg mt-3">Tasks</h2>
            <label >
              <input class="rounded bg-[#E1DFDE] p-1 mr-4" type="text" />
              Add Task
            </label>
          </div>
        </div>
      ))}
    </>
  );
};

export default Projects;
