import React, { useEffect, useState } from "react";
import DeviceCard from "../components/ui/devices/DeviceCard";
import { useParams } from "react-router-dom";
import Loader from "../components/common/Loader/loader";

const DevicePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { _id } = useParams();
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
          <DeviceCard _id={_id} />
        </div>
      )}
    </div>
  );
};

export default DevicePage;
