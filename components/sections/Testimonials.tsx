"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";

const testimonials = [
  {
    quote: "Digipress transformed our packaging into a tactile experience. The quality of the hot foil stamping and the texture of the paper elevated our brand perception instantly.",
    author: "Elena Rossi",
    role: "Creative Director, Maison Blanc"
  },
  {
    quote: "A true partner in print. They don't just execute; they advise on materials and techniques to achieve the most luxurious result possible.",
    author: "James Chen",
    role: "Founder, Aura Botanica"
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 md:py-48 bg-background relative border-t border-foreground/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div>
            <SectionHeading 
              title="Words from our Partners" 
              subtitle="We build lasting relationships with brands that refuse to compromise on quality."
            />
          </div>

          <div className="flex flex-col gap-24 mt-8 lg:mt-32">
            {testimonials.map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative"
              >
                <span className="absolute -top-16 -left-8 text-[8rem] font-serif text-accent/10 leading-none">
                  &quot;
                </span>
                <p className="font-serif text-2xl md:text-4xl text-foreground leading-relaxed mb-8 relative z-10">
                  {t.quote}
                </p>
                <div>
                  <h5 className="font-medium text-foreground uppercase tracking-wider text-sm mb-1">{t.author}</h5>
                  <p className="text-foreground/50 font-light text-sm">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
