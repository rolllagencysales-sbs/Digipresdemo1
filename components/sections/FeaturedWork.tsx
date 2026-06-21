"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";

const projects = [
  {
    title: "Aura Botanica",
    category: "Ambalaj & Etiket",
    image: "/placeholder/luxury_labels.png",
    description: "Premium bir cilt bakım serisinin kutu açılış deneyimini dokulu siyah kağıt ve altın yaldız detaylarıyla zenginleştirdik."
  },
  {
    title: "Maison Blanc",
    category: "Marka Kimliği & Baskı",
    image: "/placeholder/thank_you_cards.png",
    description: "Ağır gramajlı fildişi karton ve zarif tipo baskı ile müşteri temas noktalarının baştan aşağı yenilenmesi."
  }
];

export default function FeaturedWork() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="work" className="py-32 md:py-48 bg-background relative" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Seçilmiş Çalışmalar" 
          subtitle="Fiziksel marka temas noktalarını titiz bir işçilikle nasıl unutulmaz lüks deneyimlere dönüştürdüğümüzü keşfedin." 
        />

        <div className="flex flex-col gap-24 md:gap-40 mt-24">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: { title: string; category: string; image: string; description: string }, index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div 
      ref={cardRef} 
      className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 lg:gap-24 items-center group`}
    >
      <div className="w-full md:w-3/5 overflow-hidden bg-dark-muted aspect-[4/3] relative rounded-lg">
        <motion.div style={{ y }} className="w-full h-[120%] relative -top-[10%]">
          <Image 
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </motion.div>
      </div>
      <div className="w-full md:w-2/5 flex flex-col justify-center">
        <div className="overflow-hidden mb-4">
          <span className="block text-sm uppercase tracking-widest text-foreground/50 font-medium">
            {project.category}
          </span>
        </div>
        <h3 className="font-serif text-3xl md:text-5xl text-foreground mb-6 group-hover:text-accent transition-colors duration-500">
          {project.title}
        </h3>
        <p className="text-lg text-foreground/70 font-light leading-relaxed mb-8">
          {project.description}
        </p>
        <div>
          <button className="relative inline-flex items-center gap-2 pb-1 border-b border-foreground/20 hover:border-accent text-foreground hover:text-accent transition-colors duration-300">
            Vaka Analizini İncele
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
