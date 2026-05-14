import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/trabalho", label: "Trabalho" },
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
      <header className="site-header fixed top-0 left-0 right-0 z-50">
        <div className="site-container flex items-center justify-between w-full">
          <Link to="/" className="text-foreground text-lg font-display tracking-tight flex items-center gap-1 group">
            MURILO <span className="text-accent transition-transform duration-500 group-hover:rotate-180">·</span> ORTEGA
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0">
            {navLinks.map((link) => (
              link.isExternal ? (
                <a
                  key={link.to}
                  href={link.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="site-nav-link"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  className="site-nav-link"
                  activeProps={{
                    className: "active",
                  }}
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>

          <div className="hidden md:block">
             <a href="https://wa.me/5511941765691" target="_blank" rel="noopener noreferrer" className="btn btn-ghost text-xs">
                Contato →
             </a>
          </div>

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
          <div className="site-header border-b-0 px-8">
            <Link
              to="/"
              className="text-foreground text-lg font-display tracking-tight"
              onClick={() => setMenuOpen(false)}
            >
              MURILO <span className="text-accent">·</span> ORTEGA
            </Link>
            <button
              className="ml-auto text-foreground p-2"
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
            {navLinks.map((link) => (
              link.isExternal ? (
                <a
                  key={link.to}
                  href={link.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[40px] text-foreground font-display leading-none tracking-tight"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-[40px] text-foreground font-display leading-none tracking-tight"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
