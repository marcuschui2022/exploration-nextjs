# Exploration Next.js

Welcome to the Exploration Next.js repository! This project is dedicated to exploring the various features and
capabilities of Next.js through building a modern web application.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Features](#features)
- [Packages Used](#packages-used)
- [Development Tools](#development-tools)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project aims to explore the various features and capabilities of Next.js by building an engaging and fully
functional website for The Wild Oasis. The repository serves as a resourceful guide for best practices and feature
implementations in a real-world application.

## Getting Started

To get started with the project, follow these steps:

### Prerequisites

Make sure you have the following software installed:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [pnpm](https://pnpm.io/)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/marcuschui2022/exploration-nextjs.git
    ```
2. Navigate to the project directory:
    ```sh
    cd exploration-nextjs
    ```

3. Install dependencies using pnpm:
    ```sh
    pnpm install
    ```

4. Create a `.env.local` file in the root directory and add your Supabase credentials:
    ```env
    SUPABASE_URL=your-supabase-url
    SUPABASE_KEY=your-supabase-key
    ```

### Running the Development Server

Start the development server:

```sh
pnpm run dev
```

Open your browser and visit [http://localhost:3000](http://localhost:3000) to see the application in action.

## Project Structure

A brief overview of the project structure:

```plaintext
.
├── app/               # Application files
│   ├── _components/   # React components
│   ├── _lib/          # Library code
│   ├── _styles/       # CSS and styles
│   ├── about/         # About page
│   ├── account/       # Account related pages
│   ├── cabins/        # Cabins related pages
│   ├── error.tsx      # Error page
│   ├── icon.png       # Icon images
│   ├── layout.tsx     # Main layout
│   ├── loading.tsx    # Loading indicator
│   ├── not-found.tsx  # 404 page
│   └── page.tsx       # Default page
├── public/            # Static assets
│   ├── about-1.jpg    # About page images
│   ├── about-2.jpg    # About page images
│   ├── bg.png         # Background image
│   └── logo.png       # Logo image
├── .env.local         # Environment variables for Supabase
├── .eslintrc.js       # ESLint configuration
├── .prettierrc        # Prettier configuration
├── next-env.d.ts      # TypeScript types for Next.js
├── next.config.mjs    # Next.js configuration
├── package-lock.json  # Lockfile for package manager
├── package.json       # Project dependencies
├── pnpm-lock.yaml     # pnpm lockfile
├── postcss.config.mjs # PostCSS configuration
├── tailwind.config.ts # Tailwind CSS configuration
└── README.md          # Project README file
```

## Features

- Next.js pages and routing
- Static Generation (SSG) and Server-Side Rendering (SSR)
- API Routes with Next.js
- Custom Hooks and Utilities
- Integration with TailwindCSS for styling
- Environment variable handling
- Integration with Supabase as a backend service
- Use of Heroicons for icons
- Date handling with date-fns
- Image processing with sharp

## Packages Used

- `@heroicons/react`: Icon components for React
- `@supabase/supabase-js`: Supabase integration
- `date-fns`: Date utility functions
- `sharp`: Image processing
- `tailwindcss`: Utility-first CSS framework

## Development Tools

- `prettier`: Code formatting
- `eslint`: Linting JavaScript/TypeScript code
- `typescript`: Type checking
- `pnpm`: Package manager

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Make sure your code
adheres to the project's coding standards.

## License

No license
