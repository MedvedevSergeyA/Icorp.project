import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Rating } from "flowbite-react";
import PropTypes from "prop-types";
import { DEVICE_ROUTE } from "../../../utils/consts";
import { useDispatch, useSelector } from "react-redux";
import { addDevice } from "../../../store/basketSlice";

const Device = ({ device }) => {
  const { id, img, name, price } = device;
  const history = useHistory();
  const dispatch = useDispatch();
  const basketItem = useSelector((state) =>
    state.basket.entities.find((obj) => obj.id === id)
  );
  const addedCount = basketItem ? basketItem.count : 0;

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
    <div
      key={device.id}
      className="md:ml-20 md:mt-10 sm:mx-auto align-middle w-64 ml-28 dark:text-[#808080]"
    >
      <Link to="/">
        <button className="transition ease-in-out delay-75 hover:-translate-y-1 duration-300] w-1 mt-10">
          <i className="bi bi-heart text-[#183E61] dark:text-[#5d68cf] dark:hover:text-red-600 pl-40 hover:text-red-400 hover:delay-75"></i>
        </button>
      </Link>
      <img
        className="w-36 hover:scale-110 cursor-zoom-in"
        src={device.img}
        alt="device"
      />
      <div className="mt-3">
        <Rating>
          <Rating.Star />
          <p className="ml-2 text-sm font-bold text-gray-900 dark:text-[#808080] ">
            {device.rate}
          </p>
          <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
          <Link
            to="/"
            className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-[#808080]"
          >
            {device.reviews} Просмотров
          </Link>
        </Rating>
      </div>
      <div className="max-h-20">
        <h3
          className="mt-3 hover:underline"
          onClick={() => history.push(DEVICE_ROUTE + "/" + device.id)}
          role="button"
        >
          {device.name}
        </h3>
        <div className="mb-1">
          <p className="line-through text-[#183E61] dark:text-[#808080]">
            {device.formerPrice ? `${device.formerPrice} ₽` : ""}
          </p>
          <p>Цена: {device.price} ₽</p>
        </div>
      </div>
      <div className="mt-4 items-center flex">
        <div>
          <button
            className="flex bg-indigo-300 rounded-[30px] px-[9px] py-[5px] min-w-[70px] align-middle items-center mx-auto border-1"
            onClick={onClickAdd}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <div>
              <span className="ml-2">Добавить</span>
              {addedCount > 0 && (
                <i className="inline-block rounded-[30px] bg-indigo-100 w-[20px] h-[20px] relative top-[-5px] left-[3px] text-xs">
                  {addedCount}
                </i>
              )}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

Device.propTypes = {
  device: PropTypes.object
};

export default Device;
