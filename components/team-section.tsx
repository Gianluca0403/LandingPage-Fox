import { Award, GraduationCap, Package, ShieldCheck, Truck, Users } from 'lucide-react'
import type { TeamHighlight } from '@/lib/data'
import { teamHighlights } from '@/lib/data'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const iconMap: Record<TeamHighlight['icon'], React.ElementType> = {
  users: Users,
  award: Award,
  truck: Truck,
  shieldCheck: ShieldCheck,
  graduation: GraduationCap,
  package: Package,
}

export function TeamSection() {
  return (
    <section id="equipe" className="relative isolate overflow-hidden bg-surface py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/3 size-[30rem] rounded-[55%_45%_40%_60%/50%_55%_45%_50%] bg-secondary/80 blur-3xl"
      />

      <div className="fox-container relative">
        <SectionHeading
          align="left"
          eyebrow="Profissionais FOX"
          title="Equipe especializada"
          description="Uma estrutura interna robusta, com formação técnica dedicada e acompanhamento contínuo — porque a qualidade do laudo depende de quem está em campo."
        />

        <ul className="mt-16 grid gap-6 md:grid-cols-2">
          {teamHighlights.map((item, index) => {
            const Icon = iconMap[item.icon]

            return (
              <Reveal
                key={item.highlight}
                as="li"
                delay={index * 80}
                from={index % 2 === 0 ? 'left' : 'right'}
                className="group"
              >
                <div className="flex h-full items-start gap-5 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl sm:p-7">
                  <span className="flex size-14 shrink-0 items-center justify-center rounded-full border-2 border-accent/40 text-accent transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground">
                    <Icon className="size-6" />
                  </span>
                  <p className="text-base leading-relaxed text-pretty text-muted-foreground">
                    <strong className="font-display font-bold text-card-foreground">{item.highlight}</strong>{' '}
                    {item.text}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
