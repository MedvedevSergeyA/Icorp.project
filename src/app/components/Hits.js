import React from "react";
import PropTypes from "prop-types";
import Device from "./device";

const Hits = ({ devices, name }) => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="mt-28 text-4xl text-[#183e61c7] text-center sm:text-left">
        {name}
      </h1>
      <Device device={devices} />
    </div>
  );
};

Hits.propTypes = {
  devices: PropTypes.array.isRequired
};

export default Hits;
