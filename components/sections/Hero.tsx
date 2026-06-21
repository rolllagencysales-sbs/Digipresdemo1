"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import MagneticButton from "../ui/MagneticButton";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section 
      ref={container}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-dark"
    >
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        {/* Placeholder for the premium generated image */}
        <div className="absolute inset-0 bg-dark/40 z-10" />
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/placeholder/luxury_labels.png')" }} 
        />
        {/* We will setup the image correctly later or use a generic abstract gradient if image not copied yet */}
      </motion.div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block mb-6 px-4 py-1.5 rounded-full border border-ivory/20 bg-ivory/5 backdrop-blur-md"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-ivory/80 font-medium">Premium Baskı Stüdyosu</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-5xl md:text-7xl lg:text-[7rem] text-ivory leading-[1.05] tracking-tight max-w-5xl mb-8"
        >
          Her Paket <br />
          <span className="italic text-accent">Bir Hikaye Anlatır.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-ivory/70 max-w-2xl font-light leading-relaxed mb-12"
        >
          Markanızın değerini ve algısını en üst düzeye çıkarmak için özenle üretilmiş premium etiketler, çıkartmalar, kartlar ve baskı çözümleri.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <MagneticButton>
            <Link 
              href="#quote" 
              className="px-8 py-4 bg-accent text-dark text-lg font-medium rounded-full hover:bg-ivory transition-colors duration-500 inline-flex items-center gap-2 group"
            >
              Özel Teklif Al
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </MagneticButton>

          <MagneticButton>
            <Link 
              href="https://wa.me/+905550201954" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-transparent border border-ivory/30 text-ivory text-lg font-medium rounded-full hover:bg-ivory/10 transition-colors duration-500 inline-flex items-center gap-2 group"
            >
              Hemen Bilgi Al
              <span className="group-hover:translate-x-1 transition-transform duration-300">↗</span>
            </Link>
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-xs uppercase tracking-widest text-ivory/50">Keşfetmek İçin Kaydır</span>
        <div className="w-[1px] h-12 bg-ivory/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-ivory"
          />
        </div>
      </motion.div>
    </section>
  );
}
