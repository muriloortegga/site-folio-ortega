import { Outlet, Link, createRootRoute, HeadContent, Scripts, useLocation } from \"@tanstack/react-router\";
import { Header } from \"@/components/Header\";
import { Footer } from \"@/components/Footer\";
import { Cursor } from \"@/components/Cursor\";
import { ContextNav } from \"@/components/ContextNav\";
import { motion, AnimatePresence } from \"framer-motion\";

import appCss from \"../styles.css?url\";

function NotFoundComponent() {
  return (
    \u003cdiv className=\"flex min-h-screen items-center justify-center bg-background px-4\"\u003e
      \u003cdiv className=\"max-w-md text-center\"\u003e
        \u003ch1 className=\"text-7xl font-bold text-foreground\"\u003e404\u003c/h1\u003e
        \u003ch2 className=\"mt-4 text-xl font-semibold text-foreground\"\u003e
          Page not found
        \u003c/h2\u003e
        \u003cp className=\"mt-2 text-sm text-muted-foreground\"\u003e
          The page you're looking for doesn't exist or has been moved.
        \u003c/p\u003e
        \u003cdiv className=\"mt-6\"\u003e
          \u003cLink
            to=\"/\"
            className=\"inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90\"
          \u003e
            Go home
          \u003c/Link\u003e
        \u003c/div\u003e
      \u003c/div\u003e
    \u003c/div\u003e
  );
}

export const Route = createRootRoute({
  head: () = \u003e ({
    meta: [
      { charSet: \"utf-8\" },
      { name: \"viewport\", content: \"width=device-width, initial-scale=1\" },
      { title: \"Murilo Ortega — Branding, Conteúdo e Presença Digital\" },
      { name: \"description\", content: \"Organizo marcas que precisam funcionar como marcas. Branding, conteúdo e presença digital conectados em um sistema.\" },
      { name: \"author\", content: \"Murilo Ortega\" },
      { property: \"og:title\", content: \"Murilo Ortega — Branding, Conteúdo e Presença Digital\" },
      { property: \"og:description\", content: \"Organizo marcas que precisam funcionar como marcas. Branding, conteúdo e presença digital conectados em um sistema.\" },
      { property: \"og:type\", content: \"website\" },
      { name: \"twitter:card\", content: \"summary\" },
      { name: \"twitter:title\", content: \"Murilo Ortega — Branding, Conteúdo e Presença Digital\" },
      { name: \"twitter:description\", content: \"Organizo marcas que precisam funcionar como marcas. Branding, conteúdo e presença digital conectados em um sistema.\" },
      { property: \"og:image\", content: \"https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4941153b-251a-4074-bce4-a0fd0ed637e7/id-preview-2dfc6bed--c044de80-1068-46cd-ac1e-69d643fa0638.lovable.app-1776975661590.png\" },
      { name: \"twitter:image\", content: \"https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4941153b-251a-4074-bce4-a0fd0ed637e7/id-preview-2dfc6bed--c044de80-1068-46cd-ac1e-69d643fa0638.lovable.app-1776975661590.png\" },
    ],
    links: [
      {
        rel: \"preconnect\",
        href: \"https://fonts.googleapis.com\",
      },
      {
        rel: \"preconnect\",
        href: \"https://fonts.gstatic.com\",
        crossOrigin: \"anonymous\",
      },
      {
        rel: \"stylesheet\",
        href: \"https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300\u0026family=DM+Mono:wght@400;500\u0026display=swap\",
      },
      {
        rel: \"stylesheet\",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    \u003chtml lang=\"en\"\u003e
      \u003chead\u003e
        \u003cHeadContent /\u003e
      \u003c/head\u003e
      \u003cbody\u003e
        {children}
        \u003cScripts /\u003e
      \u003c/body\u003e
    \u003c/html\u003e
  );
}

function RootComponent() {
  const location = useLocation();
  return (
    \u003c\u003e
      \u003cCursor /\u003e
      \u003cHeader /\u003e
      \u003cContextNav /\u003e
      \u003cAnimatePresence mode=\"wait\"\u003e
        \u003cmotion.main 
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className=\"min-h-screen\"
        \u003e
          \u003cOutlet /\u003e
        \u003c/motion.main\u003e
      \u003c/AnimatePresence\u003e
      \u003cFooter /\u003e
    \u003c/\u003e
  );
}
