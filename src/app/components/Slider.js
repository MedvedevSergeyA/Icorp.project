import { Carousel } from "flowbite-react";
import React from "react";
import carusel from "../assets/carusel/carusel.jpeg";

const Slider = () => {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel>
                <img src={carusel} alt="..." />
                <img
                    src="https://cms.mvideo.ru/magnoliaPublic/.imaging/webp/dam/1f7ef9d7-de68-4570-8213-2716463fe386"
                    alt="pic"
                />
                <img
                    src="https://cms.mvideo.ru/magnoliaPublic/.imaging/webp/dam/e2374ff5-286d-4aec-b34f-61c6e016475d"
                    alt="pic"
                />
                <img
                    src="https://cms.mvideo.ru/magnoliaPublic/.imaging/webp/dam/3a9cc4e2-8e8c-489b-b1e6-6944fa15cda9"
                    alt="pic"
                />
            </Carousel>
        </div>
    );
};

export default Slider;
