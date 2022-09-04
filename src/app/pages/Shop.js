import React, { useEffect, useState } from "react";
import Slider from "../components/ui/Slider";
import Search from "../components/ui/search";
import Hits from "../components/Hits";
import Modal from "../components/common/modal/modal";
import Category from "../components/ui/category";

const Shop = () => {
  const [device, setDevice] = useState([]);
  const [hits, setDeviceHit] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/devices")
      .then((res) => res.json())
      .then((data) => setDevice(data));
  }, []);
  useEffect(() => {
    fetch("http://localhost:3001/devicesHits")
      .then((res) => res.json())
      .then((data) => setDeviceHit(data));
  }, []);

  return (
    <div>
      <Search addModal={setModal} />
      <Slider />
      <Hits devices={hits} name="Хиты продаж" />
      <Modal visible={modal} setVisible={setModal}>
        <Category />
      </Modal>
    </div>
  );
};

export default Shop;
