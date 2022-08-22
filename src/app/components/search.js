import React, { useState } from "react";
import { Link } from "react-router-dom";

const Search = () => {
    return (
        <div className="m-5 italic">
            <div className="flex justify-between">
                <div className="flex items-center bg-[#417b9c] hover:bg-[#265b8d] transition duration-150 text-white p-2 rounded-md">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                    <button>Каталог</button>
                </div>
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
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Search;
