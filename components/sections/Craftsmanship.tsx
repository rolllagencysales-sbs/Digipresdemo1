"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";

export default function Craftsmanship() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section id="craftsmanship" className="py-32 md:py-48 bg-background relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          <div className="lg:col-span-5 z-10">
            <SectionHeading 
              title="The Art of Print" 
              subtitle="We don't just print; we engineer physical brand experiences. From the tactile grain of premium papers to the precise gleam of hot foil." 
            />
            
            <div className="space-y-12 mt-16">
              {[
                { title: "Premium Materials", desc: "Sourced globally, our textured papers and specialized substrates are chosen for their profound tactile quality." },
                { title: "High-Fidelity Detail", desc: "State-of-the-art print technology ensuring absolute clarity, color accuracy, and flawless micro-typography." },
                { title: "Embellishments", desc: "Masterful application of hot foil stamping, blind embossing, and spot UV to create striking dimensional effects." }
              ].map((item, i) => (
                <div key={i} className="group">
                  <h4 className="font-serif text-2xl text-foreground mb-3 group-hover:text-accent transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-foreground/70 font-light leading-relaxed max-w-md">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 relative h-[80vh] min-h-[600px] flex items-center justify-center">
            {/* Parallax Image 1 */}
            <motion.div style={{ y: y1 }} className="absolute right-0 top-[10%] w-[60%] md:w-[50%] aspect-[3/4] z-10 shadow-2xl overflow-hidden rounded-sm">
              <Image 
                src="/placeholder/luxury_labels.png" 
                alt="Macro detail of gold foil" 
                fill 
                className="object-cover scale-110" 
              />
            </motion.div>
            
            {/* Parallax Image 2 */}
            <motion.div style={{ y: y2 }} className="absolute left-[10%] bottom-[10%] w-[55%] md:w-[45%] aspect-[4/5] z-20 shadow-2xl overflow-hidden rounded-sm">
              <Image 
                src="/placeholder/packaging_insert.png" 
                alt="Premium textured paper" 
                fill 
                className="object-cover scale-110" 
              />
            </motion.div>

            {/* Decorative Element */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-accent/20 rounded-full blur-3xl opacity-50 z-0" />
          </div>

        </div>
      </div>
    </section>
  );
}
