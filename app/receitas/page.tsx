"use client";

import Image from "next/image";
import ExpandableCards from "@/components/ui/expandable-cards";

import {
  CardFlip,
  CardFlipFront,
  CardFlipBack,
  CardFlipHeader,
  CardFlipFooter,
  CardFlipTitle,
  CardFlipDescription,
  CardFlipContent,
} from "@/components/ui/card-flip";
import { Button } from "@/components/ui/button";
import { Box, ShoppingCart, Star } from "lucide-react";
import { useState } from "react";

export default function Receitas() {
  const [selectedSize, setSelectedSize] = useState("36");
  const sizes = ["34", "35", "36", "37"];
  const products = [
    {
      id: 1,
      image: "/carbonara.jpg",
      title: "Massa Carbonara",
      price: "Itália",
      description: "Futuristic leather sneakers",
      features: [
        { title: "Upper", desc: "Premium leather, breathable" },
        { title: "Sole", desc: "Carbon-infused, adaptive grip" },
        { title: "Comfort", desc: "Memory foam heel" },
        { title: "Package", desc: "Sneakers, dust bag, extra laces" },
        { title: "Extras", desc: "Reflective trims for night visibility" },
      ],
      rating: "4.5 (126)",
      isBestSeller: true,
    },
    {
      id: 2,
      image: "/guacamole.jpg", // Placeholder image
      title: "Guacamole",
      price: "México",
      description: "High-tech running shoes",
      features: [
        { title: "Upper", desc: "Mesh fabric, ventilated" },
        { title: "Sole", desc: "Gel cushioning, shock absorption" },
        { title: "Comfort", desc: "Orthotic support" },
        { title: "Package", desc: "Shoes, cleaning kit, spare insoles" },
        { title: "Extras", desc: "LED lights for safety" },
      ],
      rating: "4.7 (89)",
      isBestSeller: false,
    },
    {
      id: 3,
      image: "/panquecas.png", // Placeholder image
      title: "Panquecas",
      price: "Estados Unidos",
      description: "Performance basketball sneakers",
      features: [
        { title: "Upper", desc: "Synthetic leather, durable" },
        { title: "Sole", desc: "Rubber outsole, traction" },
        { title: "Comfort", desc: "Air cushioning" },
        { title: "Package", desc: "Sneakers, ankle support, extra laces" },
        { title: "Extras", desc: "Glow-in-the-dark accents" },
      ],
      rating: "4.6 (154)",
      isBestSeller: true,
    },
    {
      id: 4,
      image: "/salada.png", // Placeholder image
      title: "Salada Grega",
      price: "Grécia",
      description: "Casual lifestyle sneakers",
      features: [
        { title: "Upper", desc: "Canvas, lightweight" },
        { title: "Sole", desc: "EVA foam, flexible" },
        { title: "Comfort", desc: "Padded collar" },
        { title: "Package", desc: "Shoes, drawstring bag, care instructions" },
        { title: "Extras", desc: "Customizable color panels" },
      ],
      rating: "4.4 (67)",
      isBestSeller: false,
    },
    {
      id: 5,
      image: "/sushi.jpg", // Placeholder image
      title: "Sushi",
      price: "Japão",
      description: "Premium hiking boots",
      features: [
        { title: "Upper", desc: "Waterproof leather, reinforced" },
        { title: "Sole", desc: "Vibram tread, waterproof" },
        { title: "Comfort", desc: "Insulated lining" },
        { title: "Package", desc: "Boots, gaiters, repair kit" },
        { title: "Extras", desc: "Integrated GPS tracker" },
      ],
      rating: "4.8 (203)",
      isBestSeller: true,
    },
    {
      id: 6,
      image: "/pastel.png", // Placeholder image
      title: "Pastel de Nata",
      price: "Portugal",
      description: "Affordable everyday sneakers",
      features: [
        { title: "Upper", desc: "Knit fabric, seamless" },
        { title: "Sole", desc: "Boost technology, energy return" },
        { title: "Comfort", desc: "Contoured fit" },
        { title: "Package", desc: "Sneakers, shoe box, warranty card" },
        { title: "Extras", desc: "Eco-friendly materials" },
      ],
      rating: "4.3 (112)",
      isBestSeller: false,
    },
    {
      id: 7,
      image: "/poke.png", // Placeholder image
      title: "Poke",
      price: "Havaí",
      description: "Affordable everyday sneakers",
      features: [
        { title: "Upper", desc: "Knit fabric, seamless" },
        { title: "Sole", desc: "Boost technology, energy return" },
        { title: "Comfort", desc: "Contoured fit" },
        { title: "Package", desc: "Sneakers, shoe box, warranty card" },
        { title: "Extras", desc: "Eco-friendly materials" },
      ],
      rating: "4.3 (112)",
      isBestSeller: false,
    },
    {
      id: 8,
      image: "/fish.png", // Placeholder image
      title: "Fish and Chips",
      price: "Reino Unido",
      description: "Affordable everyday sneakers",
      features: [
        { title: "Upper", desc: "Knit fabric, seamless" },
        { title: "Sole", desc: "Boost technology, energy return" },
        { title: "Comfort", desc: "Contoured fit" },
        { title: "Package", desc: "Sneakers, shoe box, warranty card" },
        { title: "Extras", desc: "Eco-friendly materials" },
      ],
      rating: "4.3 (112)",
      isBestSeller: false,
    },
  ];

  /////////////////////////////////////////////////////////////////////////////////////////////////

  const cards = [
    {
      id: 1,
      content: (
        <Image
          src="/carbonara.jpg"
          className="w-full h-full object-cover"
          alt=""
          fill
        />
      ),
    },
    {
      id: 2,
      content: (
        <Image
          src="/guacamole.jpg"
          className="w-full h-full object-cover"
          alt=""
          fill
        />
      ),
    },
    {
      id: 3,
      content: (
        <Image
          src="/panquecas.png"
          className="w-full h-full object-cover"
          alt=""
          fill
        />
      ),
    },
    {
      id: 4,
      content: (
        <Image
          src="/salada.png"
          className="w-full h-full object-cover scale-x-[-1]"
          alt=""
          fill
        />
      ),
    },
    {
      id: 5,
      content: (
        <Image
          src="/sushi.jpg"
          className="w-full h-full object-cover"
          alt=""
          fill
        />
      ),
    },
    {
      id: 6,
      content: (
        <Image
          src="/pastel.png"
          className="w-full h-full object-cover"
          alt=""
          fill
        />
      ),
    },
    {
      id: 7,
      content: (
        <Image
          src="/poke.png"
          className="w-full h-full object-cover"
          alt=""
          fill
        />
      ),
    },
    {
      id: 8,
      content: (
        <Image
          src="/fish.png"
          className="w-full h-full object-cover"
          alt=""
          fill
        />
      ),
    },
  ];

  return (
    <div className="h-25 sm:sm:h-75 w-full select-none items-center">
      <ExpandableCards cards={cards} defaultExpanded={3} />

      <br></br>
      <hr
        style={{
          border: "10px solid #1F2937",
          height: "10px",
          backgroundColor: "#333",
          width: "100%",
        }}
      ></hr>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 p-4 ml-5">
        {products.map((product) => (
          <CardFlip key={product.id} className="w-full max-w-sm select-none">
            <CardFlipFront className="flex flex-col justify-between h-auto">
              <div className="mx-4 h-48 w-[calc(100%-2rem)] rounded-lg overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex items-center justify-between px-4">
                <div className="flex items-center space-x-1 text-sm font-medium text-primary/70">
                  <Star className="w-5 h-5 fill-primary text-primary" />
                  <span>{product.rating}</span>
                </div>
              </div>
              <CardFlipHeader>
                <CardFlipTitle>{product.title}</CardFlipTitle>
                <p className="text-2xl p-1 font-bold">{product.price}</p>
              </CardFlipHeader>
              <CardFlipContent className="flex-1 overflow-auto">
                <div className="flex items-center space-x-2 px-4">
                  {sizes.map((size) => (
                    <Button
                      key={size}
                      size="sm"
                      variant={selectedSize === size ? "default" : "outline"}
                      className="w-8 h-8 p-0 flex items-center justify-center relative"
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </CardFlipContent>
              <CardFlipFooter className="flex gap-4 items-stretch">
                <button className="flex-1 bg-primary py-1 text-primary-foreground px-4 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center">
                  Adicionar aos favoritos
                </button>
                <button className="w-12 bg-primary py-1 text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5" />
                </button>
              </CardFlipFooter>
            </CardFlipFront>

            <CardFlipBack className="h-full flex flex-col">
              <CardFlipHeader>
                <CardFlipTitle>{product.title}</CardFlipTitle>
                <CardFlipDescription>{product.description}</CardFlipDescription>
              </CardFlipHeader>
              <CardFlipContent className="flex-1 overflow-auto space-y-4">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Box className="text-primary w-6 h-6 mt-1" />
                    <div>
                      <h4 className="font-semibold">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </CardFlipContent>
              <CardFlipFooter className="border-t">
                <p className="text-xs mt-4">
                  Free express shipping over $2,999
                </p>
              </CardFlipFooter>
            </CardFlipBack>
          </CardFlip>
        ))}
      </div>

      <br></br>
    </div>
  );
}
