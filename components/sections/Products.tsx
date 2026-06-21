"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { ArrowUpRight } from "lucide-react";

const products = [
  { id: "01", name: "Premium Etiketler", image: "/placeholder/luxury_labels.png" },
  { id: "02", name: "Özel Çıkartmalar", image: "/placeholder/luxury_labels.png" }, 
  { id: "03", name: "Teşekkür Kartları", image: "/placeholder/thank_you_cards.png" },
  { id: "04", name: "Ambalaj İçi Kartlar", image: "/placeholder/packaging_insert.png" },
];

export default function Products() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="products" className="py-24 md:py-32 bg-dark text-ivory relative min-h-[80vh] flex flex-col justify-center">
      {/* Background Image Reveal */}
      <AnimatePresence>
        {hoveredIndex !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.4, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${products[hoveredIndex].image})` }}
          />
        )}
      </AnimatePresence>
      <div className="absolute inset-0 bg-dark/60 z-0" />

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Koleksiyon" 
          subtitle="Her biri hassasiyetle ve kaliteden ödün vermeden üretilmiş premium baskı materyallerimizi keşfedin."
          className="text-ivory"
        />

        <div className="mt-16 md:mt-24 border-t border-ivory/20">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="group border-b border-ivory/20 flex flex-col md:flex-row md:items-center justify-between py-8 md:py-12 cursor-pointer transition-colors duration-500 hover:bg-ivory/5 px-4 -mx-4 md:px-8 md:-mx-8"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <div className="flex items-baseline gap-6 md:gap-12">
                <span className="text-xl md:text-2xl font-serif text-ivory/40 group-hover:text-accent transition-colors duration-300">
                  {product.id}
                </span>
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif text-ivory group-hover:text-ivory transition-colors duration-300">
                  {product.name}
                </h3>
              </div>
              <div className="mt-6 md:mt-0 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                <div className="w-12 h-12 rounded-full border border-ivory/30 flex items-center justify-center bg-ivory/10 backdrop-blur-sm group-hover:border-accent group-hover:bg-accent text-ivory group-hover:text-dark transition-all duration-300">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
