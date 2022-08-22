import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="h-20 text-white italic bg-[#3e7cb6]">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <Link className="m-5 text-2xl font-bold ml-6" to="/">
                        El-Life
                    </Link>
                    <div className="flex items-center mr-7">
                        <Link
                            className="rounded-sm bg-[#D9D9D9] bg-opacity-30 px-10 py-2 transition duration-200 hover:bg-[#265b8d]"
                            to="/login"
                        >
                            Вход / Регистрация
                        </Link>
                        <Link to="/basket" className="ml-7">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="26"
                                fill="currentColor"
                                className="bi bi-cart4"
                                viewBox="0 0 16 16"
                            >
                                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                            </svg>
                        </Link>
                        <Link
                            className="ml-7 "
                            to="/favourite"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                fill="currentColor"
                                className="bi bi-suit-heart-fill"
                                viewBox="0 0 16 16"
                            >
                                <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
