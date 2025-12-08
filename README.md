# Gala Newsletter & Blog - PACS Website

## Live
https://projectdemosaj.vercel.app

## Overview

This website serves as a platform for the Performing Arts Centre Society (PACS) to share community news, event highlights, and volunteer opportunities. Built with modern web technologies, it offers an engaging user experience with responsive design and interactive elements.

## Key Features

### 1. Newsletter & Blog System
- **Featured Content Display**: Showcases the latest newsletter/blog posts with attractive cards
- **Detailed Blog Pages**: Full articles with rich content, images, and metadata
- **Interactive Elements**: Like, bookmark, and share functionality for blog posts
- **Category Organization**: Content organized by categories and tagged for easy navigation
- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices

### 2. Volunteer Position Portal
- **Opportunity Discovery**: Easy browsing of various volunteer positions
- **Search & Filter**: Find positions by category, interests, skills, or organizations
- **Position Details**: Comprehensive information about each volunteer opportunity
- **Engaging Interface**: Attractive hero section with call-to-action buttons

### 3. Donation System
- **Multiple Payment Options**: Support for credit card and electronic fund transfers
- **User-Friendly Interface**: Simple donation process with clear instructions
- **Visual Feedback**: Confetti animations and sound effects for successful donations
- **Tax Receipts**: Automatic provision of tax receipts for donations over $20

### 4. General Features
- **Responsive Design**: Mobile-first approach ensuring usability on all devices
- **Modern UI/UX**: Clean, intuitive interface with smooth animations and transitions
- **Performance Optimized**: Fast loading times and efficient resource management

## Technologies Used

This web application is built using a modern tech stack:

- **Frontend Framework**: React 18.3 with TypeScript 5.5
- **Build Tool**: Vite 6.4 for fast development and production builds
- **Routing**: React Router 7.9 for navigation
- **Styling**: Tailwind CSS 3.4 for utility-first styling
- **Animations**: Framer Motion 12.23 for smooth transitions
- **Backend Integration**: Supabase JS 2.57 for data management
- **Icons**: Lucide React for consistent iconography

## Development Scripts

- `npm run dev`: Start the development server
- `npm run build`: Create a production build
- `npm run preview`: Preview the production build locally
- `npm run lint`: Run ESLint for code quality checks
- `npm run typecheck`: Validate TypeScript types

## Project Structure

The project follows a component-based architecture with a clear separation of concerns:

```
src/
├── components/
│   ├── blog/         # Blog-specific UI components
│   └── volunteer/     # Volunteer system UI components
├── pages/            # Route-level page components
└── Routes.tsx        # Centralized application routing
```

## Getting Started

1. Clone the repository
2. Install dependencies with `npm install`
3. Start the development server with `npm run dev`
4. Open your browser to the displayed local address (typically http://localhost:5173)