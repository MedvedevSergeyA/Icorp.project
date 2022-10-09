import React from "react";
import PropTypes from "prop-types";

const DeviceCard = ({ device }) => {
  return (
    <div className="container items-center mt-16">
      <h1 className="mb-5 ml-5 font-bold text-lg">
        Характирестики товара: {device.name}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-3 w-auto p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img src={device.img} className="w-[350px] sm:m-auto" alt="" />
        <div className="sm:m-auto lg:mt-2">
          <h1 className="mb-3">{device.name}</h1>
          Рейтинг:
          <span className="ml-2">
            <i className="bi bi-star-fill text-yellow-400"></i>
            {device.rate}
          </span>
          <p>Краткое описание: {device.description}</p>
        </div>
        <div>
          <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <p className="w-full bg-gray-50 p-2 text-lg mb-3">
              Цена: {device.price} ₽
            </p>
            <button className="mb-3 items-center w-full bg-[#417b9c] hover:bg-[#265b8d] transition duration-150 text-white p-2 rounded-md cursor-pointer">
              В корзину
            </button>
            <button className=" w-full items-center bg-[#417b9c] hover:bg-gray-200  hover:text-black transition duration-150 text-white p-2 rounded-md cursor-pointer">
              Добавить в избранное
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
DeviceCard.propTypes = {
  device: PropTypes.object
};
export default DeviceCard;
