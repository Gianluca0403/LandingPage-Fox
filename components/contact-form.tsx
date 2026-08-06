'use client'

import { AlertCircle, CheckCircle2, ChevronDown, Send } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

type Fields = { name: string; email: string; phone: string; subject: string; message: string }
type Errors = Partial<Record<keyof Fields, string>>

const initialFields: Fields = { name: '', email: '', phone: '', subject: 'Transporte', message: '' }

const subjects = ['Transporte', 'Affinity', 'Automóvel', 'SOS', 'Vida', 'Property', 'Outro assunto']

function validate(fields: Fields): Errors {
  const errors: Errors = {}
  if (fields.name.trim().length < 3) errors.name = 'Informe seu nome completo.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(fields.email.trim())) errors.email = 'Informe um e-mail válido.'
  if (fields.phone.replace(/\D/g, '').length < 10) errors.phone = 'Informe um telefone com DDD.'
  if (fields.message.trim().length < 15) errors.message = 'Descreva sua necessidade com pelo menos 15 caracteres.'
  return errors
}

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(initialFields)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle')

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((current) => ({ ...current, [key]: value }))
    setErrors((current) => ({ ...current, [key]: undefined }))
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validate(fields)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    // SUBSTITUA POR UM ENVIO REAL (Server Action, API route ou serviço de e-mail)
    setStatus('sending')
    window.setTimeout(() => {
      setStatus('success')
      setFields(initialFields)
    }, 900)
  }

  const inputClass =
    'w-full rounded-xl border border-border bg-background px-4 py-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent focus:ring-2 focus:ring-accent/20'

  if (status === 'success') {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-border bg-card p-10 text-center">
        <span className="flex size-16 items-center justify-center rounded-full bg-accent/10 text-accent">
          <CheckCircle2 className="size-8" />
        </span>
        <h3 className="mt-6 font-display text-2xl font-bold uppercase tracking-tight text-card-foreground">
          Mensagem enviada
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
          Recebemos seu contato. Nossa equipe técnica responderá em até um dia útil — em casos de sinistro em andamento,
          acione nossa central 24h.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-8 rounded-full border border-border px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          Enviar nova mensagem
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl border border-border bg-card p-7 shadow-sm sm:p-9"
      aria-label="Formulário de contato"
    >
      <h3 className="font-display text-xl font-bold uppercase tracking-tight text-card-foreground">
        Solicite um atendimento
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Preencha os dados abaixo e nossa equipe entrará em contato.
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <Field label="Nome completo" error={errors.name} htmlFor="name">
          <input
            id="name"
            name="name"
            value={fields.name}
            onChange={(event) => update('name', event.target.value)}
            placeholder="Seu nome"
            className={cn(inputClass, errors.name && 'border-destructive')}
            aria-invalid={Boolean(errors.name)}
          />
        </Field>

        <Field label="E-mail" error={errors.email} htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            value={fields.email}
            onChange={(event) => update('email', event.target.value)}
            placeholder="nome@empresa.com.br"
            className={cn(inputClass, errors.email && 'border-destructive')}
            aria-invalid={Boolean(errors.email)}
          />
        </Field>

        <Field label="Telefone" error={errors.phone} htmlFor="phone">
          <input
            id="phone"
            name="phone"
            inputMode="tel"
            value={fields.phone}
            onChange={(event) => update('phone', event.target.value)}
            placeholder="(00) 00000-0000"
            className={cn(inputClass, errors.phone && 'border-destructive')}
            aria-invalid={Boolean(errors.phone)}
          />
        </Field>

        <Field label="Carteira / assunto" htmlFor="subject">
          <div className="relative">
            <select
              id="subject"
              name="subject"
              value={fields.subject}
              onChange={(event) => update('subject', event.target.value)}
              className={cn(inputClass, 'cursor-pointer appearance-none pr-11')}
            >
              {subjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
            <ChevronDown
              aria-hidden="true"
              className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            />
          </div>
        </Field>

        <Field label="Mensagem" error={errors.message} htmlFor="message" className="sm:col-span-2">
          <textarea
            id="message"
            name="message"
            rows={5}
            value={fields.message}
            onChange={(event) => update('message', event.target.value)}
            placeholder="Descreva a ocorrência, a carteira envolvida e a urgência do atendimento."
            className={cn(inputClass, 'resize-none', errors.message && 'border-destructive')}
            aria-invalid={Boolean(errors.message)}
          />
        </Field>
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-accent-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/30 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === 'sending' ? 'Enviando...' : 'Enviar mensagem'}
        <Send className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </form>
  )
}

function Field({
  label,
  htmlFor,
  error,
  children,
  className,
}: {
  label: string
  htmlFor: string
  error?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
        {label}
      </label>
      {children}
      {error ? (
        <p role="alert" className="mt-2 flex items-center gap-1.5 text-xs text-destructive">
          <AlertCircle className="size-3.5" />
          {error}
        </p>
      ) : null}
    </div>
  )
}
