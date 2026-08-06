'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { clients } from '@/lib/data'
import { cn } from '@/lib/utils'

const INTERVAL = 3500

/** logos visíveis por página, conforme o breakpoint */
function getPerView() {
  if (typeof window === 'undefined') return 5
  if (window.matchMedia('(min-width: 1024px)').matches) return 5
  if (window.matchMedia('(min-width: 640px)').matches) return 3
  return 2
}

export function ClientsCarousel() {
  const [perView, setPerView] = useState(5)
  const [page, setPage] = useState(0)
  const [paused, setPaused] = useState(false)
  const pages = Math.max(1, Math.ceil(clients.length / perView))

  useEffect(() => {
    const update = () => {
      setPerView(getPerView())
      setPage(0)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  // auto-play com pausa no hover/foco
  useEffect(() => {
    if (paused || pages <= 1) return
    const timer = setInterval(() => setPage((current) => (current + 1) % pages), INTERVAL)
    return () => clearInterval(timer)
  }, [paused, pages])

  return (
    <section id="clientes" className="relative isolate overflow-hidden bg-navy py-24 text-white lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 size-[30rem] rounded-[50%_50%_42%_58%/48%_52%_48%_52%] bg-navy-soft/60 blur-3xl"
      />

      <div className="fox-container relative">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
              <span className="h-px w-8 bg-gold/60" aria-hidden="true" />
              Clientes
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-tight tracking-tight text-balance sm:text-4xl">
              Quem confia na FOX
            </h2>
            <p className="mt-4 text-base leading-relaxed text-pretty text-white/70">
              Seguradoras, resseguradoras, corretoras e transportadores de todo o Brasil. SUBSTITUA PELAS LOGOS REAIS DOS
              CLIENTES.
            </p>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setPage((current) => (current - 1 + pages) % pages)}
              aria-label="Clientes anteriores"
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-gold hover:text-gold"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => setPage((current) => (current + 1) % pages)}
              aria-label="Próximos clientes"
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-gold hover:text-gold"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        <div
          className="mt-12 overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <ul
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${page * 100}%)` }}
          >
            {clients.map((client) => (
              <li key={client.name} className="w-1/2 shrink-0 px-2 sm:w-1/3 lg:w-1/5">
                {/* SUBSTITUA PELO <Image> DA LOGO REAL DO CLIENTE */}
                <div className="flex h-24 items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 text-center text-sm font-semibold uppercase tracking-[0.12em] text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-white/10 hover:text-white">
                  {client.name}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: pages }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setPage(index)}
              aria-label={`Ir para o grupo ${index + 1} de clientes`}
              aria-current={page === index}
              className={cn(
                'h-1.5 rounded-full transition-all duration-300',
                page === index ? 'w-8 bg-gold' : 'w-3 bg-white/25 hover:bg-white/50',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
