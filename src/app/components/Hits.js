import React from "react";
import { Rating } from "flowbite-react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Hits = ({ devices }) => {
    return (
        <div className="container ">
            <h1 className="mt-28 ml-9 text-4xl text-[#183e61c7]">
                Хиты продаж
            </h1>
            <div className="flex flex-wrap">
                {devices.map((device) => (
                    <div key={device.id} className="ml-24 mt-10 w-64">
                        <Link to="/">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-heart relative fill-[#183E61] hover:fill-red-800 z-0 inset-x-44"
                                viewBox="0 0 16 16"
                            >
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                            </svg>
                        </Link>
                        <div>
                            <img className="w-36" src={device.img} alt="" />
                            <div className="mt-3">
                                <Rating>
                                    <Rating.Star />
                                    <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white ">
                                        {device.rate}
                                    </p>
                                    <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
                                    <Link
                                        to="/"
                                        href="/"
                                        className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
                                    >
                                        {device.reviews} Просмотров
                                    </Link>
                                </Rating>
                            </div>
                            <Link to="/device/1">
                                <h3 className="mt-3 hover:underline">
                                    {device.name}
                                </h3>
                            </Link>
                            <p className="line-through text-[#183E61]">
                                {device.formerPrice} ₽
                            </p>
                            <p>Цена: {device.price} ₽</p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                className="bi bi-cart-plus relative z-0 inset-x-40 -inset-y-6 fill-[#183E61]"
                                viewBox="0 0 16 16"
                            >
                                <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                            </svg>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

Hits.propTypes = {
    devices: PropTypes.array.isRequired
};

export default Hits;
