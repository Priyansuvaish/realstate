# Gmail Integration Setup Guide

This guide will help you configure Gmail to receive contact form submissions from your real estate website.

## Step 1: Create Gmail App Password

Since Gmail requires App Passwords for third-party applications, follow these steps:

### 1.1 Enable 2-Step Verification (if not already enabled)
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Under "How you sign in to Google", click on **2-Step Verification**
3. Follow the prompts to enable it (you'll need your phone)

### 1.2 Generate App Password
1. Go back to [Google Account Security](https://myaccount.google.com/security)
2. Under "How you sign in to Google", click on **App passwords**
   - If you don't see this option, make sure 2-Step Verification is enabled
3. In the "Select app" dropdown, choose **Mail**
4. In the "Select device" dropdown, choose **Other (Custom name)**
5. Type: `Real Estate Website` or any name you prefer
6. Click **Generate**
7. **IMPORTANT**: Copy the 16-character password shown (format: `xxxx xxxx xxxx xxxx`)
   - You won't be able to see this password again!
   - Save it somewhere safe temporarily

## Step 2: Update Your .env File

Open the `.env` file in your project root and replace the placeholder values:

```env
# SMTP Server Settings (keep these as is)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false

# SMTP Authentication
SMTP_USER=your-actual-email@gmail.com    # ← Replace with your Gmail address
SMTP_PASS=xxxx xxxx xxxx xxxx             # ← Replace with the App Password from Step 1

# Recipient Email (who receives the form submissions)
RECIPIENT_EMAIL=your-actual-email@gmail.com  # ← Replace with your Gmail address
```

### Example:
If your email is `john.doe@gmail.com` and your app password is `abcd efgh ijkl mnop`:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false

SMTP_USER=john.doe@gmail.com
SMTP_PASS=abcd efgh ijkl mnop

RECIPIENT_EMAIL=john.doe@gmail.com
```

## Step 3: Restart Your Development Server

After updating the `.env` file:

```bash
# Stop the current server (Ctrl + C)
# Then restart it
npm run dev
```

## Step 4: Test the Contact Form

1. Open your website in a browser
2. Click on "Get in touch" or the contact button
3. Fill out the form with test data
4. Submit the form
5. Check your Gmail inbox - you should receive an email with the contact form details

## Troubleshooting

### Issue: "Invalid login" or "Authentication failed"
**Solution**:
- Make sure you're using an App Password, not your regular Gmail password
- Verify that 2-Step Verification is enabled on your Google Account
- Check that there are no extra spaces in your `.env` file

### Issue: "Less secure app access"
**Solution**:
- This is outdated. Google now requires App Passwords
- Do NOT enable "Less secure app access" - use App Passwords instead

### Issue: Emails not being received
**Solution**:
- Check your Gmail Spam folder
- Verify the RECIPIENT_EMAIL in `.env` is correct
- Make sure your server is running (`npm run dev`)
- Check the browser console for any errors

### Issue: "Connection timeout"
**Solution**:
- Check your internet connection
- Some networks block SMTP ports - try a different network
- Verify SMTP_PORT is set to 587

## Security Notes

⚠️ **IMPORTANT SECURITY REMINDERS**:

1. **Never commit your `.env` file to Git**
   - It's already in `.gitignore` - keep it that way!
   - Never share your App Password publicly

2. **App Password vs Regular Password**
   - App Passwords are safer than your main Gmail password
   - If compromised, you can revoke it without changing your main password

3. **Revoke App Password** (if needed):
   - Go to [App passwords](https://myaccount.google.com/apppasswords)
   - Find "Real Estate Website"
   - Click the trash icon to revoke it

## Alternative: Using Different Email Providers

If you prefer to use a different email service:

### Outlook/Hotmail
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password
```

### SendGrid (Recommended for production)
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
```

## Production Deployment

For production (Vercel, Netlify, etc.), set environment variables in your hosting platform's dashboard:

- Don't include the `.env` file in deployment
- Add environment variables in the hosting platform settings
- Most platforms have an "Environment Variables" section in their dashboard

---

**Need Help?**
- Gmail App Passwords Guide: https://support.google.com/accounts/answer/185833
- Nodemailer Documentation: https://nodemailer.com/about/

**Questions or Issues?**
Check the contact form API logs for detailed error messages.
