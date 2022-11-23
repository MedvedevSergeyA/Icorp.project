import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { DEVICE_ROUTE } from "../../../utils/consts";
import { useDispatch } from "react-redux";
import { removeDevice } from "../../../store/basketSlice";

const BasketCartItem = ({ id, img, name, price }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center mt-10 border-2 rounded-[20px] border-[#f3f3f3] dark:border-gray-200 overflow-hidden p-[20px]">
      <div>
        <img
          src={img}
          width={70}
          height={70}
          alt="device"
          className="mr-[20px]"
        />
      </div>
      <div className="mr-[75px] ml-5">
        <Link to={DEVICE_ROUTE + "/" + id}>
          <p className="mb-5 text-[14px] hover:underline">{name}</p>
        </Link>
        <b className="text-[12px]">Цена: {price} ₽</b>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        role="button"
        className="w-6 h-6 border-2 rounded-[5px] opacity-[0.5] hover:opacity-100 transition-opacity"
        onClick={() => dispatch(removeDevice(id))}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
};

BasketCartItem.propTypes = {
  id: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number
};

export default BasketCartItem;
