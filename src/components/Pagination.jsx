import React from "react";

const Pagination = ({ onNextPage, onPrevPage }) => {
  return (
    <div className="flex justify-center mb-4 mt-8 gap-3">
      <button
        onClick={onPrevPage}
        className="px-4 py-2 bg-gray-200 text-gray-700 rounded"
      >
        Página Anterior
      </button>
      <button onClick={onNextPage} className="px-4 py-2 bg-gray-200 text-gray-700 rounded">
        Próxima Página
      </button>
    </div>
  );
};

export default Pagination;
