import Image from 'next/image'
import { timelineData } from '@/lib/data'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

/**
 * Linha do tempo vertical central com linha dourada, marcos em "pill" azul
 * e conteúdo alternando entre esquerda e direita.
 * Os dados vêm de `timelineData` em lib/data.ts — SUBSTITUA PELO TEXTO REAL DA FOX.
 */
export function Timeline() {
  return (
    <section id="sobre" className="relative isolate overflow-hidden bg-background py-24 lg:py-32">
      {/* blob orgânico cinza claro de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-24 size-[40rem] -translate-x-1/2 rounded-[48%_52%_55%_45%/45%_50%_50%_55%] bg-secondary/70 blur-3xl"
      />

      <div className="fox-container relative">
        <SectionHeading
          eyebrow="Nossa história"
          title="A trajetória da FOX"
          description="Mais de um século acompanhando a evolução do mercado de seguros brasileiro — do porto de Santos à regulação de sinistros digital em todo o país."
        />

        <ol className="relative mt-20 space-y-12 lg:space-y-16">
          {/* linha vertical: à esquerda no mobile, central no desktop */}
          <span
            aria-hidden="true"
            className="absolute inset-y-0 left-6 w-[3px] rounded-full bg-gradient-to-b from-gold/20 via-gold to-gold/20 lg:left-1/2 lg:-translate-x-1/2"
          />

          {timelineData.map((item, index) => {
            const isRight = index % 2 === 1

            return (
              <li key={item.year} className="relative pl-20 lg:grid lg:grid-cols-2 lg:gap-16 lg:pl-0">
                {/* marcador: pill azul com círculo dourado */}
                <Reveal
                  delay={80}
                  from="none"
                  className="absolute left-0 top-1 z-10 lg:left-1/2 lg:-translate-x-1/2"
                >
                  <div className="rounded-full bg-navy p-1.5 shadow-lg shadow-navy/25 ring-4 ring-background">
                    <span className="flex size-11 items-center justify-center rounded-full bg-gold font-display text-[13px] font-bold text-navy">
                      {item.year}
                    </span>
                  </div>
                </Reveal>

                <Reveal
                  from={isRight ? 'right' : 'left'}
                  delay={140}
                  className={
                    isRight
                      ? 'lg:col-start-2 lg:pl-16'
                      : 'lg:col-start-1 lg:row-start-1 lg:pr-16'
                  }
                >
                  <article className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl sm:p-7">
                    <h3 className="font-display text-lg font-bold uppercase tracking-wide text-card-foreground sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-pretty text-muted-foreground sm:text-base">
                      {item.text}
                    </p>

                    {item.image ? (
                      // SUBSTITUA PELA FOTO HISTÓRICA REAL
                      <div className="mt-5 overflow-hidden rounded-xl">
                        <Image
                          src={item.image || '/placeholder.svg'}
                          alt={`FOX Reguladora em ${item.year}: ${item.title}`}
                          width={720}
                          height={420}
                          className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-52"
                        />
                      </div>
                    ) : null}
                  </article>
                </Reveal>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
