# Email Setup for Contact Form

## Overview
This document explains how to set up the email functionality for the contact form in your portfolio website. The contact form is configured to send emails to `sagarpandey.in@gmail.com` when someone submits the form.

## Prerequisites
- Gmail account (sagarpandey.in@gmail.com)
- App password for your Gmail account (not your regular password)
- 2-Step Verification must be enabled on your Google account

## Setup Instructions

### 1. Enable 2-Step Verification (if not already enabled)

1. Go to your Google Account settings: https://myaccount.google.com/
2. Select "Security" from the left sidebar
3. Under "Signing in to Google," find "2-Step Verification" and click on it
4. Follow the prompts to enable 2-Step Verification for your account
5. Complete the verification process as instructed

### 2. Create a Gmail App Password
For security reasons, Gmail requires an app password for third-party applications:

1. Go to your Google Account settings: https://myaccount.google.com/
2. Navigate to Security > 2-Step Verification > App passwords
   (Note: This option only appears after you've enabled 2-Step Verification)
3. Select "Mail" as the app and "Other (Custom name)" as the device
4. Enter a name like "Portfolio Contact Form" and click "Generate"
5. Google will display a 16-character app password (with spaces)
6. Copy this password - **IMPORTANT**: This password will only be shown once!

### 3. Configure Environment Variables

1. Open the `.env.local` file in the root of your project
2. Replace `your_app_password_here` with the app password you generated:
   ```
   EMAIL_PASSWORD=your_generated_app_password
   ```
   
   **Important Notes:**
   - Do NOT include spaces from the displayed password
   - Do NOT use quotes around the password
   - Example: If Google shows "abcd efgh ijkl mnop", enter `EMAIL_PASSWORD=abcdefghijklmnop`

### 4. Restart the Development Server
After setting up the environment variable, restart your Next.js development server for the changes to take effect:

```bash
npm run dev
```

### 5. Verify Configuration
To verify that your email configuration is working properly, you have two options:

**Option 1: Use the Email Test Page**
1. Go to `/email-test` in your browser (e.g., http://localhost:3000/email-test)
2. Click the "Run Email Test" button
3. You should see a success message if everything is configured correctly
4. Check your Gmail inbox for the test email

**Option 2: Test via Contact Form**
1. Go to the Contact page of your portfolio
2. Fill out the contact form with test information
3. Submit the form
4. You should see a success message if everything is configured correctly
5. Check your Gmail inbox for the test email

## How It Works

1. When a user submits the contact form, the data is sent to the server action (`app/actions/email.ts`)
2. The server action validates the form data using Zod schema validation
3. If validation passes, Nodemailer creates and sends an email to your Gmail address
4. The email is sent from your Gmail account but sets the Reply-To header to the visitor's email
5. The user receives a success or error message based on the result

## Enhanced Features

- **Improved Validation**: Form inputs are validated with specific length requirements
- **Better Error Handling**: Detailed error messages for different failure scenarios
- **Environment Variable Check**: The system checks if EMAIL_PASSWORD is configured
- **Proper Email Headers**: Uses your email as the sender with the visitor's email as reply-to
- **Responsive Feedback**: User-friendly success and error messages

## Troubleshooting

If emails are not being sent:

1. Check that you've entered the correct app password in `.env.local`
2. Ensure your Gmail account doesn't have additional security restrictions
3. Check the browser console and server logs for any error messages
4. Make sure the `nodemailer` package is installed
5. Verify that server actions are enabled in your Next.js config
6. Try sending a test email with minimal content to rule out content-related issues
7. Check if Gmail is blocking the email as suspicious activity

## Security Notes

- Never commit your `.env.local` file to version control
- The app password gives access only to the specific application, not your entire Google account
- Input validation is performed on both client and server side to prevent malicious inputs
- For production deployment, set up the EMAIL_PASSWORD environment variable in your hosting platform
- Consider using a dedicated email service like SendGrid or Mailgun for production environments with high email volumes

## Testing the Contact Form

1. Fill out all fields in the contact form with valid information
2. Submit the form
3. You should see a success message if everything is configured correctly
4. Check your Gmail inbox for the received message
5. Try replying to the email - it should go directly to the sender's email address