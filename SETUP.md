# Quick Setup Guide

## Step 1: Install Dependencies

```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

Or use the convenience script:
```bash
npm run install-all
```

## Step 2: Configure Environment Variables

1. Copy the example environment file:
   ```bash
   cd backend
   copy .env.example .env
   ```
   (On Linux/Mac: `cp .env.example .env`)

2. Edit `backend/.env` with your settings:

   **Required (for email notifications):**
   - `EMAIL_USER` - Your email address
   - `EMAIL_PASS` - Your email password (Gmail App Password recommended)
   - `RECIPIENT_EMAIL` - Where to send contact form notifications
   - `EMAIL_SERVICE` - Set to `gmail` for Gmail

   **Optional:**
   - `PORT` - Server port (default: 5000)

## Step 3: Run the Application

**Development mode (both frontend and backend):**
```bash
npm run dev
```

**Or run separately:**

Terminal 1 (Backend):
```bash
cd backend
npm run dev
```

Terminal 2 (Frontend):
```bash
cd frontend
npm run dev
```

## Step 4: Access the Application

- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:5000

## Testing the Contact Form

1. Fill out the contact form on the website
2. Check your email inbox for the notification
3. The message will be sent directly to your email address

## Gmail Setup (for Email Notifications)

1. Enable 2-Factor Authentication on your Google account
2. Go to: https://myaccount.google.com/apppasswords
3. Generate an App Password for "Mail"
4. Use this App Password in `EMAIL_PASS` (not your regular password)

## Troubleshooting

**Port already in use:**
- Change `PORT` in `backend/.env` or `frontend/vite.config.js`

**Email not sending:**
- Verify email credentials in `.env` file
- Check spam folder
- For Gmail, ensure you're using an App Password (not your regular password)
- Test your email credentials with a simple email client first
- Check that `EMAIL_SERVICE` is set correctly (use `gmail` for Gmail)



