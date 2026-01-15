"use client";
import Image from "next/image";
import Globe from "@/components/ui/globe";
// import Image from 'next/image';
import { TextSpotlight } from "@/components/ui/text-spotlight";

import { LogoStepper } from "@/components/ui/logo-stepper";
import React from "react";

const logos = [
  {
    icon: (
      <Image
        src="/carbonara.jpg"
        alt="Microsoft"
        className="w-full h-full object-contain"
        width={100}
        height={100}
      />
    ),
    label: "Carbonara",
  },
  {
    icon: (
      <Image
        src="/guacamole.jpg"
        alt="Guacamole"
        className="w-full h-full object-contain"
        width={100}
        height={100}
      />
    ),
    label: "Guacamole",
  },
  {
    icon: (
      <Image
        src="/panquecas.png"
        alt="Panquecas"
        className="w-full h-full object-contain"
        width={100}
        height={100}
      />
    ),
    label: "Panquecas",
  },
  {
    icon: (
      <Image
        src="/salada.png"
        alt="Salada"
        className="w-full h-full object-contain"
        width={100}
        height={100}
      />
    ),
    label: "Salada",
  },
  {
    icon: (
      <Image
        src="/sushi.jpg"
        alt="Sushi"
        className="w-full h-full object-contain"
        width={100}
        height={100}
      />
    ),
    label: "Sushi",
  },
];

export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-center gap-10 py-20">
        <Globe
          rotateCities={["new york", "london", "tokyo", "dubai"]}
          rotationSpeed={3000}
          markers={[
            { location: [40.7128, -74.006], size: 0.1 },
            { location: [51.5074, -0.1278], size: 0.1 },
            { location: [35.6762, 139.6503], size: 0.1 },
            { location: [25.2048, 55.2708], size: 0.1 },
          ]}
          glowColor={[0.1, 0.8, 1]}
          markerColor={[0.1, 0.8, 1]}
          className="max-w-200"
        />

        <Globe />

        {/* <Image
          src="/cozinheiro.png"
          width={600}
          height={700}
          alt="Picture of the author"
        /> */}
      </div>

      <TextSpotlight
        textClassName="text-xl md:text-4xl font-semibold"
        text="Sabores que viajam – descubra o mundo em cada prato!"
        spotlightColor="255, 255, 255"
        spotlightArea={90}
        spotlightSize={100}
      />

      <LogoStepper
        logos={logos}
        direction="loop"
        animationDelay={1.2}
        animationDuration={0.6}
        visibleCount={5}
      />
    </div>
  );
}
