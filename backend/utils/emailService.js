import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmailNotification = async ({ name, email, message }) => {
  if (!process.env.RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY not configured')
  }

  try {
    const data = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height:1.6">
          <h2 style="color:#ff4d8d">New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="background:#f5f5f5;padding:12px;border-radius:6px">
            ${message.replace(/\n/g, '<br/>')}
          </p>
        </div>
      `,
    })

    console.log('✅ Email sent via Resend:', data.id)
    return data
  } catch (error) {
    console.error('❌ Resend email error:', error)
    throw new Error('Failed to send email')
  }
}
