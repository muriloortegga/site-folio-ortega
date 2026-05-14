import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border mt-20">
      {/* CTA Block */}
      <div className="site-section">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <h2 className="line-height-tight">
                Pronto para organizar<br />
                <span className="text-secondary font-medium">sua marca?</span>
              </h2>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-6 items-start lg:items-end">
              <a href="https://wa.me/5511941765691?text=gostaria%20de%20fazer%20um%20or%C3%A7amento!" target="_blank" rel="noopener noreferrer" className="btn btn-arrow">
                Fale comigo <span className="arrow" />
              </a>
              <Link to="/trabalho" className="btn btn-arrow">
                Ver portfólio <span className="arrow" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer base */}
      <div className="site-container border-t border-border py-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <span className="text-[10px] font-mono uppercase tracking-tight text-secondary">
          © {new Date().getFullYear()} Murilo Ortega
        </span>
        <div className="flex flex-wrap items-center gap-8 md:gap-12">
          <a href="/assets/cv.pdf" target="_blank" rel="noopener noreferrer" className="text-[10px] font-mono uppercase tracking-tight text-secondary hover:text-foreground transition-colors">
            Download CV
          </a>
          <a href="https://linkedin.com/in/muriloortega" target="_blank" rel="noopener noreferrer" className="text-[10px] font-mono uppercase tracking-tight text-secondary hover:text-foreground transition-colors">
            LinkedIn
          </a>
          <a href="https://instagram.com/muriloortega" target="_blank" rel="noopener noreferrer" className="text-[10px] font-mono uppercase tracking-tight text-secondary hover:text-foreground transition-colors">
            Instagram
          </a>
          <a href="https://www.upwork.com/freelancers/~018e6922851a0298d0" target="_blank" rel="noopener noreferrer" className="text-[10px] font-mono uppercase tracking-tight text-secondary hover:text-foreground transition-colors">
            Upwork
          </a>
        </div>
      </div>
    </footer>
  );
}
