import { Link, useLocation } from \"@tanstack/react-router\";
import { useState, useEffect } from \"react\";
import { cn } from \"@/lib/utils\";

const navLinks = [
  { to: \"/trabalho\", label: \"Portfólio\" },
  { to: \"/servicos\", label: \"Serviços\" },
  { to: \"/sobre\", label: \"Sobre\" },
  { to: \"https://wa.me/5511941765691?text=gostaria%20de%20fazer%20um%20or%C3%A7amento!\", label: \"Contato\", isExternal: true },
];

export function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() = \u003e {
    const onScroll = () = \u003e setScrolled(window.scrollY \u003e 16);
    window.addEventListener(\"scroll\", onScroll);
    return () = \u003e window.removeEventListener(\"scroll\", onScroll);
  }, []);

  return (
    \u003c\u003e
      \u003cheader
        className={cn(
          \"site-header fixed top-0 left-0 right-0 z-50 transition-all duration-500\",
          scrolled ? \"bg-background/40 backdrop-blur-3xl border-b border-border/10 shadow-sm\" : \"bg-transparent\"
        )}
      \u003e
        \u003cdiv className=\"site-container flex items-center justify-between h-24\"\u003e
          \u003cLink to=\"/\" className=\"text-foreground text-lg font-bold tracking-tight uppercase\"\u003e
            Murilo Ortega
          \u003c/Link\u003e

          {/* Desktop nav */}
          \u003cnav className=\"hidden md:flex items-center gap-10\"\u003e
            {navLinks.map((link) = \u003e (
              link.isExternal ? (
                \u003ca
                  key={link.to}
                  href={link.to}
                  target=\"_blank\"
                  rel=\"noopener noreferrer\"
                  className=\"text-[10px] font-mono uppercase tracking-widest transition-all hover:text-secondary text-foreground\"
                \u003e
                  {link.label}
                \u003c/a\u003e
              ) : (
                \u003cLink
                  key={link.to}
                  to={link.to}
                  className={cn(
                    \"text-[10px] font-mono uppercase tracking-widest transition-all hover:text-secondary\",
                    location.pathname === link.to ? \"text-secondary\" : \"text-foreground\"
                  )}
                \u003e
                  {link.label}
                \u003c/Link\u003e
              )
            ))}
            \u003cdiv className=\"flex items-center gap-2 ml-4 pl-4 border-l border-border/50\"\u003e
               \u003cbutton className=\"text-[9px] font-mono font-bold border-b border-foreground\"\u003ePT\u003c/button\u003e
               \u003cspan className=\"text-[9px] opacity-20\"\u003e/\u003c/span\u003e
               \u003cbutton className=\"text-[9px] font-mono opacity-40 hover:opacity-100\"\u003eEN\u003c/button\u003e
            \u003c/div\u003e
          \u003c/nav\u003e

          {/* Mobile hamburger */}
          \u003cbutton
            className=\"md:hidden text-foreground p-2\"
            onClick={() = \u003e setMenuOpen(true)}
            aria-label=\"Abrir menu\"
          \u003e
            \u003csvg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\"\u003e
              \u003cline x1=\"4\" y1=\"7\" x2=\"20\" y2=\"7\" /\u003e
              \u003cline x1=\"4\" y1=\"12\" x2=\"20\" y2=\"12\" /\u003e
              \u003cline x1=\"4\" y1=\"17\" x2=\"20\" y2=\"17\" /\u003e
            \u003c/svg\u003e
          \u003c/button\u003e
        \u003c/div\u003e
      \u003c/header\u003e

      {/* Mobile overlay */}
      {menuOpen \u0026\u0026 (
        \u003cdiv className=\"fixed inset-0 z-[60] bg-background flex flex-col\"\u003e
          \u003cdiv className=\"site-container flex items-center justify-between h-24\"\u003e
            \u003cLink
              to=\"/\"
              className=\"text-foreground text-lg font-bold tracking-tight uppercase\"
              onClick={() = \u003e setMenuOpen(false)}
            \u003e
              Murilo Ortega
            \u003c/Link\u003e
            \u003cbutton
              className=\"text-foreground p-2\"
              onClick={() = \u003e setMenuOpen(false)}
              aria-label=\"Fechar menu\"
            \u003e
              \u003csvg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\"\u003e
                \u003cline x1=\"6\" y1=\"6\" x2=\"18\" y2=\"18\" /\u003e
                \u003cline x1=\"18\" y1=\"6\" x2=\"6\" y2=\"18\" /\u003e
              \u003c/svg\u003e
            \u003c/button\u003e
          \u003c/div\u003e
          \u003cnav className=\"flex flex-col items-start site-container mt-12 gap-8\"\u003e
            \u003cdiv className=\"flex flex-col items-start gap-4\"\u003e
              {navLinks.map((link) = \u003e (
                link.isExternal ? (
                  \u003ca
                    key={link.to}
                    href={link.to}
                    target=\"_blank\"
                    rel=\"noopener noreferrer\"
                    onClick={() = \u003e setMenuOpen(false)}
                    className=\"text-4xl font-bold uppercase tracking-tighter transition-all hover:text-secondary text-foreground\"
                  \u003e
                    {link.label}
                  \u003c/a\u003e
                ) : (
                  \u003cLink
                    key={link.to}
                    to={link.to}
                    onClick={() = \u003e setMenuOpen(false)}
                    className={cn(
                      \"text-4xl font-bold uppercase tracking-tighter transition-all hover:text-secondary\",
                      location.pathname === link.to ? \"text-secondary\" : \"text-foreground\"
                    )}
                  \u003e
                    {link.label}
                  \u003c/Link\u003e
                )
              ))}
              \u003cdiv className=\"flex gap-4 mt-8 pt-8 border-t border-border w-full\"\u003e
                 \u003cbutton className=\"text-xs font-mono font-bold border-b-2 border-foreground pb-1\"\u003ePT\u003c/button\u003e
                 \u003cbutton className=\"text-xs font-mono opacity-40 hover:opacity-100 transition-opacity pb-1\"\u003eEN\u003c/button\u003e
              \u003c/div\u003e
            \u003c/div\u003e
          \u003c/nav\u003e
        \u003c/div\u003e
      )}
    \u003c/\u003e
  );
}
