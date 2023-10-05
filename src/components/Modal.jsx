import React from "react";

export default function Modal({ open, onClose, content }) {
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  if (!open) return null;

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="bg-white p-2 rounded w-72">
        {content}
      </div>
    </div>
  );
}
