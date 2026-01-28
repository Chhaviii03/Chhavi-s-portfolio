import express from 'express'
import { sendEmailNotification } from '../utils/emailService.js'

const router = express.Router()

router.post('/', async (req, res) => {
  console.log('🔥 /api/contact hit', req.body)
  try {
    const { name, email, message } = req.body

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required',
      })
    }

    // Send email notification
    try {
      const emailResult = await sendEmailNotification({ name, email, message })
      
      // Check if email was skipped (not configured)
      if (emailResult && emailResult.skipped) {
        console.log('⚠️  Email notification skipped - credentials not configured')
        // Still return success, but log a warning
        return res.status(200).json({
          success: true,
          message: 'Message received! (Email notification not configured)',
        })
      }
      
      res.status(200).json({
        success: true,
        message: 'Message sent successfully! I\'ll get back to you soon.',
      })
    } catch (emailError) {
      console.error('Email sending failed:', emailError)
      console.error('Error details:', emailError.message)
      res.status(500).json({
        success: false,
        message: emailError.message || 'Failed to send message. Please check server configuration.',
      })
    }
  } catch (error) {
    console.error('Error processing message:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.',
    })
  }
})

export default router



