'use server';

import { sendEmail } from './email';

/**
 * Utility function to test email configuration
 * This can be used from the browser console or a test page
 */
export async function testEmailConfig() {
  try {
    // Create test data
    const testData = {
      name: 'Test User',
      email: 'test@example.com',
      subject: 'Email Configuration Test',
      message: 'This is a test message to verify email configuration is working correctly.'
    };
    
    // Attempt to send test email
    const result = await sendEmail(testData);
    
    // Log the result
    console.log('Email test result:', result);
    
    return result;
  } catch (error) {
    console.error('Test email failed:', error);
    return {
      success: false,
      error: 'Test execution error',
      message: 'Failed to execute test. See console for details.'
    };
  }
}