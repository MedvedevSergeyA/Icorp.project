import React, { useContext } from "react";
import Device from "./device";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getDeviceList } from "../../../store/deviceSlice";
import SearchContext from "../../../context/searchContext/searchContext";
const AllDeviceList = ({ title }) => {
  const devices = useSelector(getDeviceList());
  const { searchValue } = useContext(SearchContext);
  const items = devices
    .filter((obj) => {
      if (obj.name.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((device) => <Device device={device} key={device.id} />);
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-10">
          <h1 className="dark:text-white mt-18 text-2xl sm:text-4xl sm:mt-24 text-[#183e61c7] sm:text-left">
            {title}
          </h1>
        </div>
        <div className="flex flex-wrap items-center h-[1200px]">{items}</div>
      </div>
    </>
  );
};
AllDeviceList.propTypes = {
  title: PropTypes.string
};
export default AllDeviceList;
