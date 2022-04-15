import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import { cards } from './data/Cards';
import { Body, Header, Title, Description, SwiperStyle, Swiperslide, Card } from '../styles/styleExperience';

export default function App() {

    return (
        <div id="experience" style={Body}>
            <div className="text-center" style={Header}>
                <h2 style={Title}>
                Experiencias
                </h2>
                <p style={Description}>
                Campos de desarrollo profesional en Derechos Humanos y combate a laTrata de Personas. 
                </p>
            </div>
            <Swiper style={SwiperStyle}
                slidesPerView={1}
                spaceBetween={80}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true
                }}
                navigation={
                    true
                }
                breakpoints={{
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 80,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 140,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 180,
                    },
                  }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                >
                {cards.map((card) => {
                    return (
                        <SwiperSlide>
                            <div className="card" key={card.id} style={Card}>
                                <img src={card.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h4 className="card-title text-center">
                                    {card.text}
                                    </h4>
                                </div>
                            </div>
                        </SwiperSlide> 
                    )
                })}
                
            </Swiper>
        </div>
    );
}
