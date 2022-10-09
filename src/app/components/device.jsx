import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Rating } from "flowbite-react";
import PropTypes from "prop-types";
import { DEVICE_ROUTE } from "../utils/consts";

const Device = ({ device }) => {
  const history = useHistory();
  return (
    <div className="flex flex-wrap">
      {device.map((device) => (
        <div key={device.id} className="ml-24 mt-2 sm:mt-10 w-64">
          <Link to="/">
            <i className="bi bi-heart relative z-0 inset-x-44 text-[#183E61] hover:text-red-600"></i>
          </Link>
          <div>
            <img
              className="w-36 hover:scale-110 cursor-zoom-in"
              src={device.img}
              alt="device"
            />
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
            <h3
              className="mt-3 hover:underline"
              onClick={() => history.push(DEVICE_ROUTE + "/" + device.id)}
              role="button"
            >
              {device.name}
            </h3>
            <p className="line-through text-[#183E61]">
              {device.formerPrice ? `${device.formerPrice} ₽` : ""}
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
