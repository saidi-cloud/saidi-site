# SAIDI Website

This is the official website for SAIDI, built with Next.js 15.3.2.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v22.15.1 or later)
- npm (v10.9.2 or later)
- Git

## Local Development Setup

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd saidi-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory with the following variables:
   ```
   RESEND_API_KEY=your_resend_api_key_here
   ```
   You can get your Resend API key from the [Resend Dashboard](https://resend.com).

4. **Start the development server**
   ```bash
   npm run dev
   ```
   The site will be available at [http://localhost:3000](http://localhost:3000)

## Project Structure

- `/app` - Contains all the pages and components
- `/public` - Static assets like images
- `/app/api` - API routes including the contact form handler

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Contact Form Setup

The contact form requires a Resend account and domain setup:

1. Sign up for a [Resend account](https://resend.com)
2. Add your domain (saidi.sg) in the Resend dashboard
3. Configure the DNS records provided by Resend
4. Get your API key and add it to the `.env` file

## Deployment

The site is configured for deployment on Netlify. The following environment variables need to be set in the Netlify dashboard:
- `RESEND_API_KEY`

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

## License

[Add your license information here]
