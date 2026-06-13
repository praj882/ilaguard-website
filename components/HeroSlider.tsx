"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function HeroSlider() {
  const images = [
    "/images/smart-agri-dashboard.jpg",
    "/images/water-monitoring.png",
  ];

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      loop={true}
      className="rounded-3xl shadow-2xl"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Image
            src={image}
            alt={`Slide ${index + 1}`}
            width={700}
            height={500}
            className="w-full h-[500px] object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}