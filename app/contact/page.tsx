import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import CopyEmailButton from "../components/CopyEmailButton";
import Link from "next/link";
import { Mail, Calendar, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Contactar | Julia CMO | Oportunidades y Advisory",
  description: "¿Buscas CMO para tu scale-up B2B SaaS? Contacta para roles, advisory o speaking. Respondo en 24-48h.",
};

export default function Contact() {
  const conversationTypes = [
    {
      title: "CMO Roles",
      description: "Para CEOs y headhunters: scale-ups Series B/C buscando leader de marketing para escalar de 10M a 100M ARR.",
    },
    {
      title: "Advisory",
      description: "Para founders pre-seed/Series A: estructura de growth, primeras contrataciones, definición de ICP y messaging.",
    },
    {
      title: "Speaking",
      description: "Para organizadores de eventos: PLG, zero-to-one marketing, multi-market expansion. Paneles, keynotes, workshops.",
    },
  ];

  return (
    <>
      <Navigation />

      {/* Header */}
      <section className="pt-[120px] pb-16 md:pb-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
              Hablemos de arquitectura de crecimiento.
            </h1>
            <p className="text-lg md:text-xl text-[#737373]">
              Si tu Serie B/C necesita CMO o VP Marketing, o si quieres explorar 
              advisory, mi inbox está abierto.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 md:py-24 border-t border-[#E5E5E5]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Email & Calendly */}
            <div className="space-y-12">
              {/* Email */}
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-[#1A1A1A] mb-4">
                  Email directo
                </h2>
                <div className="flex items-center gap-4 p-6 border border-[#E5E5E5] bg-white">
                  <Mail className="text-[#0066FF]" size={24} />
                  <span className="text-lg font-mono text-[#1A1A1A]">julia@email.com</span>
                  <CopyEmailButton />
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-[#E5E5E5]"></div>

              {/* Calendly */}
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-[#1A1A1A] mb-4">
                  Agenda una llamada
                </h2>
                <p className="text-base text-[#737373] mb-6">
                  Prefiero calidad sobre cantidad de meetings. Si llegaste hasta aquí, 
                  probablemente vale la pena hablar. Agenda 30 minutos y empecemos la conversación.
                </p>
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-[#1A1A1A] text-white rounded-lg text-base font-semibold hover:bg-black hover:-translate-y-0.5 transition-all"
                >
                  <Calendar className="mr-2" size={18} />
                  Agendar 30 minutos
                </a>
              </div>
            </div>

            {/* Right Column - Conversation Types */}
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-[#1A1A1A] mb-6">
                Tipos de conversaciones
              </h2>

              <div className="space-y-6">
                {conversationTypes.map((type, index) => (
                  <div
                    key={type.title}
                    className="p-6 border border-[#E5E5E5] bg-white hover:border-[#0066FF] transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="flex items-center justify-center w-8 h-8 bg-[rgba(0,102,255,0.1)] text-[#0066FF] text-sm font-bold rounded">
                        {index + 1}
                      </span>
                      <h3 className="text-lg font-semibold text-[#1A1A1A]">{type.title}</h3>
                    </div>
                    <p className="text-base text-[#737373]">{type.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 md:py-24 bg-[#F5F5F5]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <span className="block font-mono text-4xl md:text-5xl font-bold text-[#0066FF] mb-2">9</span>
              <span className="text-sm font-semibold uppercase tracking-wide text-[#737373]">años</span>
              <p className="text-sm text-[#737373] mt-1">escalando B2B SaaS</p>
            </div>
            <div>
              <span className="block font-mono text-4xl md:text-5xl font-bold text-[#0066FF] mb-2">4</span>
              <span className="text-sm font-semibold uppercase tracking-wide text-[#737373]">mercados</span>
              <p className="text-sm text-[#737373] mt-1">simultáneos</p>
            </div>
            <div>
              <span className="block font-mono text-4xl md:text-5xl font-bold text-[#0066FF] mb-2">3</span>
              <span className="text-sm font-semibold uppercase tracking-wide text-[#737373]">startups</span>
              <p className="text-sm text-[#737373] mt-1">from zero</p>
            </div>
            <div>
              <span className="block font-mono text-4xl md:text-5xl font-bold text-[#0066FF] mb-2">2+</span>
              <span className="text-sm font-semibold uppercase tracking-wide text-[#737373]">idiomas</span>
              <p className="text-sm text-[#737373] mt-1">nativos + 2 fluent</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-base text-[#737373]">
              Respondo emails en 24-48h. Si no recibes respuesta, revisa spam o LinkedIn.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
