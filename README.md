# DevOverflow

<div align="center">
  <br />
  <p>A modern developer community platform built with Next.js</p>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-MongoDB-black?style=for-the-badge&logoColor=white&logo=mongodb&color=47A248" alt="mongodb" />
    <img src="https://img.shields.io/badge/-ShadCN_UI-black?style=for-the-badge&logoColor=white&logo=shadcnui&color=000000" alt="shadcnui" />
    <img src="https://img.shields.io/badge/-Open_AI-black?style=for-the-badge&logoColor=white&logo=openai&color=412991" alt="openai" />
  </div>
</div>

## 📋 Table of Contents

1. [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Features](#features)
5. [Getting Started](#getting-started)
6. [Environment Variables](#environment-variables)
7. [Development](#development)

## 🤖 Introduction

DevOverflow is a modern developer community platform inspired by Stack Overflow, built with the latest web technologies. It provides a space for developers to ask questions, share knowledge, and collaborate with others in the tech community. The platform features AI-powered answers, gamification elements, and a clean, intuitive user interface.

## ⚙️ Tech Stack

- **Frontend Framework**: Next.js 15 with TypeScript
- **Styling**: TailwindCSS with ShadCN UI components
- **Database**: MongoDB with Mongoose
- **Authentication**: NextAuth.js
- **Form Handling**: React Hook Form with Zod validation
- **AI Integration**: OpenAI API
- **Rich Text Editor**: MDX Editor

## 📁 Project Structure

```
dev-overflow/
├── app/                    # Next.js app directory (App Router)
│   ├── (auth)/             # Authentication related routes
│   ├── (root)/             # Main application routes
│   ├── api/                # API routes
│   └── server-action-demo/ # Server actions examples
├── components/             # Reusable React components
├── constants/              # Application constants and configurations
├── context/                # React Context providers
├── database/               # Database models and configurations
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions and shared logic
├── public/                 # Static assets
├── types/                  # TypeScript type definitions
└── .vscode/                # VS Code specific settings
```

## 🔋 Features

👉 **Authentication**: Secure sign-in with NextAuth, supporting Email/Password, Google, and GitHub.

👉 **Home Page**: Displays questions with filters, search, and pagination for easy navigation.

👉 **Recommendations**: Personalized suggestions on the home page.

👉 **Complex Layout**: Organized layout with popular questions and tags in view.

👉 **Question Details**: View questions with rich content, including images and code blocks.

👉 **Voting**: Upvote/downvote on questions to highlight helpful content.

👉 **View Counter**: Tracks the number of views for each question.

👉 **Bookmarking**: Save questions for quick access later.

👉 **Answer Posting**: MDX editor with light/dark modes for submitting answers.

👉 **AI Answer Generation**: Get AI-generated responses to questions.

👉 **Answer Filtering**: Sort answers by newest or most-voted, with pagination.

👉 **Answer Voting**: Upvote/downvote answers to rank quality responses.

👉 **Collections**: Organized saved questions with filters, search, and pagination.

👉 **Community**: Browse all users with search, filters, and pagination.

👉 **Profile**: View user info, badges, and engagement history with pagination.

👉 **Job Finder**: Discover jobs with filters and search, tailored to the user’s location.

👉 **Tags Page**: List of all tags with question counts, filters, and pagination.

👉 **Tag Details**: View questions by tag with search and pagination.

👉 **Ask a Question**: Simple interface for posting new questions.

👉 **Edit & Delete**: Update or remove questions and answers with validation and authorization.

👉 **Global Search**: Find content across questions, users, tags, and more.

👉 **Responsive Design**: Fully optimized for a seamless experience on desktops, tablets, and mobile devices.

👉 **High Performance**: Fast loading and smooth interactions for an efficient user experience.

and many more, including code architecture and reusability

## 🚀 Getting Started

### Prerequisites

- Node.js (Latest LTS version)
- npm or yarn
- MongoDB instance
- OpenAI API key

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/dev-overflow.git
cd dev-overflow
```

2. Install dependencies:

```bash
npm install
```

## 🔑 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# MongoDB
MONGODB_URI=your_mongodb_uri

# OpenAI
OPENAI_API_KEY=your_openai_api_key

# Auth
AUTH_SECRET=your_auth_secret
NEXTAUTH_URL=http://localhost:3000

# Optional: Social Auth
AUTH_GOOGLE_ID=your_google_client_id
AUTH_GOOGLE_SECRET=your_google_client_secret
AUTH_GITHUB_ID=your_github_client_id
AUTH_GITHUB_SECRET=your_github_client_secret
```

## 💻 Development

Run the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
