import React, { useEffect, useState } from "react";
import DeviceCard from "../components/ui/devices/DeviceCard";
import { useParams } from "react-router-dom";
import Loader from "../components/common/Loader/loader";

const DevicePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <DeviceCard id={id} />
        </div>
      )}
    </div>
  );
};

export default DevicePage;
