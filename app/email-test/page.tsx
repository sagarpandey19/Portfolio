'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { testEmailConfig } from '../actions/test-email';
import { toast } from 'sonner';

export default function EmailTestPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const runTest = async () => {
    setIsLoading(true);
    try {
      const testResult = await testEmailConfig();
      setResult(testResult);
      
      if (testResult.success) {
        toast.success('Email test successful! Check your inbox.');
      } else {
        toast.error(testResult.message || 'Email test failed');
      }
    } catch (error) {
      console.error('Error running test:', error);
      toast.error('An error occurred while testing');
      setResult({ success: false, error: 'Test execution error' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-3xl mx-auto px-4 py-20">
        <h1 className="text-3xl font-bold mb-8 text-center">Email Configuration Test</h1>
        
        <Card>
          <CardHeader>
            <CardTitle>Test Email Configuration</CardTitle>
            <CardDescription>
              This page helps you verify that your email configuration is working correctly.
              Click the button below to send a test email to your configured address.
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <div className="space-y-4">
              <p>
                <strong>What this test does:</strong> Sends a test email to the email address configured 
                in your application (<code>sagarpandey.in@gmail.com</code>).
              </p>
              
              <p>
                <strong>Prerequisites:</strong>
              </p>
              
              <ul className="list-disc pl-5 space-y-1">
                <li>You must have set up your <code>.env.local</code> file with a valid Gmail app password</li>
                <li>2-Step Verification must be enabled on your Google account</li>
                <li>The server must be running with the environment variables loaded</li>
              </ul>
            </div>
          </CardContent>
          
          <CardFooter className="flex flex-col items-start space-y-4">
            <Button 
              onClick={runTest} 
              disabled={isLoading}
              className="w-full"
            >
              {isLoading ? 'Testing...' : 'Run Email Test'}
            </Button>
            
            {result && (
              <div className="w-full mt-4 p-4 rounded-md border" style={{
                backgroundColor: result.success ? 'rgba(0, 200, 0, 0.1)' : 'rgba(255, 0, 0, 0.1)',
                borderColor: result.success ? 'rgba(0, 200, 0, 0.3)' : 'rgba(255, 0, 0, 0.3)',
              }}>
                <h3 className="font-medium mb-2">
                  Test Result: {result.success ? 'Success' : 'Failed'}
                </h3>
                
                {result.message && (
                  <p className="text-sm mb-2">{result.message}</p>
                )}
                
                {!result.success && result.error && (
                  <p className="text-sm text-red-600 mt-2">
                    Error: {typeof result.error === 'string' ? result.error : 'See console for details'}
                  </p>
                )}
              </div>
            )}
          </CardFooter>
        </Card>
        
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>
            For more information on setting up email, please refer to the 
            <a href="/EMAIL_SETUP.md" className="text-primary hover:underline ml-1">
              EMAIL_SETUP.md
            </a> file.
          </p>
        </div>
      </div>
    </div>
  );
}