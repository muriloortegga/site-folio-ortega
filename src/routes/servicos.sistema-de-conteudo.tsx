import { createFileRoute, Link } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Plus, Calendar, Users, CheckSquare, MessageSquare, Briefcase } from "lucide-react";

export const Route = createFileRoute("/servicos/sistema-de-conteudo")({
  head: () => ({
    meta: [
      { title: "Sistema de Conteúdo — Murilo Ortega" },
      { name: "description", content: "Um sistema integrado de social media que transforma sua presença digital em autoridade." },
    ],
  }),
  component: SistemaConteudoPage,
});

function SistemaConteudoPage() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={revealRef} className="bg-background pt-32 pb-32">
      {/* Hero */}
      <section className="site-section border-t-0 pt-0 pb-24">
        <div className="site-container">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-12 leading-[0.95]">
              Social Media como um<br />
              sistema <span className="italic">integrado</span><br />
              de autoridade.
            </h1>
            <p className="text-lg md:text-xl text-secondary uppercase font-medium leading-tight mb-12 max-w-2xl">
              Esqueça postagens isoladas. Criamos um ecossistema de conteúdo que sustenta sua marca e converte audiência em clientes reais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/5511941765691?text=gostaria%20de%20fazer%20um%20or%C3%A7amento!" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Implementar sistema <Plus size={18} className="ml-2" />
              </a>
              <a href="https://calendly.com/contato-muriloortega1/30min" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Agendar Diagnóstico Grátis <MessageSquare size={18} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Passo a Passo */}
      <section className="site-section py-32 bg-off-white">
        <div className="site-container">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter">Como funciona o nosso serviço de Social Media:</h2>
          </div>
          <div className="space-y-2">
            {[
              { title: "Diagnóstico de Marca", desc: "Sessão estratégica gratuita para entender seu momento atual.", icon: <Briefcase size={20} /> },
              { title: "Ajuste de Linha Editorial", desc: "Definição do território de conteúdo e tom de voz.", icon: <Plus size={20} /> },
              { title: "Calendário Publicitário", desc: "Planejamento estratégico de datas e campanhas.", icon: <Calendar size={20} /> },
              { title: "Buyer Personas & ICPs", desc: "Construção detalhada de quem é o seu cliente ideal.", icon: <Users size={20} /> },
              { title: "Design & Copywriting", desc: "Alta performance visual e escrita focada em retenção.", icon: <Plus size={20} /> },
              { title: "Aprovação Self-Service", desc: "Plataforma onde você aprova e comenta tudo em um só lugar.", icon: <CheckSquare size={20} /> },
              { title: "Agendamento & Garantia", desc: "Controle total para que sua marca nunca fique em silêncio.", icon: <Plus size={20} /> }
            ].map((step, i) => (
              <div key={i} className="bg-background p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between group hover:bg-foreground hover:text-background transition-all duration-500 border border-border/10 rounded-lg">
                <div className="flex items-center gap-8">
                  <span className="text-[10px] font-mono opacity-20">0{i+1}</span>
                  <div className="space-y-2">
                    <h4 className="text-lg md:text-xl font-bold uppercase tracking-tight">{step.title}</h4>
                    <p className="text-xs text-secondary group-hover:text-background/60 uppercase">{step.desc}</p>
                  </div>
                </div>
                <div className="mt-6 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity">
                   {step.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Section */}
      <section className="site-section py-32">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
               <div className="shadow-2xl overflow-hidden rounded-xl">
                 <img src="/natrave-preview.gif" alt="NaTrave Content System" className="w-full grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105" />
               </div>
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2">
               <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter leading-[0.95] mb-8">NaTrave: O Ecossistema do Futebol</h2>
               <p className="site-body mb-12">
                 Construímos um fluxo de conteúdo que elevou a percepção de uma plataforma amadora ao nível de elite. Copywriting agressivo e design de alta performance garantiram retenção e crescimento orgânico constante.
               </p>
               <Link to="/natrave" className="btn btn-arrow">Ver case de conteúdo <span className="arrow" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-foreground text-background">
        <div className="site-container text-center">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-[0.95] mb-12">Sua marca sempre presente.<br /><span className="text-secondary italic">Sempre no topo.</span></h2>
          <a href="https://calendly.com/contato-muriloortega1/30min" target="_blank" rel="noopener noreferrer" className="btn-primary bg-background text-foreground px-12 py-6 text-lg hover:bg-background/90 rounded-full">
            Agendar reunião de diagnóstico <Plus size={20} className="ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default SistemaConteudoPage;
