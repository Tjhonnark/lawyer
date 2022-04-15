import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Card, SwiperStyle } from '../styles/styleExperience'

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {

    return (
        <div className="bg-warning">
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
                <SwiperSlide className="">
                    <div class="card" style={Card}>
                        <img src="demo.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h3 className="card-title text-center">
                                Entrevistas
                            </h3>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="card" style={Card}>
                        <img src="demo.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h3 className="card-title text-center">
                                2
                            </h3>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="card" style={Card}>
                        <img src="demo.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h3 className="card-title text-center">
                                3
                            </h3>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="card" style={Card}>
                        <img src="demo.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h3 className="card-title text-center">
                                4
                            </h3>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="card" style={Card}>
                        <img src="demo.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h3 className="card-title text-center">
                                5
                            </h3>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="card" style={Card}>
                        <img src="demo.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h3 className="card-title text-center">
                                6
                            </h3>
                        </div>
                    </div>
                </SwiperSlide>  
            </Swiper>
        </div>
    );
}
