import { createFileRoute, Link } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Plus, ArrowRight, Zap } from "lucide-react";

export const Route = createFileRoute("/servicos/presenca-digital")({
  head: () => ({
    meta: [
      { title: "Presença Digital — Murilo Ortega" },
      { name: "description", content: "Sites e Landing Pages premium de alta performance. O diferencial que sua marca merece." },
    ],
  }),
  component: PresencaDigitalPage,
});

function PresencaDigitalPage() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={revealRef} className="bg-background pt-32 pb-32">
      {/* Hero */}
      <section className="site-section border-t-0 pt-0 pb-24">
        <div className="site-container">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-12 leading-[0.95]">
              Sites e Landing Pages<br />
              de <span className="italic">alta performance</span><br />
              e design premium.
            </h1>
            <p className="text-lg md:text-xl text-secondary uppercase font-medium leading-tight mb-12 max-w-2xl">
              Sua marca merece uma casa digital que reflita o seu valor. Este site que você navega agora foi feito por mim — e é esse o nível de excelência que sua marca irá receber.
            </p>
            <a href="https://wa.me/5511941765691?text=gostaria%20de%20fazer%20um%20or%C3%A7amento!" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Construir minha casa digital <Plus size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="site-section py-32 bg-foreground text-background">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
             <div className="space-y-12">
                <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter leading-[0.95]">
                   O site como um<br />diferencial para<br />sua marca se destacar.
                </h2>
                <p className="text-lg text-secondary uppercase font-medium">
                   Não é sobre ter um link na bio. É sobre ter uma plataforma de conversão que trabalha 24/7 para o seu negócio.
                </p>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "Design Disruptivo", desc: "Interfaces que prendem a atenção e elevam a percepção de marca.", icon: <Zap size={20} /> },
                  { title: "Alta Performance", desc: "Velocidade de carregamento otimizada para SEO e conversão.", icon: <Zap size={20} /> },
                  { title: "UX Estratégica", desc: "Jornada do usuário pensada para levar ao clique final.", icon: <Zap size={20} /> },
                  { title: "Exclusividade", desc: "Design único, nada de templates prontos ou genéricos.", icon: <Zap size={20} /> }
                ].map((item, i) => (
                  <div key={i} className="p-8 border border-background/10 space-y-4 rounded-lg hover:bg-background/5 transition-colors">
                     <div className="w-10 h-10 border border-background/20 flex items-center justify-center text-secondary rounded-md">
                        {item.icon}
                     </div>
                     <h4 className="text-lg font-bold uppercase">{item.title}</h4>
                     <p className="text-xs text-secondary leading-relaxed uppercase">{item.desc}</p>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Cases de Destaque */}
      <section className="site-section py-32">
        <div className="site-container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter">Cases de Destaque em Presença Digital</h2>
            </div>
            <p className="site-body max-w-sm">Plataformas que construímos do zero, focadas em performance e branding.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
             {[
               { name: "Talk2Buy", tag: "E-commerce & UX", to: "/talk2buy" },
               { name: "Kmillion", tag: "Landing Page High Ticket", to: "/kmillion" },
               { name: "EviDive", tag: "Branding & Web", to: "/evidive" },
               { name: "NaTrave", tag: "Plataforma Digital", to: "/natrave" }
             ].map((c, i) => (
               <Link key={i} to={c.to} className="bg-background p-12 md:p-16 group hover:bg-foreground hover:text-background transition-all duration-700 space-y-6">
                  <div className="flex justify-between items-center">
                     <span className="text-[10px] font-mono opacity-40">{c.tag}</span>
                     <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-tighter group-hover:translate-x-4 transition-transform duration-500">{c.name}</h3>
               </Link>
             ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-foreground text-background">
        <div className="site-container text-center">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-[0.95] mb-12">O próximo grande site pode ser o seu.</h2>
          <a href="https://calendly.com/contato-muriloortega1/30min" target="_blank" rel="noopener noreferrer" className="btn-primary bg-background text-foreground px-12 py-6 text-lg hover:bg-background/90 rounded-full">
            Agendar reunião estratégica <Plus size={20} className="ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default PresencaDigitalPage;
