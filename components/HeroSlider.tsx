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