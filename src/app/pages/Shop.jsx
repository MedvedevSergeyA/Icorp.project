import React from "react";
import Slider from "../components/ui/Slider";
import Search from "../components/ui/search";
import Modal from "../components/common/modal/modal";
import Category from "../components/ui/category";
import AllDeviceList from "../components/ui/devices/AllDeviceList";

const Shop = () => {
  return (
    <div className="w-[100%] h-[100%]">
      <Search />
      <Slider />
      <Modal>
        <Category />
      </Modal>
      <AllDeviceList name="Список товаров" />
    </div>
  );
};

export default Shop;
