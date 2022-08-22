import React, { useEffect, useState } from "react";
import Slider from "../components/Slider";
import Search from "../components/search";
import Hits from "../components/Hits";

const Shop = () => {
    const [device, setDevice] = useState([]);
    const [hits, setDeviceHit] = useState([]);

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
            <Search />
            <Slider />
            <Hits devices={hits} />
        </div>
    );
};

export default Shop;
