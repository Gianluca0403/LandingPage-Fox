'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

type RevealProps = {
  children: React.ReactNode
  /** direção da entrada do elemento */
  from?: 'bottom' | 'left' | 'right' | 'none'
  /** atraso em ms para criar efeito escalonado */
  delay?: number
  className?: string
  as?: 'div' | 'li' | 'section' | 'article' | 'span'
}

const offsets: Record<NonNullable<RevealProps['from']>, string> = {
  bottom: 'translate-y-10',
  left: '-translate-x-10',
  right: 'translate-x-10',
  none: 'translate-y-0',
}

/**
 * Wrapper de scroll reveal baseado em IntersectionObserver
 * (sem dependências externas). Respeita prefers-reduced-motion.
 */
export function Reveal({ children, from = 'bottom', delay = 0, className, as = 'div' }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)
  const Tag = as as React.ElementType

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        'transition-all duration-700 ease-out will-change-transform motion-reduce:transition-none',
        visible ? 'translate-x-0 translate-y-0 opacity-100 blur-0' : cn('opacity-0', offsets[from]),
        className,
      )}
    >
      {children}
    </Tag>
  )
}
