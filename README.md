# CoachHub — Private Coaching App (Frontend)

A private coaching application frontend built with Next.js 14, TypeScript and Tailwind CSS.

## GitHub Repositories
•⁠  ⁠Frontend:https://github.com/mdulmini/coaching-frontend.git
•⁠  ⁠Backend: https://github.com/mdulmini/coaching-backend-.git

## Tech Stack
•⁠  ⁠Next.js 14 (App Router)
•⁠  ⁠TypeScript
•⁠  ⁠Tailwind CSS
•⁠  ⁠Axios

## Pages
| Route | Description |
|-------|-------------|
| ⁠ /onboarding ⁠ | Welcome screen |
| ⁠ /login ⁠ | Login screen |
| ⁠ /register ⁠ | Register screen |
| ⁠ /dashboard ⁠ | User dashboard |

## Features
•⁠  ⁠UI matches provided design exactly
•⁠  ⁠JWT Authentication
•⁠  ⁠Login / Register / Logout
•⁠  ⁠Form validation
•⁠  ⁠Responsive mobile-first design
•⁠  ⁠Connected to Spring Boot backend

## Setup Instructions

### Prerequisites
•⁠  ⁠Node.js 18+
•⁠  ⁠Backend running on port 8080

### Installation

Clone the repo:
⁠ bash
git clone https://github.com/mdulmini/coaching-frontend.git
cd coaching-frontend
 ⁠

Install dependencies:
⁠ bash
npm install
 ⁠

Create environment file:
⁠ bash
cp .env.example .env.local
 ⁠

Add this to .env.local:
NEXT_PUBLIC_API_URL=http://localhost:8080

Run development server:
⁠ bash
npm run dev
 ⁠

Open http://localhost:3000

## Environment Variables
| Variable | Description |
|----------|-------------|
| ⁠ NEXT_PUBLIC_API_URL ⁠ | Backend API URL |

## Project Structure
src/
├── app/
│   ├── onboarding/     # Welcome screen
│   ├── login/          # Login screen
│   ├── register/       # Register screen
│   ├── dashboard/      # Dashboard
│   ├── layout.tsx      # Root layout
│   └── globals.css     # Global styles
└── lib/
├── api.ts          # Axios instance
└── auth.ts         # Auth service


## API Integration
•⁠  ⁠POST /api/auth/register — Create account
•⁠  ⁠POST /api/auth/login — Login, returns JWT token
•⁠  ⁠GET /api/auth/health — Health check
