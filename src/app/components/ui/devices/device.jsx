import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Rating } from "flowbite-react";
import PropTypes from "prop-types";
import { DEVICE_ROUTE } from "../../../utils/consts";
import { useDispatch } from "react-redux";
import { addDevice } from "../../../store/basketSlice";

const Device = ({ device }) => {
  const { id, img, name, price } = device;
  const history = useHistory();
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
    <div key={device.id} className="ml-20 mt-2 sm:mt-10 w-64">
      <Link to="/">
        <button className="transition ease-in-out delay-75 hover:-translate-y-1 duration-300] w-1">
          <i className="bi bi-heart text-[#183E61] pl-40 hover:text-red-400 hover:delay-75"></i>
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
      <div className="max-h-20">
        <h3
          className="mt-3 hover:underline"
          onClick={() => history.push(DEVICE_ROUTE + "/" + device.id)}
          role="button"
        >
          {device.name}
        </h3>
        <div className="mb-1">
          <p className="line-through text-[#183E61]">
            {device.formerPrice ? `${device.formerPrice} ₽` : ""}
          </p>
          <p>Цена: {device.price} ₽</p>
        </div>
      </div>
      <div className="mt-2 flex justify-end" onClick={onClickAdd}>
        <button className="hover:scale-110">
          <div className="bg-indigo-300 rounded-[50%] p-2 hover:bg-green-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              className="bi bi-cart-plus fill-white"
              viewBox="0 0 16 16"
            >
              <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
              <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

Device.propTypes = {
  device: PropTypes.object
};

export default Device;
