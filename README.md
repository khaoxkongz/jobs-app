# Jobs App

Jobs App is a web application for employers to post job listings and for job seekers to search and view details of open job positions.

## Features

- Display all available job listings
- View details of each job listing
- Add new job listing
- Edit existing job listing
- Delete job listing

## Technologies

- React
- React Router
- Vite
- Tailwind CSS
- TypeScript
- Json-server (for mocking API)

## Project Structure

```shell
.
├── README.md
├── index.html
├── jobs.json
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js
├── src
│   ├── App.css
│   ├── App.tsx
│   ├── assets
│   │   └── images
│   │       └── logo.png
│   ├── components
│   │   ├── Card.tsx
│   │   ├── Hero.tsx
│   │   ├── HomeCards.tsx
│   │   ├── HomePage.tsx
│   │   ├── JobListing.tsx
│   │   ├── JobListings.tsx
│   │   ├── Navbar.tsx
│   │   ├── NotFound.tsx
│   │   ├── Spinner.tsx
│   │   └── ViewAllJobs.tsx
│   ├── hook
│   │   ├── index.ts
│   │   └── useJobListings.ts
│   ├── index.css
│   ├── interfaces
│   │   ├── component.ts
│   │   ├── hook.ts
│   │   ├── job.dto.ts
│   │   └── page.ts
│   ├── layouts
│   │   └── MainLayout.tsx
│   ├── main.tsx
│   ├── pages
│   │   ├── AddJobPage.tsx
│   │   ├── EditJobPage.tsx
│   │   ├── HomePage.tsx
│   │   ├── JobPage.tsx
│   │   └── JobsPage.tsx
│   └── vite-env.d.ts
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Components

This section explains the purpose of each major component or directory within the project.

### components/

The `components/` directory contains reusable React components like `Card`, `Navbar`, `JobListing`, etc. These components are used throughout the application to build the user interface.

### hooks/

The `hooks/` directory houses custom React hooks for sharing logic between components. For example, the `useJobListings` hook fetches and manages the state of job listings.

### interfaces/

The `interfaces/` directory contains TypeScript interfaces for defining types and props used across the application. This helps ensure type safety and better code organization.

### layouts/

The `layouts/` directory includes layout components like `MainLayout` that provide a consistent UI structure throughout the application.

### pages/

The `pages/` directory consists of components representing different pages or routes, such as `HomePage`, `JobsPage`, `AddJobPage`, etc. These components are responsible for rendering the appropriate content based on the current URL.

## Installation

1. Clone the repository: `git clone https://github.com/username/jobs-app.git`
2. Navigate to the project directory: `cd jobs-app`
3. Install dependencies: `pnpm install`

## Running the Application

1. Start the development server: `pnpm run dev`
2. In another terminal, start the mock API server: `pnpm run server`
3. Open your browser and navigate to `http://localhost:3000`
