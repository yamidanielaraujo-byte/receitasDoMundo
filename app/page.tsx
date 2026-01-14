"use client";
import Globe from "@/components/ui/globe";
// import Image from 'next/image';
import { TextSpotlight } from "@/components/ui/text-spotlight";

export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-center gap-10 py-20">
        <Globe
          rotateCities={["new york", "london", "tokyo", "dubai"]}
          rotationSpeed={3000}
          markers={[
            { location: [40.7128, -74.006], size: 0.2 },
            { location: [51.5074, -0.1278], size: 0.2 },
            { location: [35.6762, 139.6503], size: 0.2 },
            { location: [25.2048, 55.2708], size: 0.2 },
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
    </div>
  );
}
