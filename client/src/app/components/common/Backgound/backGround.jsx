import React from "react";
import PropTypes from "prop-types";

const Background = ({ children }) => {
  return (
    <body className="bg-white dark:bg-[#191919] transition-all">
      {children}
    </body>
  );
};

Background.propTypes = {
  children: PropTypes.array
};
export default Background;
