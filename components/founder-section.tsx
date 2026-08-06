import Image from 'next/image'
import { GraduationCap, Quote } from 'lucide-react'
import { founder, founderCredentials } from '@/lib/data'
import { Reveal } from '@/components/reveal'

export function FounderSection() {
  return (
    <section id="fundador" className="relative isolate overflow-hidden bg-navy py-24 text-white lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 size-[32rem] rounded-[50%_50%_45%_55%/55%_45%_50%_50%] bg-navy-soft/60 blur-3xl"
      />

      <div className="fox-container relative grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        {/* FOTO — SUBSTITUA PELA FOTO REAL DE PAULO HAUPTLI */}
        <Reveal from="left" className="relative">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
            <Image
              src={founder.photo || '/placeholder.svg'}
              alt={`Retrato de ${founder.name}, ${founder.role}`}
              width={800}
              height={1000}
              className="h-[28rem] w-full object-cover object-top sm:h-[34rem]"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
            <div className="absolute inset-x-6 bottom-6">
              <p className="font-display text-2xl font-bold uppercase tracking-wide">{founder.name}</p>
              <p className="mt-1 text-sm text-gold">{founder.role}</p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal from="right">
            <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
              <span className="h-px w-8 bg-gold/60" aria-hidden="true" />
              Sócio fundador
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-tight tracking-tight text-balance sm:text-4xl">
              Uma vida dedicada à regulação de sinistros
            </h2>
          </Reveal>

          {/* SUBSTITUA PELO TEXTO REAL DA BIOGRAFIA */}
          <div className="mt-6 space-y-4">
            {founder.bio.map((paragraph, index) => (
              <Reveal key={paragraph.slice(0, 24)} from="right" delay={100 + index * 90}>
                <p className="text-base leading-relaxed text-pretty text-white/70 sm:text-lg">{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <Reveal from="right" delay={300}>
            <blockquote className="mt-8 rounded-2xl border-l-2 border-gold bg-white/5 p-6">
              <Quote className="size-6 text-gold" aria-hidden="true" />
              <p className="mt-3 font-display text-lg leading-relaxed text-pretty text-white/90">{founder.quote}</p>
            </blockquote>
          </Reveal>

          {/* FORMAÇÃO, CURSOS E CERTIFICAÇÕES — SUBSTITUA PELOS DADOS REAIS */}
          <Reveal from="right" delay={360} className="mt-12">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white">
              Formação, cursos e certificações
            </h3>
          </Reveal>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {founderCredentials.map((credential, index) => (
              <Reveal key={`${credential.course}-${index}`} as="li" from="bottom" delay={index * 70}>
                <div className="flex h-full items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition-colors duration-300 hover:border-gold/50 hover:bg-white/10">
                  <GraduationCap className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold leading-snug text-white">{credential.course}</p>
                    <p className="mt-1 text-xs text-white/60">
                      {credential.institution} — {credential.year}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
