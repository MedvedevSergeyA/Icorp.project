import React, { useEffect, useState } from "react";
import Slider from "../components/ui/Slider";
import Search from "../components/ui/search";
import Modal from "../components/common/modal/modal";
import Category from "../components/ui/category";
import api from "../api";
import Loader from "../components/common/Loader/loader";
import AllDeviceList from "../components/AllDeviceList";

const Shop = () => {
  const [devices, setDevice] = useState([]);
  const [modal, setModal] = useState(false);
  const [value, setValue] = useState("");
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    api.allDevices.fetchAll().then((data) => {
      setIsLoading(false);
      setDevice(data);
    });
  }, []);

  const filteredDevices = devices.filter((device) => {
    return device.name.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Search addModal={setModal} setValue={setValue} />
          <Slider />
          <Modal visible={modal} setVisible={setModal}>
            <Category />
          </Modal>
          <AllDeviceList devices={filteredDevices} name="Весь ассортимент" />
        </>
      )}
    </div>
  );
};

export default Shop;
