import Image from 'next/image'
import { ArrowRight, BadgeCheck, Clock, MapPin } from 'lucide-react'
import { heroContent, heroStats } from '@/lib/data'
import { AnimatedCounter } from '@/components/animated-counter'
import { Reveal } from '@/components/reveal'

const badges = [
  { icon: Clock, label: 'Acionamento 24h' },
  { icon: MapPin, label: 'Cobertura nacional' },
  { icon: BadgeCheck, label: 'Laudos auditáveis' },
]

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-navy pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* blobs orgânicos decorativos */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 size-[34rem] rounded-full bg-navy-soft/70 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 size-[26rem] rounded-[45%_55%_60%_40%/50%_45%_55%_50%] bg-accent/15 blur-3xl"
      />

      <div className="fox-container relative grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div>
          <Reveal from="bottom">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
              {heroContent.eyebrow}
            </p>
          </Reveal>

          <Reveal from="bottom" delay={100}>
            <h1 className="mt-7 font-display text-4xl font-bold uppercase leading-[1.08] tracking-tight text-balance text-white sm:text-5xl lg:text-[3.5rem]">
              {heroContent.title}
            </h1>
          </Reveal>

          <Reveal from="bottom" delay={200}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-white/70 sm:text-lg">
              {heroContent.subtitle}
            </p>
          </Reveal>

          <Reveal from="bottom" delay={300}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={heroContent.primaryCta.href}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-accent-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/30"
              >
                {heroContent.primaryCta.label}
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href={heroContent.secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:border-gold hover:text-gold"
              >
                {heroContent.secondaryCta.label}
              </a>
            </div>
          </Reveal>

          <Reveal from="bottom" delay={400}>
            <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
              {badges.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2 text-sm text-white/60">
                  <Icon className="size-4 text-gold" />
                  {label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* IMAGEM PRINCIPAL — SUBSTITUA PELA IMAGEM REAL DA FOX */}
        <Reveal from="right" delay={200} className="relative">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
            <Image
              src={heroContent.image || '/placeholder.svg'}
              alt="Regulador da FOX inspecionando carga em centro de distribuição"
              width={900}
              height={1100}
              priority
              className="h-[26rem] w-full object-cover sm:h-[32rem] lg:h-[34rem]"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy via-navy/10 to-transparent" />
          </div>

          <div className="absolute -bottom-6 left-4 right-4 rounded-2xl border border-border bg-card p-5 shadow-xl sm:left-8 sm:right-auto sm:w-72">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Prazo médio de laudo
            </p>
            <p className="mt-1 font-display text-3xl font-bold text-card-foreground">
              <AnimatedCounter value={48} suffix="h" />
            </p>
            <p className="mt-1 text-sm text-muted-foreground">do acionamento à entrega do relatório preliminar</p>
          </div>
        </Reveal>
      </div>

      {/* BARRA DE INDICADORES COM CONTADOR ANIMADO */}
      <div className="fox-container relative mt-24">
        <dl className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {heroStats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 90} className="bg-navy p-7">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block font-display text-4xl font-bold text-white">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="mt-2 block text-sm leading-relaxed text-white/60">{stat.label}</span>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
