import React from "react";
import PropTypes from "prop-types";

const CategoryButton = ({ setModal }) => {
  return (
    <button
      onClick={() => setModal(true)}
      className="flex items-center bg-[#417b9c] hover:bg-[#265b8d] transition duration-150 text-white p-2 rounded-md cursor-pointer"
    >
      <i className="bi bi-list"></i>
      Категории
    </button>
  );
};

CategoryButton.propTypes = {
  setModal: PropTypes.func
};

export default CategoryButton;
