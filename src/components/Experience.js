import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import { conferencias, entrevistas } from './data/Cards';
import { Body, Header, Title, Description, SwiperStyle, SwiperslideStyle, Card } from '../styles/styleExperience';

export default function App() {

    return (
        <div id="experience" style={Body}>
            <div className="container text-center" style={Header}>
                <h2 style={Title}>
                Experiencias
                </h2>
                <p className="mx-4" style={Description}>
                Campos de desarrollo profesional en Derechos Humanos y combate a laTrata de Personas. 
                </p>
            </div>
            <div className="container py-3">
            <h2>Entrevistas</h2>
            <Swiper style={SwiperStyle}
                slidesPerView={1}
                spaceBetween={0}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true
                }}
                navigation={
                    true
                }
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 80,
                    },
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 80,
                    },
                    768: {
                      slidesPerView: 1,
                      spaceBetween: 140,
                    },
                    1024: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                  }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                >
                {entrevistas.map((card) => {
                    return (
                        <SwiperSlide style={SwiperslideStyle}>
                            <Link href={card.url}>
                            <a target="blank" className="text-decoration-none">
                                <div className="card" key={card.id} style={Card}>
                                    <img src={card.img} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h4 className="card-title text-center">
                                        {card.text}
                                        </h4>
                                    </div>
                                </div>
                            </a>
                            </Link>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            </div>
            <div className="container py-3">
            <h2>Conferencias</h2>
            <Swiper style={SwiperStyle}
                slidesPerView={1}
                spaceBetween={0}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true
                }}
                navigation={
                    true
                }
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 80,
                    },
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 80,
                    },
                    768: {
                      slidesPerView: 1,
                      spaceBetween: 140,
                    },
                    1024: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                  }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                >
                {conferencias.map((card) => {
                    return (
                        <SwiperSlide style={SwiperslideStyle}>
                            <Link href={card.url}>
                            <a target="blank" className="text-decoration-none">
                                <div className="card" key={card.id} style={Card}>
                                    <img src={card.img} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h4 className="card-title text-center">
                                        {card.text}
                                        </h4>
                                    </div>
                                </div>
                            </a>
                            </Link>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            </div>   
        </div>
    );
}