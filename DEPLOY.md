# Deploying to Netlify

This guide will help you deploy your Next.js portfolio to Netlify.

## Prerequisites

- A Netlify account (sign up at [netlify.com](https://netlify.com) if you don't have one)
- Git installed on your computer
- Your portfolio code pushed to a GitHub, GitLab, or Bitbucket repository

## Deployment Steps

### 1. Manual Deployment

1. Log in to your Netlify account
2. Click the "Add new site" button and select "Import an existing project"
3. Connect to your Git provider (GitHub, GitLab, or Bitbucket)
4. Select your portfolio repository
5. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy site"

### 2. Deployment via Netlify CLI

1. Install the Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Log in to your Netlify account:
   ```bash
   netlify login
   ```

3. Initialize your site:
   ```bash
   netlify init
   ```

4. Follow the prompts to either create a new site or connect to an existing one

5. Deploy your site:
   ```bash
   netlify deploy --prod
   ```

## Configuration

A `netlify.toml` file has been created in your project with the following configuration:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"

# Environment variables needed for email functionality
[build.environment]
  NODE_VERSION = "18.x"
```

This configuration tells Netlify:
- How to build your site (`npm run build`)
- Where the built files are located (`.next` directory)
- To use the Next.js plugin for optimal handling
- To use Node.js version 18.x for compatibility with server components and actions

## Environment Variables

For the contact form email functionality to work, you need to set up environment variables in Netlify:

1. Go to your site settings in Netlify
2. Navigate to the "Environment" section
3. Click "Add a variable"
4. Add the following variable:
   - Key: `EMAIL_PASSWORD`
   - Value: Your Gmail app password (not your regular Gmail password)

> **Note:** For Gmail, you need to create an app password. Go to your Google Account settings > Security > 2-Step Verification > App passwords, and create a new app password for your portfolio.

## Custom Domain

After deployment, you can add a custom domain in the Netlify dashboard:

1. Go to your site settings in Netlify
2. Navigate to the "Domain management" section
3. Click "Add custom domain"
4. Follow the instructions to set up your domain

## Troubleshooting

If you encounter any issues during deployment:

1. Check the build logs in the Netlify dashboard
2. Ensure your Next.js configuration is correct
3. Verify that all dependencies are properly installed
4. Make sure your repository is up to date

For more help, refer to the [Netlify documentation](https://docs.netlify.com/) or [Next.js deployment documentation](https://nextjs.org/docs/deployment).