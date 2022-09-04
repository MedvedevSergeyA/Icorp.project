import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "flowbite-react";
import PropTypes from "prop-types";

const Device = ({ device }) => {
  return (
    <div className="flex flex-wrap">
      {device.map((device) => (
        <div key={device.id} className="ml-24 mt-10 w-64">
          <Link to="/">
            <i className="bi bi-heart relative z-0 inset-x-44 text-[#183E61] hover:text-red-600"></i>
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
                  className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
                >
                  {device.reviews} Просмотров
                </Link>
              </Rating>
            </div>
            <Link to="/device/1">
              <h3 className="mt-3 hover:underline">{device.name}</h3>
            </Link>
            <p className="line-through text-[#183E61]">
              {device.formerPrice} ₽
            </p>
            <p>Цена: {device.price} ₽</p>
            <i
              className="bi bi-cart4 relative z-0 inset-x-40 -inset-y-6 text-[19px] text-[#183E61]"
              role="button"
            ></i>
          </div>
        </div>
      ))}
    </div>
  );
};

Device.propTypes = {
  device: PropTypes.array
};

export default Device;
