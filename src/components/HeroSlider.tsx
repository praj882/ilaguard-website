"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function HeroSlider() {
  const images = [
    "/images/A_futuristic_innovation_lab.jpg",
    "/images/Young_engineering_students.jpg",
    "/images/Smart_irrigation_system.jpg",
    "/images/A_smart_water_tank_monitoring_system.jpg",
    "/images/Embedded_systems_engineering_workspace.jpg",
    "/images/Modern_IoT_ecosystem.jpg",
    "/images/Artificial_intelligence_and_automation.jpg",
  ];

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      loop
      className="w-full rounded-3xl overflow-hidden shadow-2xl"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-72 md:h-96 lg:h-[500px]">
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              fill
              priority={index === 0}
              className="object-cover"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}