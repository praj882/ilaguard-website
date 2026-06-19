"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function HeroSlider() {
  return (
    <Swiper>
      <SwiperSlide>
        <img
          src="/images/A_futuristic_innovation_lab.jpg"
          alt="Slide 1"
          className="w-full h-72 object-cover"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="/images/Young_engineering_students.jpg"
          alt="Slide 2"
          className="w-full h-72 object-cover"
        />
      </SwiperSlide>
    </Swiper>
  );
}