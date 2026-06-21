"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import MagneticButton from "../ui/MagneticButton";

const navLinks = [
  { name: "Çalışmalarımız", href: "#work" },
  { name: "Ürünler", href: "#products" },
  { name: "İşçilik", href: "#craftsmanship" },
  { name: "Sürecimiz", href: "#process" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-colors duration-500",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-foreground/5 py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="group relative z-10">
          <span className="font-serif text-2xl font-bold tracking-tight text-foreground uppercase flex items-center gap-2">
            Digipress
            <span className="text-accent text-sm font-sans tracking-widest mt-1">
              Etiket
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium tracking-wide text-foreground/80 hover:text-accent transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <MagneticButton>
            <Link
              href="#quote"
              className="px-6 py-2.5 bg-foreground text-background text-sm font-medium rounded-full hover:bg-accent transition-colors duration-300"
            >
              Teklif Al
            </Link>
          </MagneticButton>
        </div>

        {/* Mobile Menu Toggle (simplified for now) */}
        <button className="md:hidden flex flex-col gap-1.5 z-10 group">
          <span className="w-6 h-[2px] bg-foreground transition-all duration-300 group-hover:bg-accent" />
          <span className="w-4 h-[2px] bg-foreground transition-all duration-300 group-hover:bg-accent" />
        </button>
      </div>
    </motion.header>
  );
}
