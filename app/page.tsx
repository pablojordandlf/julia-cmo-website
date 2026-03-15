import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Link from "next/link";
import { ArrowRight, TrendingUp, Rocket, Globe } from "lucide-react";

export default function Home() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-[72px]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-8">
              <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold leading-[1.1] tracking-[-0.02em] text-[#1A1A1A] mb-6">
                Construí departamentos de marketing desde cero hasta 8 figuras.
              </h1>
              <p className="text-lg md:text-xl text-[#737373] leading-relaxed mb-8 max-w-2xl">
                Head of Marketing en Teamtailor. First marketing hire en WeRoad. 
                Especialista en arquitectura de crecimiento B2B SaaS: Iberia, Italia, LATAM y más allá.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/case-studies"
                  className="inline-flex items-center px-8 py-4 bg-[#1A1A1A] text-white rounded-lg text-base font-semibold hover:bg-black hover:-translate-y-0.5 transition-all shadow-[0_4px_6px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_15px_rgba(0,0,0,0.1)]"
                >
                  Ver track record
                  <ArrowRight className="ml-2" size={18} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border border-[#E5E5E5] rounded-lg text-base font-semibold text-[#1A1A1A] hover:border-[#0066FF] hover:text-[#0066FF] transition-all"
                >
                  Contactar
                </Link>
              </div>
            </div>
            <div className="lg:col-span-4 hidden lg:block">
              <div className="aspect-square bg-[#F5F5F5] border border-[#E5E5E5] flex items-center justify-center">
                <div className="w-32 h-32 border-2 border-[#0066FF] rotate-45 opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="py-24 lg:py-32 border-t border-[#E5E5E5]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="flex flex-col gap-6">
              <div className="w-12 h-12 flex items-center justify-center text-[#0066FF]">
                <TrendingUp size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-[#1A1A1A]">PLG &amp; Growth Architecture</h3>
              <p className="text-base text-[#737373] leading-relaxed">
                Diseño sistemas de crecimiento que convierten productos en motores 
                de adquisición. Construí from zero el machine de growth que escala usuarios 
                cualificados sin depender exclusivamente de paid.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="w-12 h-12 flex items-center justify-center text-[#0066FF]">
                <Rocket size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-[#1A1A1A]">Zero-to-One Leadership</h3>
              <p className="text-base text-[#737373] leading-relaxed">
                Primer hire de marketing en startups que necesitan construir, no mantener. 
                Lideré la transición de 15 personas a 150, definiendo cultura de marketing 
                y estableciendo procesos que escalan.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="w-12 h-12 flex items-center justify-center text-[#0066FF]">
                <Globe size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-[#1A1A1A]">Cross-Border Execution</h3>
              <p className="text-base text-[#737373] leading-relaxed">
                Ejecución simultánea en mercados paneuropeos. Escale operaciones en 
                Italia, Iberia y LATAM con arquitectura de go-to-market localizada y replicable. 
                Fluent in ES/EN/IT/FR.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Teaser */}
      <section className="py-24 lg:py-32 bg-[#F5F5F5]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-4">
              Casos de estudio
            </h2>
            <p className="text-lg text-[#737373]">
              Resultados que cualquier CFO puede defender.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/case-studies" className="group bg-white border border-[#E5E5E5] p-8 hover:border-[#0066FF] transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_25px_rgba(0,0,0,0.08)]">
              <span className="inline-block px-3 py-1 bg-[rgba(0,102,255,0.1)] text-[#0066FF] text-xs font-semibold uppercase tracking-wide rounded mb-4">
                Zero-to-One
              </span>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">De zero a Serie A: Marketing Infrastructure</h3>
              <p className="text-base text-[#737373] mb-4">WeRoad — De 15 personas a 150, construyendo desde cero.</p>
              <span className="font-mono text-3xl font-bold text-[#0066FF]">450K</span>
              <span className="text-sm text-[#737373] ml-2">usuarios cualificados</span>
            </Link>

            <Link href="/case-studies" className="group bg-white border border-[#E5E5E5] p-8 hover:border-[#0066FF] transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_25px_rgba(0,0,0,0.08)]">
              <span className="inline-block px-3 py-1 bg-[rgba(0,102,255,0.1)] text-[#0066FF] text-xs font-semibold uppercase tracking-wide rounded mb-4">
                PLG Growth
              </span>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">PLG que escala: Activation &amp; Monetización</h3>
              <p className="text-base text-[#737373] mb-4">Teamtailor — Self-serve MRR growth en Iberia.</p>
              <span className="font-mono text-3xl font-bold text-[#0066FF]">+340%</span>
              <span className="text-sm text-[#737373] ml-2">en MRR self-serve</span>
            </Link>

            <Link href="/case-studies" className="group bg-white border border-[#E5E5E5] p-8 hover:border-[#0066FF] transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_25px_rgba(0,0,0,0.08)]">
              <span className="inline-block px-3 py-1 bg-[rgba(0,102,255,0.1)] text-[#0066FF] text-xs font-semibold uppercase tracking-wide rounded mb-4">
                Market Entry
              </span>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">Entry Italy: Go-to-Market en Tiller Systems</h3>
              <p className="text-base text-[#737373] mb-4">De 0 a market leader en 12 meses.</p>
              <span className="font-mono text-3xl font-bold text-[#0066FF]">€2M</span>
              <span className="text-sm text-[#737373] ml-2">ARR en 12 meses</span>
            </Link>

            <Link href="/case-studies" className="group bg-white border border-[#E5E5E5] p-8 hover:border-[#0066FF] transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_25px_rgba(0,0,0,0.08)]">
              <span className="inline-block px-3 py-1 bg-[rgba(0,102,255,0.1)] text-[#0066FF] text-xs font-semibold uppercase tracking-wide rounded mb-4">
                Growth Strategy
              </span>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">Corporate a Startup: La transición</h3>
              <p className="text-base text-[#737373] mb-4">TheFork → WeRoad — Rigour meets speed.</p>
              <span className="font-mono text-3xl font-bold text-[#0066FF]">-60%</span>
              <span className="text-sm text-[#737373] ml-2">en CAC manteniendo calidad</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#F5F5F5] p-8 lg:p-12">
              <blockquote className="text-lg text-[#1A1A1A] leading-relaxed mb-6">
                &ldquo;Julia llegó cuando éramos 15 personas sin estructura de marketing. En 18 meses 
                construyó un equipo de 12, definieron nuestra voz de marca y nos llevaron de pre-seed 
                a Serie A. Pensaba en escalabilidad desde el día uno.&rdquo;
              </blockquote>
              <div className="w-10 h-0.5 bg-[#0066FF] mb-4"></div>
              <p className="text-base font-semibold text-[#1A1A1A]">Paolo De Santis</p>
              <p className="text-sm text-[#737373]">Co-founder &amp; CEO, WeRoad</p>
            </div>

            <div className="bg-[#F5F5F5] p-8 lg:p-12">
              <blockquote className="text-lg text-[#1A1A1A] leading-relaxed mb-6">
                &ldquo;En mi portfolio busco CMOs que entiendan unit economics y growth loops, no solo 
                brand. Julia combina el rigor analítico de TripAdvisor con la velocidad de ejecución 
                startup. Rara combinación.&rdquo;
              </blockquote>
              <div className="w-10 h-0.5 bg-[#0066FF] mb-4"></div>
              <p className="text-base font-semibold text-[#1A1A1A]">Elena Martínez-Viula</p>
              <p className="text-sm text-[#737373]">Partner, Northzone Ventures</p>
            </div>

            <div className="bg-[#F5F5F5] p-8 lg:p-12">
              <blockquote className="text-lg text-[#1A1A1A] leading-relaxed mb-6">
                &ldquo;La promoví a Head of Marketing porque entiende que el crecimiento es arquitectura, 
                no magia. Construye equipos que duran, procesos que escalan y sistemas que cualquier 
                CFO puede defender en board meeting.&rdquo;
              </blockquote>
              <div className="w-10 h-0.5 bg-[#0066FF] mb-4"></div>
              <p className="text-base font-semibold text-[#1A1A1A]">Marcus Lindqvist</p>
              <p className="text-sm text-[#737373]">VP Marketing EMEA, Teamtailor</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 lg:py-32 bg-[#F5F5F5]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1A1A1A] mb-6">
            Listos para escalar.
          </h2>
          <p className="text-lg md:text-xl text-[#737373] max-w-2xl mx-auto mb-8">
            Busco mi próximo reto como CMO o VP Marketing en scale-up B2B SaaS. 
            Si tu Serie B/C necesita arquitectura de crecimiento, hablemos.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-[#1A1A1A] text-white rounded-lg text-base font-semibold hover:bg-black hover:-translate-y-0.5 transition-all shadow-[0_4px_6px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_15px_rgba(0,0,0,0.1)]"
          >
            Iniciar conversación
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
