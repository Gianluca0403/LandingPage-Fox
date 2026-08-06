import { cn } from '@/lib/utils'
import { Reveal } from '@/components/reveal'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
  tone?: 'dark' | 'light'
  className?: string
}

/** Cabeçalho padrão das seções, mantendo a hierarquia tipográfica do site. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'dark',
  className,
}: SectionHeadingProps) {
  const isLight = tone === 'light'

  return (
    <Reveal className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center', className)}>
      <p
        className={cn(
          'inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em]',
          isLight ? 'text-gold' : 'text-accent',
        )}
      >
        <span className={cn('h-px w-8', isLight ? 'bg-gold/60' : 'bg-accent/60')} aria-hidden="true" />
        {eyebrow}
      </p>
      <h2
        className={cn(
          'mt-4 font-display text-3xl font-bold uppercase leading-tight tracking-tight text-balance sm:text-4xl lg:text-[2.75rem]',
          isLight ? 'text-white' : 'text-foreground',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'mt-5 text-base leading-relaxed text-pretty sm:text-lg',
            isLight ? 'text-white/70' : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}
