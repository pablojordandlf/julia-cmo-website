import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Link from "next/link";
import { ArrowRight, Users, Zap, MapPin, Target } from "lucide-react";

export const metadata = {
  title: "Sobre Julia | De Relaciones Internacionales a CMO | Trayectoria",
  description: "De las Islas Baleares a liderar marketing en tres continentes. 9 años construyendo departamentos from zero. PLG, zero-to-one, expansión internacional.",
};

export default function About() {
  const timeline = [
    {
      year: "2016",
      title: "Analista de Comunicación Corporativa, TheFork",
      description: "Primer contacto con marketing B2C a escala global. Aprendí la disciplina de KPIs, reporting y optimización sistemática en entorno corporate.",
    },
    {
      year: "2018",
      title: "Marketing Manager, TripAdvisor Restaurants",
      description: "Gestión de campañas multimercado. Primera exposición a arquitectura de crecimiento replicable: mismos procesos, diferentes mercados, resultados consistentes.",
    },
    {
      year: "2020",
      title: "First Marketing Hire, WeRoad",
      description: "El punto de inflexión. 15 personas, hoja en blanco. Construí el departamento from zero: hiring, tech stack, attribution, budget, culture. De cero a Serie A.",
    },
    {
      year: "2022",
      title: "Senior Marketing Manager, Tiller Systems",
      description: "Fundé el marketing department para entry en Italia. Diseñé go-to-market desde cero: 0 a €2M ARR en 12 meses con equipo de 3 personas.",
    },
    {
      year: "2024",
      title: "Promoted Head of Marketing, Teamtailor",
      description: "Liderazgo de tres mercados simultáneos. Estrategia PLG, expansion LATAM, team scaling. Arquitectura de crecimiento que otros mercados replican.",
    },
    {
      year: "2025",
      title: "Buscando el siguiente reto C-level",
      description: "Si tu Serie B/C necesita CMO o VP Marketing para escalar de 10M a 100M, mi experiencia zero-to-one y multi-market está lista.",
    },
  ];

  const pillars = [
    {
      icon: Target,
      title: "Build from Zero",
      description: "No heredo departamentos, los construyo. Hasta la estructura de carpetas en Drive define cómo escalará el equipo. Documento todo. Los sistemas duran más que las personas.",
    },
    {
      icon: Zap,
      title: "PLG-First",
      description: "El producto es el mejor vendedor. Diseño activation flows que convierten usuarios cualificados sin depender exclusivamente de paid. Escalable, medible, defensible ante CFO.",
    },
    {
      icon: MapPin,
      title: "Expansion Architecture",
      description: "Mercados simultáneos no son clonación: son adaptación sistemática. Creo playbooks que otros markets ejecutan, localizan y optimizan con su contexto.",
    },
    {
      icon: Users,
      title: "Team as Strategy",
      description: "Contrato gente que me hará obsoleta en su área. Mi rol es definir qué hacemos, por qué lo hacemos, y hacer que el equipo brille haciéndolo.",
    },
  ];

  return (
    <>
      <Navigation />

      {/* Hero Quote */}
      <section className="pt-[120px] pb-16 md:pb-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <blockquote className="max-w-3xl mx-auto text-center">
            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#1A1A1A] leading-tight">
              &ldquo;No vine a marketing por casualidad. Vine porque combina lo que mejor 
              sé hacer: entender sistemas complejos, construir estructuras que perduran y escalar 
              lo que funciona.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 border-t border-[#E5E5E5]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <p className="text-lg text-[#1A1A1A] leading-relaxed">
                Mi punto de partida fueron las Relaciones Internacionales y la Comunicación Corporativa. 
                Estudié cómo funcionan los sistemas globales —políticos, económicos, culturales— y aprendí 
                que la ejecución local determina el éxito de cualquier estrategia macro. Ese insight guía 
                todo lo que construyo.
              </p>
              <p className="text-lg text-[#737373] leading-relaxed">
                Empecé en TheFork/TripAdvisor. Corporate, deadlines trimestrales, budgets millonarios. 
                Aprendí el rigor analítico, la optimización de CAC a escala global, la importancia de 
                procesos que cualquier mercado pueda replicar. Pero quería construir, no solo optimizar.
              </p>
              <p className="text-lg text-[#737373] leading-relaxed">
                En 2020 di el salto. WeRoad, 15 personas, sin departamento de marketing. Me contrataron 
                para definir desde cero cómo adquirimos usuarios, qué equipos necesitamos, qué tech stack 
                nos sostiene. Construí un motor de crecimiento que nos llevó de pre-seed a Serie A en 18 meses. 
                First marketing hire, first scaling architect.
              </p>
              <p className="text-lg text-[#737373] leading-relaxed">
                Hoy soy Head of Marketing en Teamtailor, liderando Iberia, Italia y LATAM. He pasado de 
                operar un mercado a diseñar arquitectura de crecimiento para tres regiones simultáneamente. 
                Lo que aprendí: escalar no es duplicar, es diseñar sistemas que otros mercados puedan adaptar.
              </p>
            </div>
            <div className="bg-[#F5F5F5] border border-[#E5E5E5] aspect-[4/3] flex items-center justify-center">
              <div className="w-24 h-24 border-2 border-[#0066FF] rotate-45 opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-[#F5F5F5]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-12">
            Trayectoria 2016-2025
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[#E5E5E5] md:-translate-x-px"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="flex-1 md:text-right">
                    <div className={`${index % 2 === 0 ? "md:pr-12" : "md:pl-12 md:text-left"}`}>
                      <span className="inline-block px-3 py-1 bg-[rgba(0,102,255,0.1)] text-[#0066FF] text-xs font-semibold uppercase tracking-wide rounded mb-2">
                        {item.year}
                      </span>
                      <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">{item.title}</h3>
                      <p className="text-base text-[#737373]">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-[#0066FF] rounded-full -translate-x-1.5 mt-1.5"></div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approach Pillars */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-12">
            Mi approach
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="space-y-4">
                <div className="w-12 h-12 flex items-center justify-center text-[#0066FF]">
                  <pillar.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-[#1A1A1A]">{pillar.title}</h3>
                <p className="text-base text-[#737373] leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Side Projects */}
      <section className="py-16 md:py-24 border-t border-[#E5E5E5]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-8">
            Side projects
          </h2>

          <div className="space-y-6">
            <div className="border-b border-[#E5E5E5] pb-6">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Advisory</h3>
              <p className="text-base text-[#737373]">
                Advisor en 2 startups B2B SaaS pre-seed (stealth): estructura de growth, 
                primeras contrataciones de marketing, definición de ICP y messaging.
              </p>
            </div>

            <div className="border-b border-[#E5E5E5] pb-6">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Mentoring</h3>
              <p className="text-base text-[#737373]">
                Mentor en TheNextWeb Boost y Seedcamp: growth marketing, PLG fundamentals, 
                hiring your first marketer.
              </p>
            </div>

            <div className="border-b border-[#E5E5E5] pb-6">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Speaking</h3>
              <p className="text-base text-[#737373]">
                Ponente en South Summit 2023, SaaStock Local Madrid 2024, RevOps LatAm 2024: 
                temas zero-to-one marketing y PLG execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Note */}
      <section className="py-16 md:py-24 bg-[#F5F5F5]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <p className="text-xl text-[#1A1A1A] leading-relaxed max-w-3xl">
            Nací en Mallorca, vivo en Madrid, trabajo en tres idiomas, pienso en paneuropeo. 
            Lo que me define: el sistema que construyo hoy debe funcionar sin mí el año que viene. 
            Esa es la verdadera escalabilidad.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <p className="text-xl text-[#1A1A1A] mb-8">
            Si tu scale-up necesita alguien que haya hecho esto antes, hablemos.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-[#1A1A1A] text-white rounded-lg text-base font-semibold hover:bg-black hover:-translate-y-0.5 transition-all"
          >
            Contactar
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
