"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroSlider() {
  const images = [
    "/images/A_futuristic_innovation_lab.jpg",
    "/images/Young_engineering_students.jpg",
    "/images/Smart_irrigation_system.jpg",
    "/images/A_smart_water_tank_monitoring_system.jpg",
    "/images/Embedded_systems_engineering_workspace.jpg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-72 md:h-96 lg:h-[500px] overflow-hidden rounded-3xl shadow-2xl">
      <Image
        src={images[current]}
        alt={`Slide ${current + 1}`}
        fill
        priority
        className="object-cover transition-opacity duration-700"
      />

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}