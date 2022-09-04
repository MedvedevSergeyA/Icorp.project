import React, { useState } from "react";
import { Link } from "react-router-dom";
import CategoryButton from "../common/category.button";

const Search = ({ addModal }) => {
  return (
    <div className="m-5 italic">
      <div className="flex justify-between">
        <CategoryButton setModal={addModal} />
        <div className="relative w-full ml-2">
          <input
            type="search"
            id="location-search"
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-[#1E4C77] border-l-2 border  "
            placeholder="Поиск товара"
            required
          />
          <button
            type="submit"
            className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-[#417b9c] rounded-r-lg border border-[#417b9c] hover:bg-[#265b8d] focus:ring-2 focus:outline-none focus:ring-[#265b8da9] "
          >
            <i className="bi bi-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
