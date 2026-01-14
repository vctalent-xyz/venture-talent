import { Link, useLocation } from "wouter";
import { Terminal, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { href: "/about", label: "ABOUT" },
    { href: "/offers/sourcing", label: "SOURCING" },
    { href: "/offers/fractional", label: "FRACTIONAL" },
    { href: "/offers/research", label: "RESEARCH" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/90">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2 group cursor-pointer">
              <div className="p-1 bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                <Terminal className="w-5 h-5 text-primary" />
              </div>
              <span className="font-heading font-bold text-lg tracking-tighter">
                <span className="text-purple-400">Venture</span><span className="text-white">Talent</span><span className="text-primary">.io</span>
              </span>
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a className={`font-mono text-xs tracking-widest hover:text-primary transition-colors ${location === link.href ? "text-primary" : "text-muted-foreground"}`}>
                  {link.label}
                </a>
              </Link>
            ))}
            <Link href="/contact">
              <a className="px-4 py-2 bg-primary text-black font-mono text-xs font-bold hover:bg-primary/90 transition-colors uppercase">
                Book Intro
              </a>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 pt-20 bg-background md:hidden">
          <nav className="flex flex-col items-center gap-8 p-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a 
                  onClick={() => setIsMenuOpen(false)}
                  className="font-heading text-2xl font-bold hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              </Link>
            ))}
            <Link href="/contact">
              <a 
                onClick={() => setIsMenuOpen(false)}
                className="w-full max-w-xs text-center px-6 py-3 bg-primary text-black font-mono font-bold uppercase"
              >
                Book Intro
              </a>
            </Link>
          </nav>
        </div>
      )}

      <main className="flex-1 pt-16">
        {children}
      </main>

      <footer className="border-t border-white/10 py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Terminal className="w-5 h-5 text-primary" />
              <span className="font-heading font-bold text-lg"><span className="text-purple-400">Venture</span><span className="text-white">Talent</span><span className="text-primary">.io</span></span>
            </div>
            <p className="text-muted-foreground font-mono text-xs max-w-xs">
              High-signal recruiting powered by an elite talent network.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-12">
            <div className="space-y-4">
              <h4 className="font-mono text-xs text-primary uppercase tracking-widest">Services</h4>
              <ul className="space-y-2">
                <li><Link href="/offers/sourcing"><a className="text-sm text-muted-foreground hover:text-white transition-colors">Sourcing Pods</a></Link></li>
                <li><Link href="/offers/fractional"><a className="text-sm text-muted-foreground hover:text-white transition-colors">Fractional Partner</a></Link></li>
                <li><Link href="/offers/research"><a className="text-sm text-muted-foreground hover:text-white transition-colors">Research Map</a></Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-mono text-xs text-primary uppercase tracking-widest">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">Twitter / X</a></li>
                <li><a href="https://www.linkedin.com/company/venturetalentio/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3Bkxonk%2Fv4SSKGk%2FPemeUoEg%3D%3D" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-white transition-colors">LinkedIn</a></li>
                <li><Link href="/contact"><a className="text-sm text-muted-foreground hover:text-white transition-colors">Book Call</a></Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-white/5 text-center md:text-left">
          <p className="text-xs text-muted-foreground font-mono">© 2025 VentureTalent.io. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
