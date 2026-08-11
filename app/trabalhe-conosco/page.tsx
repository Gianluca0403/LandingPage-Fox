'use client'

import { CheckCircle2, FileText, GraduationCap, ShieldCheck, TrendingUp, Upload, Users } from 'lucide-react'
import { useRef, useState } from 'react'
import { cn } from '@/lib/utils'

const EMAIL_RH = 'comercial@foxaudit.com.br' // EMAIL DE TESTE - trocar pelo email real da empresa depois

// SUBSTITUA PELOS DIFERENCIAIS REAIS DE TRABALHAR NA FOX
const highlights = [
  { icon: TrendingUp, text: 'Empresa em expansao, com estrutura solida no mercado de seguros ha decadas.' },
  { icon: Users, text: 'Equipe colaborativa, com profissionais de 5, 10, 15 e mais de 20 anos de casa.' },
  { icon: GraduationCap, text: 'Treinamento continuo e departamento de reciclagem para desenvolvimento tecnico.' },
  { icon: ShieldCheck, text: 'Canal de ouvidoria atuante e cultura de respeito e transparencia.' },
]

export default function TrabalheConoscoPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [fileName, setFileName] = useState<string | null>(null)
  const [dragActive, setDragActive] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  function assignFile(file: File | undefined) {
    if (!file || !fileInputRef.current) return
    const dataTransfer = new DataTransfer()
    dataTransfer.items.add(file)
    fileInputRef.current.files = dataTransfer.files
    setFileName(file.name)
  }

  function handleDrop(e: React.DragEvent<HTMLLabelElement>) {
    e.preventDefault()
    setDragActive(false)
    const file = e.dataTransfer.files?.[0]
    assignFile(file)
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const res = await fetch(`https://formsubmit.co/${EMAIL_RH}`, {
        method: 'POST',
        body: formData,
      })
      if (res.ok) {
        setStatus('sent')
        form.reset()
        setFileName(null)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className="bg-background">
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy pt-10 pb-10 text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-accent/20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 bottom-0 size-80 rounded-full bg-gold/10 blur-3xl"
        />
        <div className="fox-container relative">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-px w-8 bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Carreiras</span>
          </div>
          <h1 className="max-w-2xl text-4xl font-extrabold leading-tight md:text-5xl">Trabalhe Conosco</h1>
          <p className="mt-4 max-w-xl text-white/70">
            Faca parte do time que regula sinistros com tecnica, agilidade e transparencia ha decadas. Envie seu
            curriculo e conte pra gente onde voce quer chegar.
          </p>
        </div>
      </section>

      {/* CONTEUDO */}
      <section className="relative isolate overflow-hidden bg-background py-24 lg:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-1/3 size-[32rem] rounded-[52%_48%_45%_55%/50%_50%_50%_50%] bg-secondary/70 blur-3xl"
        />

        <div className="fox-container relative grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start lg:gap-16">
          {/* COLUNA DE DESTAQUES */}
          <div className="lg:sticky lg:top-28">
            <h2 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Por que trabalhar na FOX
            </h2>

            <ul className="mt-6 space-y-5">
              {highlights.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-navy text-gold">
                    <Icon className="size-5" />
                  </span>
                  <p className="mt-1 text-sm leading-relaxed text-foreground">{text}</p>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-2xl border border-accent/30 bg-accent/5 p-6">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Nao encontrou uma vaga aberta pro seu perfil? Sem problema — deixe seu curriculo com a gente e
                entraremos em contato assim que surgir uma oportunidade compativel.
              </p>
            </div>
          </div>

          {/* FORMULARIO */}
          <div className="rounded-3xl border border-border bg-card p-6 shadow-xl shadow-navy/5 sm:p-10">
            <h2 className="text-lg font-bold text-foreground">Envie seu curriculo</h2>
            <p className="mt-1 text-sm text-muted-foreground">Os campos com * sao obrigatorios.</p>

            <form onSubmit={handleSubmit} encType="multipart/form-data" className="mt-6 space-y-5">
              <input type="hidden" name="_subject" value="Novo curriculo - Trabalhe Conosco FOX" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.08em] text-foreground">
                    Nome completo *
                  </label>
                  <input
                    name="name"
                    required
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.08em] text-foreground">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.08em] text-foreground">
                    Telefone *
                  </label>
                  <input
                    name="telefone"
                    required
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.08em] text-foreground">
                    Vaga de interesse
                  </label>
                  <input
                    name="vaga"
                    placeholder="Opcional"
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-accent focus:ring-2 focus:ring-accent/20"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.08em] text-foreground">
                  Curriculo (PDF, ate 10MB) *
                </label>
                <label
                  htmlFor="curriculo"
                  onDragOver={(e) => {
                    e.preventDefault()
                    setDragActive(true)
                  }}
                  onDragLeave={() => setDragActive(false)}
                  onDrop={handleDrop}
                  className={cn(
                    'mt-2 flex cursor-pointer items-center gap-3 rounded-xl border-2 border-dashed px-4 py-5 text-sm transition',
                    dragActive
                      ? 'border-accent bg-accent/10'
                      : 'border-border bg-background hover:border-accent/50 hover:bg-accent/5',
                  )}
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    {fileName ? <FileText className="size-4" /> : <Upload className="size-4" />}
                  </span>
                  <span className="text-muted-foreground">
                    {fileName ? (
                      <span className="font-medium text-foreground">{fileName}</span>
                    ) : (
                      <>
                        Clique para anexar seu curriculo{' '}
                        <span className="text-accent underline underline-offset-2"></span>
                      </>
                    )}
                  </span>
                </label>
                <input
                  id="curriculo"
                  ref={fileInputRef}
                  type="file"
                  name="attachment"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  required
                  className="sr-only"
                  onChange={(e) => assignFile(e.target.files?.[0])}
                />
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.08em] text-foreground">Mensagem</label>
                <textarea
                  name="mensagem"
                  rows={4}
                  placeholder="Conte um pouco sobre voce, sua experiencia ou o que te motiva a trabalhar na FOX."
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-accent focus:ring-2 focus:ring-accent/20"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-accent-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30 disabled:pointer-events-none disabled:opacity-50"
              >
                {status === 'sending' ? 'Enviando...' : 'Enviar curriculo'}
              </button>

              {status === 'sent' && (
                <div className="flex items-center gap-2 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                  <CheckCircle2 className="size-4 shrink-0" />
                  Curriculo enviado com sucesso! Em breve entraremos em contato.
                </div>
              )}
              {status === 'error' && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                  Erro ao enviar. Tente novamente em alguns instantes.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}