'use client'

import { ChevronDown, Menu, Phone, X } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { navLinks, serviceLinks } from '@/lib/data'
import { cn } from '@/lib/utils'
import { ThemeToggle } from '@/components/theme-toggle'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!servicesOpen) return
    const onPointerDown = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) setServicesOpen(false)
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setServicesOpen(false)
    }
    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [servicesOpen])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  function closeAll() {
    setServicesOpen(false)
    setMobileOpen(false)
    setMobileServicesOpen(false)
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled || mobileOpen
          ? 'bg-navy/95 shadow-[0_10px_40px_-12px_rgba(11,37,69,0.55)] backdrop-blur-md'
          : 'bg-navy/25 backdrop-blur-sm',
      )}
    >
      <div className="fox-container flex h-20 items-center justify-between gap-4">
        <a href="#home" onClick={closeAll} className="group flex shrink-0 items-center">
          <Image
            src="/Empresas/Logo_Grupo_FOX.svg"
            alt="Grupo FOX"
            width={160}
            height={56}
            priority
            className="h-11 w-auto transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        <nav aria-label="Navegacao principal" className="hidden items-center gap-0.5 xl:flex">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} ref={dropdownRef} className="relative" onMouseLeave={() => setServicesOpen(false)}>
                <button
                  type="button"
                  onMouseEnter={() => setServicesOpen(true)}
                  onClick={() => setServicesOpen((open) => !open)}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  className="flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-2 text-[13px] font-semibold uppercase tracking-[0.08em] text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                  <ChevronDown className={cn('size-4 transition-transform duration-300', servicesOpen && 'rotate-180')} />
                </button>

                <div
                  className={cn(
                    'absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3 transition-all duration-200',
                    servicesOpen
                      ? 'pointer-events-auto translate-y-0 opacity-100'
                      : 'pointer-events-none -translate-y-2 opacity-0',
                  )}
                >
                  <ul className="overflow-hidden rounded-2xl border border-border bg-popover p-2 shadow-2xl">
                    {serviceLinks.map((service) => (
                      <li key={service.slug}>
                        <a
                          href={service.href}
                          onClick={closeAll}
                          className="flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium text-popover-foreground transition-colors hover:bg-secondary hover:text-accent"
                        >
                          {service.label}
                          <span className="text-xs text-muted-foreground">Sinistros</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap rounded-full px-3 py-2 text-[13px] font-semibold uppercase tracking-[0.08em] text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            ),
          )}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle className="hidden sm:inline-flex" />

          <a
            href="/trabalhe-conosco"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 whitespace-nowrap rounded-full border border-white/25 px-4 py-2.5 text-[12px] font-semibold uppercase tracking-[0.08em] text-white/90 transition-all duration-300 hover:bg-white/10 xl:inline-flex"
          >
            Trabalhe conosco
          </a>

          <a
            href="#contato"
            className="hidden items-center gap-2 whitespace-nowrap rounded-full bg-accent px-4 py-2.5 text-[12px] font-semibold uppercase tracking-[0.08em] text-accent-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30 xl:inline-flex"
          >
            <Phone className="size-4" />
            Fale conosco
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileOpen}
            className="inline-flex size-11 items-center justify-center rounded-xl border border-white/20 text-white transition-colors hover:bg-white/10 xl:hidden"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          'overflow-y-auto border-t border-white/10 bg-navy transition-all duration-300 xl:hidden',
          mobileOpen ? 'max-h-[calc(100vh-5rem)] opacity-100' : 'max-h-0 overflow-hidden opacity-0',
        )}
      >
        <nav aria-label="Navegacao mobile" className="fox-container flex flex-col gap-1 py-6">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="border-b border-white/10 pb-2">
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen((open) => !open)}
                  aria-expanded={mobileServicesOpen}
                  className="flex w-full items-center justify-between py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white"
                >
                  {link.label}
                  <ChevronDown
                    className={cn('size-4 transition-transform duration-300', mobileServicesOpen && 'rotate-180')}
                  />
                </button>
                <ul
                  className={cn(
                    'overflow-hidden transition-all duration-300',
                    mobileServicesOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0',
                  )}
                >
                  {serviceLinks.map((service) => (
                    <li key={service.slug}>
                      <a
                        href={service.href}
                        onClick={closeAll}
                        className="block rounded-lg py-2.5 pl-4 text-sm text-white/70 transition-colors hover:text-gold"
                      >
                        {service.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                onClick={closeAll}
                className="border-b border-white/10 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-white"
              >
                {link.label}
              </a>
            ),
          )}

          <a
            href="/trabalhe-conosco"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeAll}
            className="border-b border-white/10 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-white"
          >
            Trabalhe conosco
          </a>

          <div className="mt-5 flex items-center gap-3">
            <a
              href="#contato"
              onClick={closeAll}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-accent-foreground"
            >
              <Phone className="size-4" />
              Fale conosco
            </a>
            <ThemeToggle className="size-12 shrink-0" />
          </div>
        </nav>
      </div>
    </header>
  )
}