import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
  try {
    const { name, email, message } = await req.json()
    await resend.emails.send({
      from: 'SAIDI Contact <noreply@saidi.sg>',
      to: 'lv@saidi.sg',
      subject: `Contact from ${name}`,
      reply_to: email,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>`
    })
    return NextResponse.json({ ok: true })
  } catch (err) {
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 })
  }
} 