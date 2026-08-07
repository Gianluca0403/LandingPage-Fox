import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { groupCompanies } from '@/lib/data'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

export function GroupCompanies() {
  return (
    <section id="empresas" className="bg-surface py-24 lg:py-32">
      <div className="fox-container">
        <SectionHeading
          eyebrow="Ecossistema"
          title="Empresas do grupo"
          description="Estruturas independentes e complementares que cobrem todo o ciclo do sinistro — da inspeção preventiva à venda do salvado."
        />

        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {groupCompanies.map((company, index) => (
            <Reveal key={company.name} as="li" delay={index * 70}>
              <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-navy/30 hover:shadow-xl">
                <div className="flex items-center justify-between gap-4">
                  {company.logo ? (
                    <span className="flex h-16 max-w-[180px] items-center justify-start rounded-xl bg-white px-3 py-2 ring-1 ring-border transition-colors duration-300 group-hover:ring-accent/40">
                      <Image
                        src={company.logo}
                        alt={`Logo ${company.name}`}
                        width={160}
                        height={56}
                        className="h-full w-auto object-contain"
                      />
                    </span>
                  ) : (
                    <span className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-navy font-display text-lg font-bold tracking-wide text-white transition-colors duration-300 group-hover:bg-accent">
                      {company.initials}
                    </span>
                  )}
                  <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </div>

                <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">{company.tag}</p>
                <h3 className="mt-2 font-display text-xl font-bold uppercase tracking-tight text-card-foreground">
                  {company.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-pretty text-muted-foreground">{company.description}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}