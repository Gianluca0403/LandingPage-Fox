import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { contactInfo, navLinks, serviceLinks } from '@/lib/data'
import { ContactForm } from '@/components/contact-form'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const infoItems = [
  { icon: MapPin, label: 'Endereco', value: contactInfo.address },
  { icon: MessageCircle, label: 'WhatsApp', value: contactInfo.whatsapp },
  { icon: Mail, label: 'E-mail', value: contactInfo.email },
  { icon: Clock, label: 'Atendimento', value: contactInfo.hours },
]

export function Footer() {
  return (
    <>
      {/* ------------------------------ CONTATO ------------------------------ */}
      <section id="contato" className="relative isolate overflow-hidden bg-background py-24 lg:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 bottom-0 size-[32rem] rounded-[52%_48%_45%_55%/50%_50%_50%_50%] bg-secondary/70 blur-3xl"
        />

        <div className="fox-container relative">
          <SectionHeading
            align="left"
            eyebrow="Contato"
            title="Vamos regular juntos"
            description="Fale com nossa equipe tecnica sobre volumes, prazos, SLAs ou um sinistro em andamento."
          />

          <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <Reveal from="left">
              <ul className="space-y-5">
                {infoItems.map(({ icon: Icon, label, value }) => (
                  <li key={label} className="flex items-start gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-navy text-gold">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                        {label}
                      </p>
                      <p className="mt-1 text-base leading-relaxed text-foreground">{value}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-10 rounded-2xl border border-accent/30 bg-accent/5 p-6">
                <p className="font-display text-sm font-bold uppercase tracking-[0.16em] text-accent">SOS 24 horas</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Sinistro em andamento? Acione nossa central de emergencia a qualquer hora, todos os dias.
                </p>
                <a
                  href={`tel:${contactInfo.sosPhone.replace(/\D/g, '')}`}
                  className="mt-4 inline-flex items-center gap-2 text-base font-semibold text-foreground transition-colors hover:text-accent"
                >
                  <Phone className="size-4" />
                  {contactInfo.sosPhone}
                </a>
              </div>
            </Reveal>

            <Reveal from="right" delay={120}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------ RODAPE ------------------------------- */}
      <footer className="bg-navy text-white">
        <div className="fox-container grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <img
                src="/Empresas/Logo_Grupo_FOX.avif"
                alt="Grupo FOX"
                className="h-11 w-auto"
              />
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/60">
              Regulacao e liquidacao de sinistros em transporte, automovel, property, vida, affinity e assistencias, com
              cobertura nacional e mais de um seculo de experiencia tecnica.
            </p>

            <ul className="mt-7 flex gap-3">
              {contactInfo.socials.map((social) => (
                <li key={social.label}>
                  {/* SUBSTITUA PELOS LINKS REAIS DAS REDES SOCIAIS, SE NECESSARIO */}
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/70 transition-colors hover:border-gold hover:text-gold"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Links rapidos">
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-gold">Navegacao</h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/65 transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Servicos">
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-gold">Servicos</h3>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map((service) => (
                <li key={service.slug}>
                  <a href={service.href} className="text-sm text-white/65 transition-colors hover:text-white">
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="border-t border-white/10">
          <div className="fox-container flex flex-col gap-3 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
            <p className="leading-none">(c) {new Date().getFullYear()} FOX Reguladora. Todos os direitos reservados.</p>
            <a
              href="https://synergg.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 leading-none transition-opacity hover:opacity-80"
            >
              Desenvolvido por
              <img
                src="/Empresa/Logo_SynerG_Tech.avif"
                alt="SynerG Tech"
                className="block h-8 w-auto shrink-0"
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}