import React, { useEffect, useState } from "react";
import DeviceCard from "../components/ui/DeviceCard";
import { useParams } from "react-router-dom";
import api from "../api";
import Loader from "../components/common/Loader/loader";

const DevicePage = () => {
  const [device, setDevice] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    setIsLoading(true);
    api.allDevices.getById(id).then((data) => {
      setDevice(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="container">
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <DeviceCard device={device} />
        </div>
      )}
    </div>
  );
};

export default DevicePage;
