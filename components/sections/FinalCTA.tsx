"use client";

import Link from "next/link";
import MagneticButton from "../ui/MagneticButton";

export default function FinalCTA() {
  return (
    <section id="quote" className="py-48 md:py-64 bg-background relative overflow-hidden flex items-center justify-center text-center">
      <div className="absolute inset-0 bg-[url('/placeholder/luxury_labels.png')] bg-cover bg-center opacity-[0.03] grayscale" />
      
      <div className="container relative z-10 mx-auto px-6">
        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground mb-12 tracking-tight max-w-5xl mx-auto leading-tight">
          Birlikte <span className="italic text-accent">Unutulmaz</span> Bir Şey Yaratalım.
        </h2>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-16">
          <MagneticButton>
            <button className="px-10 py-5 bg-foreground text-background text-lg font-medium rounded-full hover:bg-accent hover:text-dark transition-colors duration-500 shadow-2xl">
              Teklif Al
            </button>
          </MagneticButton>

          <MagneticButton>
            <Link
              href="https://wa.me/+905550201954" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-transparent border border-foreground/30 text-foreground text-lg font-medium rounded-full hover:bg-foreground/5 transition-colors duration-500 shadow-2xl inline-flex items-center gap-2"
            >
              Hemen Bilgi Al
              <span className="text-xl">↗</span>
            </Link>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
