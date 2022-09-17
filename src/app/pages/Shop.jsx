import React, { useEffect, useState } from "react";
import Slider from "../components/ui/Slider";
import Search from "../components/ui/search";
import Modal from "../components/common/modal/modal";
import Category from "../components/ui/category";
import api from "../api";
import Loader from "../components/common/Loader/loader";
import AllDeviceList from "../components/AllDeviceList";

const Shop = () => {
  const [device, setDevice] = useState();
  const [modal, setModal] = useState(false);

  useEffect(() => {
    api.allDevices.fetchAll().then((data) => setDevice(data));
  }, [device]);

  return (
    <div>
      {device ? (
        <>
          <Search addModal={setModal} />
          <Slider />
          <Modal visible={modal} setVisible={setModal}>
            <Category />
          </Modal>
          <AllDeviceList devices={device} name="Весь ассортимент" />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Shop;
