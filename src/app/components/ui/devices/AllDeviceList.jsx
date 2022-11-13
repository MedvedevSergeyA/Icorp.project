import React from "react";
import Device from "./device";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getDeviceList } from "../../../store/deviceSlice";
const AllDeviceList = ({ name }) => {
  const devices = useSelector(getDeviceList());
  // const filteredDevices = devices.filter((device) => {
  //   return device.name.toLowerCase().includes(value.toLowerCase());
  // });
  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-center mb-10">
        <h1 className="mt-18 text-2xl sm:text-4xl sm:mt-24 text-[#183e61c7] sm:text-left">
          {name}
        </h1>
      </div>
      <div className="flex flex-wrap items-center">
        {devices.map((device) => (
          <Device device={device} key={device.id} />
        ))}
      </div>
    </div>
  );
};
AllDeviceList.propTypes = {
  name: PropTypes.string
};
export default AllDeviceList;
