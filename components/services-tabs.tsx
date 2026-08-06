'use client'

import { ArrowRight, Building2, Car, Check, HeartPulse, LifeBuoy, Truck, Users } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import type { Service, ServiceSlug } from '@/lib/data'
import { services } from '@/lib/data'
import { cn } from '@/lib/utils'

const iconMap: Record<Service['icon'], React.ElementType> = {
  truck: Truck,
  users: Users,
  car: Car,
  lifeBuoy: LifeBuoy,
  heartPulse: HeartPulse,
  building: Building2,
}

const slugs = services.map((service) => service.slug)

export function ServicesTabs() {
  const [active, setActive] = useState<ServiceSlug>('transporte')

  // sincroniza a aba ativa com a âncora da URL (#transporte, #vida, ...)
  const syncFromHash = useCallback(() => {
    const hash = window.location.hash.replace('#', '') as ServiceSlug
    if (slugs.includes(hash)) setActive(hash)
  }, [])

  useEffect(() => {
    syncFromHash()
    window.addEventListener('hashchange', syncFromHash)
    return () => window.removeEventListener('hashchange', syncFromHash)
  }, [syncFromHash])

  const current = services.find((service) => service.slug === active) ?? services[0]
  const CurrentIcon = iconMap[current.icon]

  return (
    <section id="servicos" className="relative isolate overflow-hidden bg-background py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 size-[36rem] -translate-x-1/2 rounded-[45%_55%_50%_50%/55%_45%_55%_45%] bg-secondary/70 blur-3xl"
      />

      {/* Âncoras individuais para o submenu do header */}
      {slugs.map((slug) => (
        <span key={slug} id={slug} aria-hidden="true" className="block scroll-mt-28" />
      ))}

      <div className="fox-container relative">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
            <span className="h-px w-8 bg-accent/60" aria-hidden="true" />
            Nossos serviços
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-tight tracking-tight text-balance sm:text-4xl lg:text-[2.75rem]">
            Regulação especializada por carteira
          </h2>
          <p className="mt-5 text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
            Cada tipo de sinistro exige um método próprio. Selecione a carteira e veja como a FOX conduz a regulação do
            aviso à conclusão.
          </p>
        </div>

        {/* ABAS */}
        <div
          role="tablist"
          aria-label="Carteiras atendidas pela FOX"
          className="mt-12 flex flex-wrap gap-2 rounded-2xl border border-border bg-card p-2 shadow-sm"
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon]
            const isActive = service.slug === active

            return (
              <button
                key={service.slug}
                type="button"
                role="tab"
                id={`tab-${service.slug}`}
                aria-selected={isActive}
                aria-controls="painel-servico"
                onClick={() => setActive(service.slug)}
                className={cn(
                  'flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-[13px] font-semibold uppercase tracking-[0.1em] transition-all duration-300',
                  isActive
                    ? 'bg-navy text-white shadow-lg shadow-navy/20'
                    : 'text-muted-foreground hover:bg-secondary hover:text-foreground',
                )}
              >
                <Icon className={cn('size-4', isActive ? 'text-gold' : 'text-accent')} />
                {service.label}
              </button>
            )
          })}
        </div>

        {/* PAINEL DA ABA ATIVA — transição suave a cada troca */}
        <div
          key={current.slug}
          role="tabpanel"
          id="painel-servico"
          aria-labelledby={`tab-${current.slug}`}
          className="mt-8 grid animate-in gap-10 rounded-3xl border border-border bg-card p-7 shadow-sm duration-500 fade-in-0 slide-in-from-bottom-3 sm:p-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16"
        >
          <div>
            <span className="flex size-16 items-center justify-center rounded-2xl bg-navy text-gold">
              <CurrentIcon className="size-8" />
            </span>
            <h3 className="mt-6 font-display text-2xl font-bold uppercase tracking-tight text-card-foreground sm:text-3xl">
              {current.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-pretty text-muted-foreground">{current.description}</p>

            <a
              href="#contato"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-accent-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30"
            >
              {current.cta}
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          <ul className="space-y-3 self-center">
            {current.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex items-start gap-3 rounded-xl bg-secondary/60 p-4 text-sm leading-relaxed text-secondary-foreground transition-colors duration-300 hover:bg-secondary"
              >
                <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
