import React from "react";

const Content = () => {
  return (
    <div class="flex flex-col">
      <div>
        <button>Cancel</button>
        <button>Save</button>
      </div>
      <form class="flex flex-col">
        <label class="flex flex-col">
          TITLE
          <input />
        </label>
        <label class="flex flex-col">
          DESCRIPTION
          <input />
        </label>
        <label class="flex flex-col">
          DUE DATE
          <input />
        </label>
      </form>
    </div>
  );
};

export default Content;
