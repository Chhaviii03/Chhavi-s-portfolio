# Gmail App Password Setup Guide

## Quick Fix for "Email authentication failed" Error

The error means Gmail is rejecting your login credentials. Follow these steps:

### Step 1: Enable 2-Factor Authentication

1. Go to: https://myaccount.google.com/security
2. Scroll to "How you sign in to Google"
3. Click on "2-Step Verification"
4. Follow the prompts to enable it (you'll need your phone)

### Step 2: Generate App Password

1. Go to: https://myaccount.google.com/apppasswords
   - If you can't access this link, make sure 2FA is enabled first
   
2. You'll see a page titled "App passwords"

3. Select:
   - **App**: Choose "Mail"
   - **Device**: Choose "Other (Custom name)"
   - **Name**: Type "Portfolio Contact Form"
   - Click "Generate"

4. You'll see a 16-character password like: `abcd efgh ijkl mnop`
   - **Important**: Copy this password exactly (you can include or remove spaces, both work)
   - This is the ONLY time you'll see it - save it somewhere safe!

### Step 3: Update Your .env File

Open `backend/.env` and make sure it looks exactly like this:

```env
PORT=5000
EMAIL_SERVICE=gmail
EMAIL_USER=cbhatt0304@gmail.com
EMAIL_PASS=abcdefghijklmnop
RECIPIENT_EMAIL=cbhatt0304@gmail.com
```

**Important Notes:**
- Replace `abcdefghijklmnop` with your actual 16-character App Password
- No quotes around the values
- No spaces before or after the `=` sign
- Make sure there are no extra spaces in the password

### Step 4: Restart Backend Server

After updating `.env`:
1. Stop your backend server (Ctrl+C in the terminal)
2. Start it again: `cd backend && npm run dev`

### Step 5: Test Again

Try submitting the contact form again.

## Common Issues

### "I can't access the App Passwords page"
- Make sure 2-Factor Authentication is enabled first
- Wait a few minutes after enabling 2FA, then try again

### "The password doesn't work"
- Make sure you copied the App Password, not your regular password
- Remove any spaces from the password in `.env` file
- Make sure there are no quotes around the password
- Restart the backend server after changing `.env`

### "Still getting authentication error"
1. Double-check your `.env` file format
2. Make sure `EMAIL_SERVICE=gmail` (lowercase)
3. Verify the email address is correct
4. Try generating a new App Password
5. Check the backend console for detailed error messages

## Alternative: Use a Different Email Service

If Gmail continues to cause issues, you can use other email services:

### Outlook/Hotmail
```env
EMAIL_SERVICE=outlook
EMAIL_USER=your-email@outlook.com
EMAIL_PASS=your-password
```

### Custom SMTP
```env
SMTP_HOST=smtp.yourdomain.com
SMTP_PORT=587
SMTP_SECURE=false
EMAIL_USER=your-email@yourdomain.com
EMAIL_PASS=your-password
```

## Need Help?

Check the backend console output - it will show detailed error messages to help identify the exact issue.

