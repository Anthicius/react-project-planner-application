import React from "react";
import { createPortal } from "react-dom";

const Modal = ({ onClose }) => {
  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-md max-w-sm text-black">
        <h2 className="text-lg font-bold mb-2">Invalid Input</h2>
        <p className="mb-2">Oops ... looks like you forgot to enter a value.</p>
        <p className="mb-4">
          Please make sure you provide a valid value for every input field.
        </p>
        <button
          onClick={onClose}
          className="bg-black text-white px-4 py-2 rounded hover:bg-stone-700"
        >
          Okay
        </button>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};


export default Modal;
