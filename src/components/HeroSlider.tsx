"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function HeroSlider() {
  return (
    <Swiper>
      <SwiperSlide>
        <div className="h-72 bg-red-500">
          Slide 1
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-72 bg-green-500">
          Slide 2
        </div>
      </SwiperSlide>
    </Swiper>
  );
}