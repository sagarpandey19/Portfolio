# Deploying to Vercel

This guide will help you deploy your Next.js portfolio to Vercel, the platform created by the team behind Next.js.

## Prerequisites

- A Vercel account (sign up at [vercel.com](https://vercel.com) if you don't have one)
- Git installed on your computer
- Your portfolio code pushed to a GitHub, GitLab, or Bitbucket repository

## Deployment Steps

### 1. Deploy via Vercel Dashboard

1. Log in to your Vercel account
2. Click the "Add New..." button and select "Project"
3. Connect to your Git provider (GitHub, GitLab, or Bitbucket)
4. Select your portfolio repository
5. Configure the build settings:
   - Vercel will automatically detect that this is a Next.js project
   - Framework Preset: Next.js
   - Build Command: `npm run build` (should be auto-detected)
   - Output Directory: `.next` (should be auto-detected)
   - Install Command: `npm install` (should be auto-detected)
6. Add any required environment variables (if needed for email functionality):
   - Click on "Environment Variables"
   - Add the same variables you had in your local `.env` file
7. Click "Deploy"

### 2. Deployment via Vercel CLI

1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Log in to your Vercel account:
   ```bash
   vercel login
   ```

3. Navigate to your project directory and run:
   ```bash
   vercel
   ```

4. Follow the prompts to configure your project

5. For production deployment:
   ```bash
   vercel --prod
   ```

## Configuration

Your Next.js configuration in `next.config.js` is already set up correctly for Vercel deployment with server actions enabled:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed 'output: export' to enable server-side features
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  // Enable experimental server actions
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
```

## Environment Variables

For the contact form email functionality to work, you need to set up environment variables in Vercel:

1. Go to your project settings in Vercel
2. Navigate to the "Environment Variables" section
3. Click "Add"
4. Add the following variables (if you're using them in your app):
   - Key: `EMAIL_PASSWORD`
   - Value: Your email app password
   - Any other environment variables your app requires

## Custom Domain

After deployment, you can add a custom domain in the Vercel dashboard:

1. Go to your project settings in Vercel
2. Navigate to the "Domains" section
3. Click "Add" to add your custom domain
4. Follow the instructions to set up your domain

## Continuous Deployment

Vercel automatically sets up continuous deployment for your project:

- Every push to your main branch will trigger a production deployment
- Every pull request will create a preview deployment
- You can view deployment logs in the Vercel dashboard

## Troubleshooting

If you encounter any issues during deployment:

1. Check the build logs in the Vercel dashboard
2. Ensure all environment variables are correctly set
3. Verify that your Next.js configuration is correct
4. Make sure your repository is up to date

For more help, refer to the [Vercel documentation](https://vercel.com/docs) or [Next.js deployment documentation](https://nextjs.org/docs/deployment).