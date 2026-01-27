import dotenv from 'dotenv'
import nodemailer from 'nodemailer'

dotenv.config()

// Create transporter
const createTransporter = () => {
  // For Gmail
  if (process.env.EMAIL_SERVICE === 'gmail') {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Use App Password for Gmail
      },
      // Add connection timeout and retry settings
      connectionTimeout: 10000, // 10 seconds
    })
  }

  // For other SMTP services
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    // Add connection timeout
    connectionTimeout: 10000, // 10 seconds
  })
}

export const sendEmailNotification = async ({ name, email, message }) => {
  // Skip email if credentials not configured
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.log('⚠️  Email credentials not configured. Skipping email notification.')
    console.log('⚠️  Please configure EMAIL_USER and EMAIL_PASS in your .env file')
    // Return a resolved promise instead of throwing, so the API still returns success
    return Promise.resolve({ skipped: true, reason: 'Email not configured' })
  }

  // Debug: Check if credentials are set (but don't log the actual password)
  console.log('📧 Attempting to send email...')
  console.log('📧 Email user:', process.env.EMAIL_USER)
  console.log('📧 Email service:', process.env.EMAIL_SERVICE)
  console.log('📧 Password length:', process.env.EMAIL_PASS ? process.env.EMAIL_PASS.length : 0)
  
  // Validate email format
  if (process.env.EMAIL_USER && process.env.EMAIL_USER.includes('your-email')) {
    console.error('❌ ERROR: EMAIL_USER is still set to placeholder "your-email@gmail.com"')
    console.error('❌ Please update your .env file with your actual Gmail address')
    throw new Error('EMAIL_USER is not configured. Please set your actual Gmail address in .env file.')
  }
  
  // Validate App Password format (should be 16 chars, or 19 with spaces)
  if (process.env.EMAIL_PASS) {
    const passLength = process.env.EMAIL_PASS.replace(/\s/g, '').length
    if (passLength !== 16) {
      console.warn('⚠️  WARNING: App Password should be 16 characters (without spaces)')
      console.warn('⚠️  Your password is', passLength, 'characters. Make sure you\'re using a Gmail App Password.')
    }
  }

  let transporter
  try {
    transporter = createTransporter()
  } catch (error) {
    console.error('❌ Error creating email transporter:', error)
    throw new Error('Failed to configure email service. Please check your .env settings.')
  }

  const recipientEmail = process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER

  const mailOptions = {
    from: `Portfolio Contact <${process.env.EMAIL_USER}>`,
    to: recipientEmail,
    subject: `New Contact Form Message from ${name}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              background-color: #f4f4f4;
              padding: 20px;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              background-color: #ffffff;
              padding: 30px;
              border-radius: 10px;
              box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            .header {
              background: linear-gradient(135deg, #ff4d8d, #ff6ba3);
              color: white;
              padding: 20px;
              border-radius: 10px 10px 0 0;
              margin: -30px -30px 30px -30px;
            }
            .content {
              margin: 20px 0;
            }
            .field {
              margin-bottom: 15px;
            }
            .label {
              font-weight: bold;
              color: #ff4d8d;
              margin-bottom: 5px;
            }
            .value {
              padding: 10px;
              background-color: #f9f9f9;
              border-left: 3px solid #ff4d8d;
              border-radius: 5px;
            }
            .footer {
              margin-top: 30px;
              padding-top: 20px;
              border-top: 1px solid #eee;
              text-align: center;
              color: #666;
              font-size: 12px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Contact Form Message</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${email}</div>
              </div>
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${message.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
            <div class="footer">
              <p>This message was sent from your portfolio contact form.</p>
              <p>You can view all messages in the admin dashboard.</p>
            </div>
          </div>
        </body>
      </html>
    `,
    text: `
      New Contact Form Message
      
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  }

  try {
    // Verify connection first
    await transporter.verify()
    console.log('✅ Email server connection verified')
    
    const info = await transporter.sendMail(mailOptions)
    console.log('✅ Email sent successfully:', info.messageId)
    return info
  } catch (error) {
    console.error('❌ Error sending email:', error)
    
    // Provide more helpful error messages
    if (error.code === 'EAUTH') {
      throw new Error('Email authentication failed. Please check your EMAIL_USER and EMAIL_PASS in .env file. For Gmail, make sure you\'re using an App Password, not your regular password.')
    } else if (error.code === 'ECONNRESET' || error.code === 'ESOCKET') {
      throw new Error('Connection to email server was reset. This usually means:\n1. Your email password is incorrect\n2. For Gmail, you need to use an App Password (not your regular password)\n3. Make sure 2-Factor Authentication is enabled on your Gmail account\n4. Check your internet connection')
    } else if (error.code === 'ETIMEDOUT') {
      throw new Error('Email server connection timed out. Please check your internet connection and try again.')
    }
    
    throw new Error(`Email sending failed: ${error.message}`)
  }
}



