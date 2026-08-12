import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: Number(process.env.SMTP_PORT) === 465, // true para porta 465, false para 587 (STARTTLS)
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

const EMAIL_DESTINO = process.env.EMAIL_DESTINO || 'gianlucasacilote@gmail.com'

function buildEmailHtml({
  name,
  email,
  telefone,
  vaga,
  mensagem,
}: {
  name: string
  email: string
  telefone: string
  vaga: string | null
  mensagem: string | null
}) {
  const row = (label: string, value: string) => `
    <tr>
      <td style="padding: 14px 0; border-bottom: 1px solid #e7e9ee;">
        <p style="margin: 0 0 4px; font-family: Arial, Helvetica, sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #9aa3b2;">
          ${label}
        </p>
        <p style="margin: 0; font-family: Arial, Helvetica, sans-serif; font-size: 15px; color: #0b2545;">
          ${value}
        </p>
      </td>
    </tr>
  `

  return `
  <!DOCTYPE html>
  <html lang="pt-BR">
    <body style="margin:0; padding:0; background-color:#f1f3f7;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f1f3f7; padding: 32px 0;">
        <tr>
          <td align="center">
            <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius: 16px; overflow: hidden; max-width: 600px;">

              <!-- CABECALHO -->
              <tr>
                <td style="background-color:#0b2545; padding: 32px 40px;">
                  <p style="margin:0; font-family: Arial, Helvetica, sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: #e63946;">
                    Carreiras &middot; FOX Reguladora
                  </p>
                  <h1 style="margin: 8px 0 0; font-family: Arial, Helvetica, sans-serif; font-size: 22px; color: #ffffff;">
                    Novo curr&iacute;culo recebido pelo site
                  </h1>
                </td>
              </tr>

              <!-- CORPO -->
              <tr>
                <td style="padding: 32px 40px 8px;">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                    ${row('Nome completo', name)}
                    ${row('E-mail', `<a href="mailto:${email}" style="color:#0b2545; text-decoration:none;">${email}</a>`)}
                    ${row('Telefone', telefone)}
                    ${row('Vaga de interesse', vaga || 'N&atilde;o informado')}
                    ${row('Mensagem', mensagem ? mensagem.replace(/\n/g, '<br/>') : 'N&atilde;o informado')}
                  </table>
                </td>
              </tr>

              <!-- NOTA -->
              <tr>
                <td style="padding: 20px 40px 32px;">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#fdf1f2; border: 1px solid #f3c9cd; border-radius: 12px;">
                    <tr>
                      <td style="padding: 16px 20px;">
                        <p style="margin:0; font-family: Arial, Helvetica, sans-serif; font-size: 13px; color:#0b2545;">
                          O curr&iacute;culo em anexo (PDF) foi enviado junto com esta mensagem. Voc&ecirc; pode responder este e-mail diretamente para falar com o candidato.
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- RODAPE -->
              <tr>
                <td style="padding: 20px 40px; background-color:#f7f8fa; border-top: 1px solid #e7e9ee;">
                  <p style="margin:0; font-family: Arial, Helvetica, sans-serif; font-size: 11px; color:#9aa3b2;">
                    Esta mensagem foi enviada automaticamente pelo formul&aacute;rio &ldquo;Trabalhe Conosco&rdquo; do site da FOX Reguladora.
                  </p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
  `
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData()

    const name = formData.get('name') as string | null
    const email = formData.get('email') as string | null
    const telefone = formData.get('telefone') as string | null
    const vaga = formData.get('vaga') as string | null
    const mensagem = formData.get('mensagem') as string | null
    const file = formData.get('attachment') as File | null

    if (!name || !email || !telefone || !file) {
      return NextResponse.json({ error: 'Campos obrigatorios faltando' }, { status: 400 })
    }

    const buffer = Buffer.from(await file.arrayBuffer())

    await transporter.sendMail({
      from: `"FOX Reguladora" <${process.env.SMTP_USER}>`,
      to: EMAIL_DESTINO,
      replyTo: email,
      subject: `Novo curriculo - ${name}`,
      html: buildEmailHtml({ name, email, telefone, vaga, mensagem }),
      attachments: [
        {
          filename: file.name,
          content: buffer,
        },
      ],
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Erro ao enviar via Nodemailer:', err)
    return NextResponse.json({ error: 'Erro interno ao enviar o email' }, { status: 500 })
  }
}