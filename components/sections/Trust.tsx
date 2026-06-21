"use client";

import { motion } from "framer-motion";

const brands = [
  "Aesop",
  "Byredo",
  "Le Labo",
  "Diptyque",
  "Aura",
  "Maison",
  "Kinto",
  "Oribe"
];

export default function Trust() {
  return (
    <section className="py-24 md:py-32 bg-background border-b border-foreground/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-12 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-foreground/40 font-medium">
          Trusted by modern luxury brands
        </p>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10" />
        
        <div className="py-8 flex space-x-16 md:space-x-24 animate-marquee whitespace-nowrap opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
          {[...brands, ...brands, ...brands].map((brand, i) => (
            <span key={i} className="font-serif text-3xl md:text-5xl text-foreground/80 hover:text-foreground cursor-default transition-colors">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
