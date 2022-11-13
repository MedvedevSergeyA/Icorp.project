import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loadDeviceList } from "../../../store/deviceSlice";
import PropTypes from "prop-types";
import Loader from "../Loader/loader";

const AppLoader = ({ children }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    dispatch(loadDeviceList());
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) return <Loader />;
  return children;
};

AppLoader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
export default AppLoader;
