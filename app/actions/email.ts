'use server';

import nodemailer from 'nodemailer';
import { z } from 'zod';

// Define a schema for contact form validation
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name is too long'),
  email: z.string().email('Please enter a valid email address').max(100, 'Email is too long'),
  subject: z.string().min(5, 'Subject must be at least 5 characters').max(200, 'Subject is too long'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(5000, 'Message is too long'),
});

type ContactForm = z.infer<typeof contactSchema>;
type EmailResponse = { success: boolean; error?: any; message?: string };

/**
 * Sends an email with the contact form data
 * @param data The contact form data
 * @returns A response object indicating success or failure
 */
export async function sendEmail(data: ContactForm): Promise<EmailResponse> {
  // Validate the data
  const validationResult = contactSchema.safeParse(data);
  
  if (!validationResult.success) {
    return { 
      success: false, 
      error: validationResult.error.format(),
      message: 'Invalid form data. Please check your inputs.'
    };
  }

  // Check if email password is configured
  if (!process.env.EMAIL_PASSWORD || process.env.EMAIL_PASSWORD === 'your_app_password_here') {
    console.error('EMAIL_PASSWORD environment variable is not properly set');
    return { 
      success: false, 
      error: 'Email configuration error',
      message: 'Email is not configured. Please set up your email password in .env.local file.'
    };
  }

  try {
    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'sagarpandey.in@gmail.com', // Your email
        pass: process.env.EMAIL_PASSWORD, // Use environment variable for security
      },
    });

    // Email content
    const mailOptions = {
      from: `"Portfolio Contact" <sagarpandey.in@gmail.com>`, // Use your email as sender for better deliverability
      replyTo: data.email, // Set reply-to as the sender's email
      to: 'sagarpandey.in@gmail.com',
      subject: `Portfolio Contact: ${data.subject}`,
      text: `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Subject:</strong> ${data.subject}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-left: 4px solid #0070f3;">
            <p><strong>Message:</strong></p>
            <p>${data.message.replace(/\n/g, '<br>')}</p>
          </div>
          <p style="margin-top: 20px; font-size: 12px; color: #666;">
            This email was sent from your portfolio contact form.
          </p>
        </div>
      `,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return { 
      success: true,
      message: 'Your message has been sent successfully!'
    };
  } catch (error) {
    console.error('Error sending email:', error);
    // Convert error to string to avoid passing Error objects to client components
    const errorMessage = error instanceof Error ? error.message : String(error);
    return { 
      success: false, 
      error: 'Email sending failed', 
      message: `Failed to send email: ${errorMessage}. Please try again later.`
    };
  }
}