import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { contactInfo, navLinks, serviceLinks } from '@/lib/data'
import { ContactForm } from '@/components/contact-form'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const infoItems = [
  { icon: MapPin, label: 'Endereço', value: contactInfo.address },
  { icon: Phone, label: 'Telefone', value: contactInfo.phone },
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
            description="Fale com nossa equipe técnica sobre volumes, prazos, SLAs ou um sinistro em andamento."
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
                  Sinistro em andamento? Acione nossa central de emergência a qualquer hora, todos os dias.
                </p>
                <a
                  href={`tel:${contactInfo.phone.replace(/\D/g, '')}`}
                  className="mt-4 inline-flex items-center gap-2 text-base font-semibold text-foreground transition-colors hover:text-accent"
                >
                  <Phone className="size-4" />
                  {contactInfo.phone}
                </a>
              </div>
            </Reveal>

            <Reveal from="right" delay={120}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------ RODAPÉ ------------------------------- */}
      <footer className="bg-navy text-white">
        <div className="fox-container grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            {/* SUBSTITUA PELA LOGO REAL DA FOX */}
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-xl bg-accent font-display text-lg font-bold text-accent-foreground">
                FX
              </span>
              <span className="leading-none">
                <span className="block font-display text-xl font-bold tracking-[0.18em]">FOX</span>
                <span className="block text-[10px] font-medium tracking-[0.32em] text-white/60">REGULADORA</span>
              </span>
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/60">
              Regulação e liquidação de sinistros em transporte, automóvel, property, vida, affinity e assistências, com
              cobertura nacional e mais de um século de experiência técnica.
            </p>

            <ul className="mt-7 flex gap-3">
              {contactInfo.socials.map((social) => (
                <li key={social.label}>
                  {/* SUBSTITUA PELOS LINKS REAIS DAS REDES SOCIAIS */}
                  <a
                    href={social.href}
                    className="inline-flex items-center rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/70 transition-colors hover:border-gold hover:text-gold"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Links rápidos">
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-gold">Navegação</h3>
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

          <nav aria-label="Serviços">
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-gold">Serviços</h3>
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
            <p>© {new Date().getFullYear()} FOX Reguladora. Todos os direitos reservados.</p>
            <p>CNPJ 00.000.000/0001-00 </p>
          </div>
        </div>
      </footer>
    </>
  )
}
