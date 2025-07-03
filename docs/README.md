# Portfolio Documentation

This directory contains technical documentation for the portfolio website.

## Available Documentation

### Email System

- [Email Implementation Guide](./EMAIL_IMPLEMENTATION.md) - Technical details about how the email functionality is implemented, intended for developers.

### User Guides

- [Email Setup Guide](../EMAIL_SETUP.md) - Step-by-step instructions for setting up the email functionality.
- [Deployment Guide](../DEPLOY.md) - Instructions for deploying the portfolio website.

## Project Structure

The portfolio is built with Next.js 13 using the App Router and follows these key architectural principles:

1. **Server Components** - Leveraging React Server Components for improved performance
2. **Server Actions** - Using Next.js server actions for secure server-side operations
3. **Progressive Enhancement** - Ensuring functionality works even without JavaScript
4. **Type Safety** - TypeScript throughout the codebase for better developer experience
5. **Component-Based Design** - Reusable UI components with shadcn/ui

## Adding Documentation

When adding new documentation:

1. Create a new Markdown file with a descriptive name
2. Add a link to the new document in this README
3. Follow the existing documentation style for consistency
4. Include code examples where appropriate
5. Add a section for troubleshooting common issues