import React from "react";
import Device from "./device";
import PropTypes from "prop-types";

const AllDeviceList = ({ devices, name }) => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="mt-18 text-2xl sm:text-4xl sm:mt-24 text-[#183e61c7] text-center sm:text-left">
        {name}
      </h1>
      <Device device={devices} />
    </div>
  );
};
AllDeviceList.propTypes = {
  devices: PropTypes.array,
  name: PropTypes.string
};
export default AllDeviceList;
