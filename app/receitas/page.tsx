"use client";

import Image from "next/image";
import ExpandableCards from "@/components/ui/expandable-cards";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Receitas() {
  const cards = [
    {
      id: 1,
      content: (
        <img
          src="carbonara.jpg"
          className="w-full h-full object-cover"
          alt=""
        />
      ),
    },
    {
      id: 2,
      content: (
        <img
          src="guacamole.jpg"
          className="w-full h-full object-cover"
          alt=""
        />
      ),
    },
    {
      id: 3,
      content: (
        <img
          src="panquecas.png"
          className="w-full h-full object-cover"
          alt=""
        />
      ),
    },
    {
      id: 4,
      content: (
        <img
          src="salada.png"
          className="w-full h-full object-cover scale-x-[-1]"
          alt=""
        />
      ),
    },
    {
      id: 5,
      content: (
        <img src="sushi.jpg" className="w-full h-full object-cover" alt="" />
      ),
    },
  ];

  return (
    <div className="h-[100px] sm:h-[300px] w-full select-none">
      <ExpandableCards cards={cards} defaultExpanded={3} />
      <br></br>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Spaghetti à Carbonara</AccordionTrigger>
          <AccordionContent>
            Coza o esparguete em água com sal até ficar al dente. Enquanto isso,
            salteie a pancetta ou o bacon numa frigideira até ficar crocante.
            Numa taça, bata os ovos com queijo parmesão ralado e
            pimenta-do-reino. Escorra a massa, junte-a à frigideira com a
            pancetta e retire do lume. Adicione a mistura de ovos e queijo,
            mexendo rapidamente para criar um molho cremoso sem talhar. Sirva
            com mais parmesão e pimenta por cima.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Guacamole</AccordionTrigger>
          <AccordionContent>
            Descasque e amasse os abacates maduros numa taça. Junte a cebola
            picada, o tomate em cubos, os coentros frescos e o sumo de limão.
            Tempere com sal e, se desejar, um pouco de pimenta ou malagueta para
            dar picante. Misture bem e sirva com tortilhas ou como
            acompanhamento de pratos mexicanos.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Panquecas Americanas</AccordionTrigger>
          <AccordionContent>
            Misture a farinha, o açúcar, o fermento e uma pitada de sal numa
            taça. Noutra, bata os ovos com o leite e um pouco de manteiga
            derretida. Junte os líquidos aos secos e mexa até obter uma massa
            homogénea. Aqueça uma frigideira untada e coloque pequenas porções
            de massa. Quando surgirem bolhas à superfície, vire e deixe dourar
            do outro lado. Sirva com manteiga, mel ou xarope de ácer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Salada Grega</AccordionTrigger>
          <AccordionContent>
            Corte os tomates, os pepinos e a cebola roxa em pedaços. Junte as
            azeitonas pretas e o queijo feta em cubos. Tempere com azeite, sal,
            orégãos e um pouco de vinagre. Misture tudo suavemente e sirva
            fresca como entrada ou acompanhamento.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Sushi Japonês</AccordionTrigger>
          <AccordionContent>
            Lave bem o arroz próprio para sushi e coza-o até ficar macio.
            Tempere com vinagre de arroz, açúcar e sal. Corte peixe fresco como
            salmão ou atum em fatias finas. Para nigiri, molde pequenas porções
            de arroz e coloque o peixe por cima. Para maki, coloque arroz sobre
            uma folha de alga nori, adicione peixe e vegetais, enrole com uma
            esteira e corte em pedaços. Sirva com molho de soja, wasabi e
            gengibre.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
