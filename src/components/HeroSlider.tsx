"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

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
    <div className="w-full">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={false}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              width={1920}
              height={1080}
              sizes="100vw"
              priority={index === 0}
              className="w-full h-72 md:h-96 lg:h-[500px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}