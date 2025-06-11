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
    };

    onCreate(newProject)
  }

  return (

      <form class="flex flex-col text-[#605C58] w-[34rem] gap-4" onSubmit={(e)=> handleSubmit(e)}>
        <div class="flex flex-row justify-end gap-3">
          <button type="reset">Cancel</button>
          <button type="submit">Save</button>
        </div>
        <label class="flex flex-col font-bold">
          TITLE
          <input
            class=" border-b-4 border-[#CDCDCA] rounded bg-[#E1DFDE] p-1 mt-1"
            type="text"
            ref={titleRef}
            required
          />
        </label>
        <label class="flex flex-col font-bold">
          DESCRIPTION
          <textarea
            class=" border-b-4 border-[#CDCDCA] rounded bg-[#E1DFDE] p-1 mt-1"
            ref={descriptionRef}
            required
          />
        </label>
        <label class="flex flex-col font-bold">
          DUE DATE
          <input
            class=" border-b-4 border-[#CDCDCA] rounded bg-[#E1DFDE] p-1 mt-1"
            type="date"
            ref={dueDateRef}
            required
          />
        </label>
      </form>
  );
};

export default CreateProject;
