import React from "react";
import { useDispatch } from "react-redux";
import { modalOpen } from "../../../store/modal";

const ButtonCategory = () => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(modalOpen())}
      className="flex items-center bg-[#417b9c] hover:bg-[#265b8d] transition duration-150 text-white p-2 rounded-md cursor-pointer"
    >
      <i className="bi bi-list"></i>
      Категории
    </button>
  );
};

export default ButtonCategory;
