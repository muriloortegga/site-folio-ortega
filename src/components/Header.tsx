import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/trabalho", label: "Portfólio" },
  { to: "/servicos", label: "Serviços" },
  { to: "/sobre", label: "Sobre" },
  { to: "https://wa.me/5511941765691?text=gostaria%20de%20fazer%20um%20or%C3%A7amento!", label: "Contato", isExternal: true },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "site-header fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "bg-background/40 backdrop-blur-3xl border-b border-border/10 shadow-sm" : "bg-transparent"
        )}
      >
        <div className="site-container flex items-center justify-between h-24">
          <Link to="/" className="text-foreground text-lg font-bold tracking-tight uppercase">
            Murilo Ortega
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              link.isExternal ? (
                <a
                  key={link.to}
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "text-[10px] font-mono uppercase tracking-widest transition-all hover:text-secondary",
                  window.location.pathname === link.to ? "text-secondary" : "text-foreground"
                )}
                {...(link.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 ml-4 pl-4 border-l border-border/50">
               <button className="text-[9px] font-mono font-bold border-b border-foreground">PT</button>
               <span className="text-[9px] opacity-20">/</span>
               <button className="text-[9px] font-mono opacity-40 hover:opacity-100">EN</button>
            </div>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-background flex flex-col">
          <div className="site-container flex items-center justify-between h-24">
            <Link
              to="/"
              className="text-foreground text-lg font-bold tracking-tight uppercase"
              onClick={() => setMenuOpen(false)}
            >
              Murilo Ortega
            </Link>
            <button
              className="text-foreground p-2"
              onClick={() => setMenuOpen(false)}
              aria-label="Fechar menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col items-start site-container mt-12 gap-8">
            <div className="flex flex-col items-start gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "text-4xl font-bold uppercase tracking-tighter transition-all hover:text-secondary",
                    window.location.pathname === link.to ? "text-secondary" : "text-foreground"
                  )}
                  {...(link.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex gap-4 mt-8 pt-8 border-t border-border w-full">
                 <button className="text-xs font-mono font-bold border-b-2 border-foreground pb-1">PT</button>
                 <button className="text-xs font-mono opacity-40 hover:opacity-100 transition-opacity pb-1">EN</button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
