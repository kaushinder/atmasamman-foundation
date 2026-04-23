import { ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Heart, Mail, Phone, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/programs", label: "Programs" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-sm border-border py-3"
            : "bg-background/80 backdrop-blur-sm py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-md group-hover:scale-105 transition-transform">
              <Heart className="w-5 h-5 fill-current" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl leading-none text-foreground">Atmasamman</span>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">Foundation</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === link.href ? "text-primary" : "text-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button className="rounded-full px-6 shadow-md hover:shadow-lg transition-all" asChild>
              <Link href="/contact">Donate Now</Link>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden flex flex-col gap-6 animate-in slide-in-from-top-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-2xl font-serif py-2 border-b border-border ${
                  location === link.href ? "text-primary" : "text-foreground"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto pb-12">
            <Button className="w-full rounded-full" size="lg" onClick={() => setMobileMenuOpen(false)} asChild>
               <Link href="/contact">Donate Now</Link>
            </Button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                  <Heart className="w-5 h-5 fill-current" />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif font-bold text-2xl leading-none text-white">Atmasamman</span>
                  <span className="text-xs uppercase tracking-widest text-white/60 font-semibold">Foundation</span>
                </div>
              </div>
              <p className="text-secondary-foreground/80 max-w-md text-sm leading-relaxed mb-6">
                A charitable trust dedicated to social upliftment, human dignity, and community welfare. Honoring every human as worthy of respect and opportunity through selfless service.
              </p>
            </div>
            
            <div>
              <h3 className="font-serif font-semibold text-lg mb-4 text-white">Quick Links</h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-secondary-foreground/80 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-serif font-semibold text-lg mb-4 text-white">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-secondary-foreground/80">
                  <MapPin className="w-5 h-5 text-primary shrink-0" />
                  <span>123 Seva Marg, Heritage District<br/>New Delhi, 110001, India</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-secondary-foreground/80">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-secondary-foreground/80">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <span>namaste@atmasamman.org</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-secondary-foreground/60">
            <p>&copy; {new Date().getFullYear()} Atmasamman Foundation. All rights reserved.</p>
            <div className="flex gap-4">
              <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
