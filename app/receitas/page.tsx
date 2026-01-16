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

export default function Receitas() {
  const products = [
    {
      id: 1,
      image: "/carbonara.jpg",
      title: "Massa Carbonara",
      price: "Itália",
      description: "Massa italiana cremosa com queijo, ovo e pancetta",
      features: [
        {
          title: "Preparar Ingredientes",
          desc: "Coza a massa e corte a pancetta",
        },
        {
          title: "Saltear Pancetta",
          desc: "Frite até ficar dourada e crocante",
        },
        {
          title: "Misturar Ovos e Queijo",
          desc: "Bata as gemas com pecorino ou parmesão",
        },
        {
          title: "Juntar à Massa Quente",
          desc: "Envolva tudo fora do lume para não talhar",
        },
        {
          title: "Finalizar e Servir",
          desc: "Ajuste a pimenta e sirva de imediato",
        },
      ],
      rating: "4.7 (892) Dificulade: Média",
    },
    {
      id: 2,
      image: "/guacamole.jpg", // Placeholder image
      title: "Guacamole",
      price: "México",
      description: "Dip mexicano fresco com abacate, lima e coentros",
      features: [
        {
          title: "Preparar Abacates",
          desc: "Abre, retira o caroço e esmaga grosseiramente",
        },
        {
          title: "Adicionar Aromas",
          desc: "Junta cebola, tomate e coentros picados",
        },
        { title: "Temperar", desc: "Acrescenta sal, pimenta e sumo de lima" },
        {
          title: "Ajustar Textura",
          desc: "Mistura até a consistência ficar cremosa",
        },
        {
          title: "Servir Fresco",
          desc: "Ideal com nachos ou como acompanhamento",
        },
      ],
      rating: "4.8 (654) Muito Fácil",
    },
    {
      id: 3,
      image: "/panquecas.png", // Placeholder image
      title: "Panquecas",
      price: "Estados Unidos",
      description: "Panquecas fofas feitas com massa leve e amanteigada",
      features: [
        { title: "Misturar Secos", desc: "Farinha, açúcar, fermento e sal" },
        {
          title: "Adicionar Líquidos",
          desc: "Leite, ovo e manteiga derretida",
        },
        {
          title: "Descansar a Massa",
          desc: "Deixa repousar para ficar mais fofa",
        },
        {
          title: "Cozinhar na Frigideira",
          desc: "Vira quando aparecerem bolhas",
        },
        {
          title: "Servir com Toppings",
          desc: "Mel, fruta, manteiga ou o que preferires",
        },
      ],
      rating: "4.9 (1201) Dificuldade: Fácil",
    },
    {
      id: 4,
      image: "/salada.png", // Placeholder image
      title: "Salada Grega",
      price: "Grécia",
      description: "Salada mediterrânica com tomate, pepino, azeitonas e feta",
      features: [
        {
          title: "Cortar Legumes",
          desc: "Tomate, pepino, cebola roxa e pimento",
        },
        { title: "Adicionar Azeitonas", desc: "De preferência kalamata" },
        { title: "Juntar Queijo Feta", desc: "Em cubos ou lascas generosas" },
        {
          title: "Temperar",
          desc: "Azeite, oregãos, sal e um pouco de vinagre",
        },
        {
          title: "Misturar e Servir",
          desc: "Não mexer demasiado para não desfazer o feta",
        },
      ],
      rating: "4.7 (378) Dificuldade: Muito Fácil",
    },
    {
      id: 5,
      image: "/sushi.jpg", // Placeholder image
      title: "Sushi",
      price: "Japão",
      description: "Arroz temperado enrolado com peixe fresco e vegetais",
      features: [
        {
          title: "Preparar Arroz",
          desc: "Cozer, temperar com vinagre e arrefecer",
        },
        {
          title: "Cortar Ingredientes",
          desc: "Peixe, pepino, abacate, tudo em tiras",
        },
        {
          title: "Montar o Rolo",
          desc: "Nori por baixo, arroz por cima e recheio ao centro",
        },
        {
          title: "Enrolar com Cuidado",
          desc: "Usa um tapete de bambu para apertar",
        },
        { title: "Cortar e Servir", desc: "Fatias limpas com faca molhada" },
      ],
      rating: "4.8 (203) Dificuldade: Difícil",
    },
    {
      id: 6,
      image: "/pastel.png", // Placeholder image
      title: "Pastel de Nata",
      price: "Portugal",
      description: "Doce português com massa folhada crocante e creme suave",
      features: [
        { title: "Preparar Creme", desc: "Leite, açúcar, gemas e baunilha" },
        {
          title: "Espessar no Lume",
          desc: "Cozinha até engrossar ligeiramente",
        },
        { title: "Forrar as Formas", desc: "Com massa folhada bem fina" },
        {
          title: "Encher e Assar",
          desc: "Forno muito quente para caramelizar",
        },
        {
          title: "Servir Quente",
          desc: "Polvilhado com canela ou açúcar em pó",
        },
      ],
      rating: "4.9 (1550) Dificuldade: Difícil",
    },
    {
      id: 7,
      image: "/poke.png", // Placeholder image
      title: "Poke",
      price: "Havaí",
      description: "Tigela havaiana com arroz, peixe cru e toppings frescos",
      features: [
        { title: "Preparar Base", desc: "Arroz de sushi ou arroz integral" },
        { title: "Cortar o Peixe", desc: "Atum ou salmão em cubos" },
        {
          title: "Temperar o Peixe",
          desc: "Molho de soja, sésamo, lima e gengibre",
        },
        {
          title: "Adicionar Toppings",
          desc: "Abacate, edamame, pepino, algas",
        },
        {
          title: "Montar a Tigela",
          desc: "Organiza todos os ingredientes e serve frio",
        },
      ],
      rating: "4.8 (214) Dificuldade: Fácil",
    },
    {
      id: 8,
      image: "/fish.png", // Placeholder image
      title: "Fish and Chips",
      price: "Reino Unido",
      description: "Affordable everyday sneakers",
      features: [
        {
          title: "Preparar as Batatas",
          desc: "Cortar e pré-cozer ligeiramente",
        },
        {
          title: "Fazer a Massa do Peixe",
          desc: "Cerveja, farinha e temperos",
        },
        { title: "Fritar o Peixe", desc: "Até ficar dourado e estaladiço" },
        {
          title: "Fritar as Batatas",
          desc: "Segunda fritura para ficarem crocantes",
        },
        {
          title: "Servir com Molho",
          desc: "Tártaro, limão ou vinagre maltado",
        },
      ],
      rating: "4.6 (447) Dificuldade: Média",
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

      <div
        style={{
          border: "10px solid #1F2937",
          height: "50px",
          backgroundColor: "#1F2937",
          width: "100%",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <h2 style={{ fontSize: "30px", fontFamily: "Dancing Script, cursive" }}>
          Receitas
        </h2>
      </div>

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
                <div className="flex items-center space-x-2 px-4"></div>
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
                <p className="text-small mt-4 text-center">
                  &quot;Cozinhar é sobre paixão, não sobre perfeição&quot;
                  <span className="block mt-1 text-center">
                    — Gordon Ramsay
                  </span>
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
