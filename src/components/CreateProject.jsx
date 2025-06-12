import React, { useRef } from "react";

const CreateProject = ({onCreate}) => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  const handleSubmit = (e) => {
     const newProject = {
      id: crypto.randomUUID(),
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      dueDate: dueDateRef.current.value,
      tasks: []
    };

    onCreate(newProject)
  }

  return (

      <form class="flex flex-col text-[#605C58] h-svh gap-4 w-[70%] min-w-[30%] ml-14 mt-[9%]"  onSubmit={(e)=> handleSubmit(e)}>
        <div class="flex flex-row justify-end gap-1 text-lg">
          <button type="reset" class=" p-3 pl-8 pr-8">Cancel</button>
          <button type="submit" class="bg-black p-3 pl-8 pr-8 rounded-xl text-white ">Save</button>
        </div>
        <label class="flex flex-col font-bold">
          TITLE
          <input
            class=" border-b-4 border-[#CDCDCA] rounded bg-[#E1DFDE] p-2 mt-1 hover:border-b-[#676463]"
            type="text"
            ref={titleRef}
            required
          />
        </label>
        <label class="flex flex-col font-bold">
          DESCRIPTION
          <textarea
            class=" border-b-4 border-[#CDCDCA] rounded bg-[#E1DFDE] p-2 mt-1 hover:border-b-[#676463]"
            ref={descriptionRef}
            required
          />
        </label>
        <label class="flex flex-col font-bold">
          DUE DATE
          <input
            class=" border-b-4 border-[#CDCDCA] rounded bg-[#E1DFDE] p-2 mt-1 hover:border-b-[#676463]"
            type="date"
            ref={dueDateRef}
            required
          />
        </label>
      </form>
  );
};

export default CreateProject;
