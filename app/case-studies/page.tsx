import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Casos de Estudio | Julia CMO | Zero-to-One Growth Results",
  description: "4 casos de escalada: WeRoad, Teamtailor, Tiller Systems, TheFork. Resultados medibles: PLG, expansión internacional, arquitectura de crecimiento.",
};

export default function CaseStudies() {
  const cases = [
    {
      tag: "Zero-to-One",
      client: "WeRoad",
      sector: "Travel / Group Adventures B2C",
      role: "First Marketing Hire → Head of Marketing (Founding Team)",
      challenge: "15 personas, €0 en marketing, 0 usuarios cualificados. Necesitaban construir departamento from zero que soporte Serie A.",
      approach: "Diseñé sistema de adquisición multicanal: performance (Meta, Google), contenido orgánico (blog strategy), CRM automation (HubSpot), community building. Estructuré funnel completo: awareness → consideration → booking con attribution end-to-end. Contraté y formé equipo de 12 personas en 12 meses: paid, content, CRM, affiliates.",
      results: [
        "450K usuarios cualificados en 18 meses",
        "CAC reducido 45% a través de optimización de canales",
        "LTV/CAC ratio 4:1",
        "Cerramos Serie A de €11M con pipeline documentado",
      ],
      testimonial: {
        quote: "Julia no contrató vendors, construyó capabilities. El equipo que dejó sigue operando con los mismos procesos, misma disciplina, mejores resultados.",
        name: "Paolo De Santis",
        role: "CEO, WeRoad",
      },
    },
    {
      tag: "PLG Growth",
      client: "Teamtailor",
      sector: "HR Tech / ATS B2B SaaS",
      role: "Head of Marketing Iberia, Italy, LATAM",
      challenge: "Escala en múltiples mercados con modelo PLG. Necesitábamos aumentar self-serve MRR sin incrementar proporcionalmente el CAC en paid. Activation rates por debajo del benchmark.",
      approach: "Rediseñé activation flow: onboarding simplificado, product-led triggers en email automation, in-app guidance contextual. Implementé PLG metrics framework: activation rate, PQL scoring, expansion revenue tracking. Expansion a LATAM con playbook replicable: localized messaging, pricing regionalizada, partnerships estratégicas locales.",
      results: [
        "+340% en MRR de self-serve en Iberia en 18 meses",
        "Activation rate mejoró de 18% a 34%",
        "LATAM entry: 0 a 150+ paying customers en 8 meses",
        "CAC 60% menor que paid puro",
      ],
      testimonial: {
        quote: "Su approach a PLG es sistemático, no guesswork. Cada experimento tiene hipótesis clara, métricas definidas, learnings documentados. Eso es como se escala growth.",
        name: "Marcus Lindqvist",
        role: "VP Marketing EMEA, Teamtailor",
      },
    },
    {
      tag: "Market Entry",
      client: "Tiller Systems",
      sector: "Retail Tech / POS SaaS",
      role: "Marketing Lead Italy (Entry Market)",
      challenge: "Entry en Italia desde Francia. 0 brand awareness, competencia local establecida, necesidad de go-to-market desde cero con equipo mínimo viable.",
      approach: "Diseñé market entry playbook: research de competencia local, ICP italiano específico (diferente del francés), messaging adapted, channel mix validado (más field sales que PLG inicialmente). Contraté primer marketer local y establecí partnership con asociación de retailers italianos. Built localized content engine: caso studies italianos, webinars en italiano, presencia en ferias locales.",
      results: [
        "0 a €2M ARR en 12 meses",
        "Market share 8% en segmento SMB retail en año 1",
        "Team local de 3 personas operando autónomamente",
        "Playbook replicado para entry en España",
      ],
      testimonial: {
        quote: "Julia entiende que market entry no es traducir assets, es rediseñar GTM para el contexto local. El playbook que creó para Italia funcionó en España con adaptaciones mínimas.",
        name: "Antoine Durand",
        role: "VP Southern Europe, Tiller Systems",
      },
    },
    {
      tag: "Growth Strategy",
      client: "TheFork/TripAdvisor → WeRoad",
      sector: "Corporate B2C → Startup B2C",
      role: "Marketing Manager → First Marketing Hire",
      challenge: "Transición de entorno corporate (budgets millonarios, procesos establecidos, equipos grandes) a startup resource-constrained (hoja en blanco, 0 budget inicial, construcción desde cero).",
      approach: "Apliqué rigor analítico de corporate a velocidad de startup. Establecí métricas y reporting desde día 1. Diseñé budget allocation eficiente: 70% performance testable, 20% contenido orgánico, 10% experimentos. Built attribution system con herramientas accesibles (no enterprise). Transferred process discipline sin burocracia.",
      results: [
        "CAC 40% menor que competidores en mismo mercado",
        "Time-to-insight: decisiones basadas en datos en 48h",
        "Corporate rigor + startup speed",
        "Team culture que combina discipline con agility",
      ],
      testimonial: {
        quote: "Julia trajo lo mejor de ambos mundos: la disciplina de datos de TripAdvisor con la velocidad de ejecución que necesitábamos. No tuvimos que elegir entre rigor y agility.",
        name: "Paolo De Santis",
        role: "CEO, WeRoad",
      },
    },
  ];

  return (
    <>
      <Navigation />

      {/* Header */}
      <section className="pt-[120px] pb-16 md:pb-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6 max-w-3xl">
            Resultados que cualquier CFO puede defender.
          </h1>
          <p className="text-lg md:text-xl text-[#737373] max-w-2xl">
            Cuatro casos de cómo construyo marketing departments from zero hasta 
            resultado medible. Métricas reales, procesos replicables, arquitectura que perdura.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 border-t border-[#E5E5E5]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="space-y-16">
            {cases.map((caseStudy, index) => (
              <article
                key={caseStudy.client}
                className="bg-white border border-[#E5E5E5] p-8 md:p-12 hover:border-[#0066FF] transition-all"
              >
                <div className="mb-8">
                  <span className="inline-block px-3 py-1 bg-[rgba(0,102,255,0.1)] text-[#0066FF] text-xs font-semibold uppercase tracking-wide rounded mb-4">
                    {caseStudy.tag}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-semibold text-[#1A1A1A] mb-2">
                    {caseStudy.client}
                  </h2>
                  <p className="text-base text-[#737373]">{caseStudy.sector} · {caseStudy.role}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-[#1A1A1A] mb-3">Challenge</h3>
                    <p className="text-base text-[#737373] leading-relaxed">{caseStudy.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-[#1A1A1A] mb-3">Arquitectura de Crecimiento</h3>
                    <p className="text-base text-[#737373] leading-relaxed">{caseStudy.approach}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-[#1A1A1A] mb-4">Resultados</h3>
                  <ul className="space-y-2">
                    {caseStudy.results.map((result, i) => (
                      <li key={i} className="flex items-start gap-3 text-base text-[#1A1A1A]">
                        <span className="w-1.5 h-1.5 bg-[#0066FF] rounded-full mt-2 shrink-0"></span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <blockquote className="bg-[#F5F5F5] p-6 border-l-2 border-[#0066FF]">
                  <p className="text-base text-[#1A1A1A] italic mb-4">&ldquo;{caseStudy.testimonial.quote}&rdquo;</p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-[#1A1A1A]">{caseStudy.testimonial.name}</span>
                    <span className="text-sm text-[#737373]">· {caseStudy.testimonial.role}</span>
                  </div>
                </blockquote>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-[#F5F5F5]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-6">
            ¿Listo para resultados similares?
          </h2>
          <p className="text-lg text-[#737373] max-w-2xl mx-auto mb-8">
            Si tu scale-up necesita arquitectura de crecimiento que escale de 10M a 100M, hablemos.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-[#1A1A1A] text-white rounded-lg text-base font-semibold hover:bg-black hover:-translate-y-0.5 transition-all"
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
