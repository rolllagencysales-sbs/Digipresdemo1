"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "../ui/SectionHeading";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { num: "01", title: "Keşfet", desc: "Sağlam bir temel oluşturmak için markanızın ruhunu, estetik ve işlevsel gereksinimlerini anlıyoruz." },
  { num: "02", title: "Tasarla", desc: "Vizyonunuzu somut bir hale getirmek için işbirlikçi prototipleme, malzeme seçimi ve yapısal tasarım." },
  { num: "03", title: "Üret", desc: "Son teknoloji baskı ve zanaatkar bitirme teknikleri kullanılarak yapılan kusursuz üretim." },
  { num: "04", title: "Teslim Et", desc: "Premium ürünlerinizin mükemmel durumda ulaşmasını sağlayan özenli paketleme ve teslimat." }
];

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".process-step");
      
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          snap: {
            snapTo: 1 / (panels.length - 1),
            duration: { min: 0.2, max: 0.5 },
            delay: 0
          },
          end: () => "+=" + (containerRef.current?.offsetWidth || 0)
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={sectionRef} className="bg-dark text-ivory h-screen flex flex-col justify-center overflow-hidden relative">
      <div className="absolute top-24 left-6 md:left-12 z-20">
        <h2 className="font-serif text-4xl md:text-5xl text-ivory">Sürecimiz</h2>
      </div>

      <div className="flex items-center w-full h-full" ref={containerRef}>
        <div className="flex w-[400vw] h-full items-center">
          {steps.map((step, i) => (
            <div key={i} className="process-step w-[100vw] h-full flex flex-col justify-center items-center px-6 md:px-24">
              <div className="max-w-2xl w-full">
                <span className="font-serif text-[12rem] md:text-[18rem] leading-none text-ivory/5 block mb-8 relative -left-8">
                  {step.num}
                </span>
                <div className="relative -top-24 md:-top-32">
                  <h3 className="font-serif text-4xl md:text-6xl mb-6 text-ivory">{step.title}</h3>
                  <p className="text-xl md:text-2xl text-ivory/70 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
