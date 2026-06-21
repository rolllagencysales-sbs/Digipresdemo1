import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Trust from "@/components/sections/Trust";
import FeaturedWork from "@/components/sections/FeaturedWork";
import Products from "@/components/sections/Products";
import Craftsmanship from "@/components/sections/Craftsmanship";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-background">
        <Hero />
        <Trust />
        <FeaturedWork />
        <Products />
        <Craftsmanship />
        <Process />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
