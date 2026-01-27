# Chhavi Bhatt - Personal Portfolio Website

A modern, responsive single-page portfolio website built with React, Tailwind CSS, and Node.js.

## Features

- 🎨 **Modern Design**: Pink & Black theme with smooth animations
- 📱 **Fully Responsive**: Works seamlessly on all devices
- 🚀 **Fast & Optimized**: Built with Vite and modern React
- ✉️ **Contact Form**: Backend integration with email notifications
- 🎯 **Smooth Scrolling**: Navigation with active section highlighting
- 🏆 **Achievements Showcase**: Display of hackathon wins and recognitions
- 💼 **Projects Portfolio**: Grid layout with hover effects
- 🛠️ **Technical Skills**: Animated marquee display

## Tech Stack

### Frontend
- React 18
- Tailwind CSS
- Framer Motion
- Vite
- Axios

### Backend
- Node.js
- Express
- Nodemailer

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Email account (Gmail recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm run install-all
   ```

3. **Set up environment variables**
   
   Copy the example environment file:
   ```bash
   cp backend/.env.example backend/.env
   ```
   
   Edit `backend/.env` with your configuration:
   ```env
   PORT=5000
   EMAIL_SERVICE=gmail
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   RECIPIENT_EMAIL=your-email@gmail.com
   ```

4. **Start the development servers**
   ```bash
   npm run dev
   ```

   This will start:
   - Frontend: http://localhost:3000
   - Backend: http://localhost:5000

### Production Build

1. **Build the frontend**
   ```bash
   cd frontend
   npm run build
   ```

2. **Start the backend**
   ```bash
   cd backend
   npm start
   ```

## Project Structure

```
portfolio/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── Navbar.jsx
│   │   ├── sections/
│   │   │   ├── About.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── TechnicalSkills.jsx
│   │   │   ├── Achievements.jsx
│   │   │   └── ContactMe.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
├── backend/
│   ├── routes/
│   │   └── contact.js
│   ├── utils/
│   │   └── emailService.js
│   ├── server.js
│   └── package.json
└── README.md
```

## API Endpoints

### Contact Form
- `POST /api/contact` - Submit contact form message (sends email notification)

## Email Configuration

### Gmail Setup
1. Enable 2-Factor Authentication on your Google account
2. Generate an App Password: https://support.google.com/accounts/answer/185833
3. Use the App Password in `EMAIL_PASS`

### Other SMTP Services
Update the `.env` file with your SMTP provider's settings.

## How It Works

When someone submits the contact form:
1. The form data is sent to the backend API
2. An email notification is sent to your inbox with the message details
3. You receive the message directly in your email

**Note:** Messages are sent via email only - no database storage. Check your email inbox for all contact form submissions.

## Customization

### Colors
Edit `frontend/tailwind.config.js` to customize the color scheme.

### Content
Update the content in each section component:
- `frontend/src/sections/About.jsx` - Personal information
- `frontend/src/sections/Projects.jsx` - Project details
- `frontend/src/sections/Achievements.jsx` - Achievements list
- `frontend/src/sections/TechnicalSkills.jsx` - Skills list

### Profile Image
Replace the placeholder in `frontend/src/sections/About.jsx` with your actual profile image.

## Deployment

### Frontend (Vercel/Netlify)
1. Build the frontend: `cd frontend && npm run build`
2. Deploy the `dist` folder

### Backend (Heroku/Railway/Render)
1. Set environment variables in your hosting platform
2. Deploy the backend folder
3. Update frontend API URLs to point to your backend

## License

MIT

## Contact

For questions or issues, please open an issue on GitHub.



