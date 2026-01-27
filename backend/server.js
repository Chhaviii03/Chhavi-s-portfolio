import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import contactRoutes from './routes/contact.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on ${PORT}`))

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/api/contact', contactRoutes)

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' })
})

// Root route - helpful message
app.get('/', (req, res) => {
  res.json({ 
    message: 'Backend API Server is running',
    endpoints: {
      health: '/api/health',
      contact: 'POST /api/contact'
    },
    note: 'Access the frontend at http://localhost:3000'
  })
})

// Suppress favicon.ico 404 error
app.get('/favicon.ico', (req, res) => {
  res.status(204).end()
})

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
})

