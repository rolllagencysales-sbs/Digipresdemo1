import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark text-background py-24 md:py-32 rounded-t-[3rem] -mt-10 relative z-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 mb-24">
          <div className="lg:col-span-2">
            <h2 className="font-serif text-4xl md:text-6xl text-ivory mb-6 max-w-lg leading-tight">
              Birlikte <span className="text-accent italic">olağanüstü</span> bir şeyler yaratalım.
            </h2>
            <Link 
              href="mailto:hello@digipressetiket.com" 
              className="inline-flex items-center gap-2 text-xl border-b border-ivory/30 pb-1 hover:border-accent hover:text-accent transition-colors duration-300"
            >
              hello@digipressetiket.com
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-widest text-ivory/50 mb-6">Menü</h3>
            <ul className="space-y-4">
              {[
                { name: 'Ana Sayfa', href: '#' },
                { name: 'Çalışmalarımız', href: '#work' },
                { name: 'Ürünler', href: '#products' },
                { name: 'İşçilik', href: '#craftsmanship' },
                { name: 'Sürecimiz', href: '#process' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-ivory hover:text-accent transition-colors duration-300">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-widest text-ivory/50 mb-6">Sosyal Medya</h3>
            <ul className="space-y-4">
              {['Instagram', 'LinkedIn', 'Behance', 'Dribbble'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-ivory hover:text-accent transition-colors duration-300 inline-flex items-center gap-1 group">
                    {item}
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pt-8 border-t border-ivory/10 text-sm text-ivory/50">
          <p>© {new Date().getFullYear()} Digipress Etiket. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-ivory transition-colors">Gizlilik Politikası</Link>
            <Link href="#" className="hover:text-ivory transition-colors">Kullanım Şartları</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
