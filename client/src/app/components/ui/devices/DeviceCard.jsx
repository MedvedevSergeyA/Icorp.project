import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { getDeviceById } from "../../../store/deviceSlice";
import { addDevice } from "../../../store/basketSlice";

const DeviceCard = ({ id }) => {
  const device = useSelector(getDeviceById(id));
  const { img, name, price } = device;
  const dispatch = useDispatch();
  const onClickAdd = () => {
    const item = {
      id,
      img,
      name,
      price
    };
    dispatch(addDevice(item));
  };
  return (
    <div className="h-screen container items-center mt-16 mx-auto">
      <h1 className="mb-5 ml-5 font-bold text-lg dark:text-gray-300">
        Характирестики товара: {device.name}
      </h1>
      <div className="dark:bg-[#191919] dark:text-gray-300 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-3 w-auto p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img src={device.img} className="w-[350px] sm:m-auto" alt="" />
        <div className="sm:m-auto lg:mt-2">
          <h1 className="mb-3">{device.name}</h1>
          Рейтинг:
          <span className="ml-2">
            <i className="bi bi-star-fill text-yellow-400 mr-1"></i>
            {device.rate}
          </span>
          <p>Краткое описание: {device.description}</p>
        </div>
        <div>
          <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <p className="w-full bg-gray-50 p-2 text-lg mb-3 dark:bg-[#191919]">
              Цена: {device.price} ₽
            </p>
            <i className="text-black">0</i>
            <button
              onClick={onClickAdd}
              className="dark:bg-[#14458f] dark:hover:bg-blue-800 dark:hover:text-white mb-3 items-center w-full bg-[#417b9c] hover:bg-[#265b8d] transition duration-150 text-white p-2 rounded-md cursor-pointer"
            >
              В корзину
            </button>
            <button className="dark:bg-[#14458f] dark:hover:text-white dark:hover:bg-blue-800 w-full items-center bg-[#417b9c] hover:bg-gray-200  hover:text-black transition duration-150 text-white p-2 rounded-md cursor-pointer">
              Добавить в избранное
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
DeviceCard.propTypes = {
  id: PropTypes.string
};
export default DeviceCard;
