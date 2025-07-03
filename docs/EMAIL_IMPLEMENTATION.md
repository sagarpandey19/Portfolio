# Email Functionality Implementation Guide

## Overview

This document explains the technical implementation of the email functionality in the portfolio website. It's intended for developers who need to understand, maintain, or extend the email sending capabilities.

## Architecture

The email functionality is implemented using a server action in Next.js, which allows secure server-side processing of form submissions. The implementation follows these principles:

1. **Security**: Email credentials are stored in environment variables, not in the codebase
2. **Validation**: Both client-side and server-side validation ensure data integrity
3. **Error Handling**: Comprehensive error handling with user-friendly messages
4. **Maintainability**: Clear separation of concerns between UI and email logic

## Key Components

### 1. Server Action (`app/actions/email.ts`)

The core email functionality is implemented as a Next.js server action, which:

- Validates input data using Zod schema
- Checks for proper configuration of environment variables
- Uses Nodemailer to send emails via Gmail SMTP
- Returns structured responses with appropriate success/error information
- Handles errors gracefully, converting Error objects to strings for client consumption

```typescript
// Key function signature
export async function sendEmail(data: ContactForm): Promise<EmailResponse>
```

### 2. Contact Form (`app/contact/page.tsx`)

The contact form component:

- Uses react-hook-form for form state management
- Implements client-side validation with Zod
- Calls the server action on form submission
- Displays appropriate success/error messages using toast notifications
- Handles loading states during form submission

### 3. Test Utilities

#### Email Test Page (`app/email-test/page.tsx`)

A dedicated page for testing email configuration that:

- Provides a simple UI for triggering a test email
- Displays detailed results of the test
- Helps diagnose configuration issues

#### Test Email Function (`app/actions/test-email.ts`)

A server action specifically for testing email functionality that:

- Creates a test email with predefined content
- Calls the main sendEmail function
- Returns detailed results for debugging

## Configuration

Email functionality requires:

1. A Gmail account with 2-Step Verification enabled
2. An app password generated for the application
3. The app password stored in `.env.local` as `EMAIL_PASSWORD`

Detailed setup instructions are available in `EMAIL_SETUP.md` in the project root.

## Error Handling

The implementation includes several layers of error handling:

1. **Client-side validation**: Prevents invalid form submissions
2. **Server-side validation**: Double-checks data integrity
3. **Configuration checks**: Verifies email credentials are properly set up
4. **SMTP error handling**: Catches and processes email sending errors
5. **User feedback**: Provides appropriate error messages based on error type

## Security Considerations

- Email credentials are stored in environment variables, not in code
- Server actions ensure credentials are never exposed to the client
- Input validation helps prevent injection attacks
- Error messages are sanitized to avoid leaking sensitive information

## Future Improvements

Potential enhancements to consider:

1. Add rate limiting to prevent abuse
2. Implement email templates for more sophisticated formatting
3. Add email queue for handling high volumes
4. Support for alternative email providers (SendGrid, Mailgun, etc.)
5. Add email analytics tracking

## Troubleshooting

Common issues and solutions:

1. **Emails not sending**: Check Gmail app password and 2-Step Verification
2. **"Email configuration error"**: Verify `.env.local` has the correct EMAIL_PASSWORD
3. **SMTP connection errors**: Check network connectivity and Gmail settings
4. **Form validation errors**: Check the browser console for detailed validation errors

## Related Files

- `app/actions/email.ts`: Main email sending functionality
- `app/actions/test-email.ts`: Test utility for email functionality
- `app/contact/page.tsx`: Contact form implementation
- `app/email-test/page.tsx`: Test page for email configuration
- `.env.local`: Environment variables for email configuration
- `EMAIL_SETUP.md`: User-facing setup instructions