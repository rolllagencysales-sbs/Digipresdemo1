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
              title="Baskı Sanatı" 
              subtitle="Biz sadece baskı yapmıyoruz; fiziksel marka deneyimleri tasarlıyoruz. Premium kağıtların dokusal hissinden, sıcak yaldızın kusursuz parıltısına kadar." 
            />
            
            <div className="space-y-12 mt-16">
              {[
                { title: "Premium Materyaller", desc: "Dünyanın dört bir yanından özenle seçilmiş, derin dokusal kaliteye sahip özel kağıtlar ve yüzeyler." },
                { title: "Yüksek Çözünürlüklü Detay", desc: "Mutlak netlik, renk doğruluğu ve kusursuz mikro tipografi sağlayan son teknoloji baskı." },
                { title: "Özel Dokunuşlar", desc: "Çarpıcı boyut efektleri yaratmak için sıcak yaldız, gofre (kabartma) ve lokal lak uygulamalarında ustalık." }
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
                alt="Altın yaldız makro detayı" 
                fill 
                className="object-cover scale-110" 
              />
            </motion.div>
            
            {/* Parallax Image 2 */}
            <motion.div style={{ y: y2 }} className="absolute left-[10%] bottom-[10%] w-[55%] md:w-[45%] aspect-[4/5] z-20 shadow-2xl overflow-hidden rounded-sm">
              <Image 
                src="/placeholder/packaging_insert.png" 
                alt="Premium dokulu kağıt" 
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
